const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Влад'},
        {id: 2, name: 'Кирилл'},
        {id: 3, name: 'Вадим'},
        {id: 4, name: 'Даша'},
        {id: 5, name: 'Коля'}
    ],

    messages: [
        {id: 1, message: "Привет"},
        {id: 2, message: "Как дела ?"},
        {id: 3, message: "Сегодня хороший день !"},
        {id: 4, message: "Ура! пятница)"},
        {id: 5, message: "Доброе утро"}
    ]
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
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

export const SendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;