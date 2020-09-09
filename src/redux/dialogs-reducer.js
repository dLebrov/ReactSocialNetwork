import { dialogsAPI } from "../api/api";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';
const GET_FRIEND_ID ='GET_FRIEND_ID';

let initialState = {
    dialogs: [],
    messages: [],
    idFriend: null
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
            };
        case SET_DIALOGS:
            return {
                ...state,
                ...state.dialogs,
                dialogs: action.dialogs,
                idFriend: action.dialogs.map(id => { return id.id})
            };
        case SET_ALL_MESSAGES:
            return {
                ...state,
                ...state.messages,
                messages: action.allessages
            };
        // эксперементировал
        case GET_FRIEND_ID: 
            return {
                ...state,
                ...state.idFriend,
                idFriend: state.dialogs.map((m) => (m.id === action.id) ? {idFriend: action.id}: null)
            };
        //
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
                dialogs: [...state.dialogs, {id: 6, name: 'Дима'}]
            };
        default:
            return state;

    }
}

export const setAllDialogs = (dialogs) =>({type: SET_DIALOGS, dialogs});
export const SendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const SetAllMessages = (allMessages) =>({type: SET_ALL_MESSAGES, allMessages})
export const getFriendId = (id) => ({type: GET_FRIEND_ID, id})

export const getAllDialogs = () => async (dispatch) => {
    let response = await dialogsAPI.getDialogs();
    dispatch(setAllDialogs(response.data));
};

export const getAllMessages = () => async (dispatch, getState) => {
    let friendId = getState().dialogsPage.idFriend;
    let response = await dialogsAPI.getAllMessages(friendId);
    dispatch(SetAllMessages(response.data.items));
    
}

export default dialogsReducer;