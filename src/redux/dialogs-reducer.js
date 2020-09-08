import { dialogsAPI } from "../api/api";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';

let initialState = {
    dialogs: [],
    messages: []
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
                dialogs: action.dialogs
            };
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

export const getAllDialogs = () => async (dispatch) => {
    let response = await dialogsAPI.getDialogs();
    dispatch(setAllDialogs(response.data));
};

export default dialogsReducer;