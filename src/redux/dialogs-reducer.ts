import { Identifier } from "typescript";
import { dialogsAPI } from "../api/api";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_DIALOGS = 'SET_DIALOGS';
const SET_ALL_MESSAGES = 'SET_ALL_MESSAGES';
const BEGINING_CHATTING = 'BEGINING_CHATTING';

type DialogsType = [
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos: {
        small: null | string,
        large: null | string
    }
]

type MessagesType = [
        id: string,
        body: string,
        translatedBody: null | any,
        addedAt: string,
        senderId: number,
        senderName: string,
        recipientId: number,
        viewed: boolean
]

type InitialState = {
    dialogs: DialogsType | [],
    messages: MessagesType | []
};

let initialState: InitialState = {
    dialogs: [],
    messages: []
}
const dialogsReducer = (state = initialState, action: any) => {
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
            };
        case SET_ALL_MESSAGES:
            return {
                ...state,
                ...state.messages,
                messages: action.allMessages,
                totalCount: action.totalCount
            };
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages , {id: 6, message: body}],
                dialogs: [...state.dialogs, {id: 6, name: 'Дима'}]
            };
        default:
            return state;

    }
}

export const setAllDialogs = (dialogs) =>({type: SET_DIALOGS, dialogs});
export const SendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});
export const SetAllMessages = (allMessages, totalCount) =>({type: SET_ALL_MESSAGES, allMessages , totalCount});
export const beginingChattingAC = (data) =>({type: BEGINING_CHATTING, data});

export const getAllDialogs = () => async (dispatch) => {
    let response = await dialogsAPI.getDialogs();
    dispatch(setAllDialogs(response.data));
};

export const getAllMessages = (id) => async (dispatch) => {
    let response = await dialogsAPI.getAllMessages(id);
    dispatch(SetAllMessages(response.data.items, response.data.totalCount));
}

export const sendMessageThunk = (id, message) => async (dispatch: any) => {
    await dialogsAPI.sendMessage(id, message);
    dispatch(getAllMessages(id));
}

export default dialogsReducer;