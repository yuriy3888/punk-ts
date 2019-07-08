import {combineReducers, createStore, Reducer} from 'redux'
import {ItemReducer, ItemState} from "./item.reducer";
import {composeWithDevTools} from "redux-devtools-extension";

export interface ICombinedReducers {
    item: ItemState
}

const CombinedReducers: Reducer<ICombinedReducers> = combineReducers({
    item: ItemReducer
});

export const store = createStore(
    CombinedReducers,
    composeWithDevTools()
);
