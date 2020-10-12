import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
};


const appReducer = (state = initialState, action: any): InitialStateType => {
    if (action.type === SET_INITIALIZED) {
        return {
            ...state,
            initialized: true
        }
    } else {
        return state;
    }
}

type SetInitialized = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = ():SetInitialized => ({type: SET_INITIALIZED})
export const initializeApp = () => (dispatch: any) => {
        let promise = dispatch(getAuthUserData());
        promise.then(() =>{
            dispatch(setInitialized())
        })

    }

export default appReducer;