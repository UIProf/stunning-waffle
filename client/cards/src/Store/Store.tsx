import React, { useReducer } from 'react';

export interface IState {
    eligibleCards: Array<String>;
}

export interface IAction {
    type: string;
    payload: any;
}

const initialState:IState = {
    eligibleCards:[],
}

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case "POST_DATA_RESPONSE":
            return {...state, eligibleCards: action.payload}
        default:
            return state;
    }
}

export const StoreProvider = ({children}:JSX.ElementChildrenAttribute):JSX.Element => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={{state,  dispatch}}>{children}</Store.Provider>
    );
}