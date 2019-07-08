import {Dispatch} from "redux";
import {ItemService} from "../api/item.service";
import {ItemModel} from "../../pages/item-details/item.model";

export const FETCH_ITEMS = "FETCH_ITEMS";
export const FETCH_ITEMS_SUCCESS = "FETCH_ITEMS_SUCCESS";
export const FETCH_ITEMS_FAILURE = "FETCH_ITEMS_FAILURE";

export const FETCH_ITEM = "FETCH_ITEM";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_ITEM_FAILURE = "FETCH_ITEM_FAILURE";

export const UPDATE_ITEMS = "UPDATE_ITEMS";
export const UPDATE_ITEMS_SUCCESS = "UPDATE_ITEMS_SUCCESS";
export const UPDATE_ITEMS_FAILURE = "UPDATE_ITEMS_FAILURE";

export interface IAction {
    type: string;

    [key: string]: any;
}

function fetchItemsLoader(): IAction {
    return {
        type: FETCH_ITEMS
    }
}

function fetchItemLoader(): IAction {
    return {
        type: FETCH_ITEM
    }
}

function updateItemsLoader(): IAction {
    return {
        type: UPDATE_ITEMS
    }
}

export function fetchItems(dispatch: Dispatch<IAction>): Promise<IAction> {
    dispatch(fetchItemsLoader());
    return ItemService.fetchItems()
        .then((result: ItemModel[]) => {
            return {
                type: FETCH_ITEMS_SUCCESS,
                items: result
            }
        })
        .catch((error: any) => {
            return {
                type: FETCH_ITEMS_FAILURE,
                error: error.message
            }
        });
}

export function fetchItem(dispatch: Dispatch<IAction>, id: string): Promise<IAction> {
    dispatch(fetchItemLoader());
    return ItemService.fetchItem(id)
        .then((result: ItemModel) => {
            return {
                type: FETCH_ITEM_SUCCESS,
                item: result
            }
        })
        .catch((error: any) => {
            return {
                type: FETCH_ITEM_FAILURE,
                error: error.message
            }
        });
}

export function updateItems(dispatch: Dispatch<IAction>, items: ItemModel[], sortBy: string) {
    dispatch(updateItemsLoader());
    if (items) {
        dispatch({
            type: UPDATE_ITEMS_SUCCESS,
            sortBy
        });
        return;
    }
    dispatch({
        type: UPDATE_ITEMS_FAILURE,
        error: 'Could update the items'
    });
}
