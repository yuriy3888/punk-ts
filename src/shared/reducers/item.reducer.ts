import {
    FETCH_ITEM,
    FETCH_ITEM_FAILURE,
    FETCH_ITEM_SUCCESS,
    FETCH_ITEMS,
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_SUCCESS,
    UPDATE_ITEMS,
    UPDATE_ITEMS_FAILURE,
    UPDATE_ITEMS_SUCCESS,
    IAction,
} from "../actions/item.actions";
import {ItemModel} from "../../pages/item-details/item.model";

export interface ItemState {
    items: ItemModel[];
    selectedItem: ItemModel | null;
    currentPageItems: Array<ItemModel[]>;
    pageCount: number;
    itemsPerPage: number;
    loading: boolean;
    error: string;
}

export const initialItemState: ItemState = {
    items: [],
    selectedItem: null,
    currentPageItems: [],
    pageCount: 0,
    itemsPerPage: 16,
    loading: false,
    error: ''
};

export function ItemReducer(state: ItemState = initialItemState, action: IAction): ItemState {
    const itemsChunks = (arr: ItemModel[], perPage: number) => {
        return arr.reduce((acc: Array<ItemModel[]>, value: ItemModel, i: number, initial: ItemModel[]): Array<ItemModel[]> => ((i % perPage) ? acc : [...acc, initial.slice(i, i + perPage)]), []);
    };

    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEMS_SUCCESS:
            const items = action.items;
            const chunks = itemsChunks(items, state.itemsPerPage);
            return {
                ...state,
                loading: false,
                items: action.items,
                currentPageItems: chunks
            };
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case FETCH_ITEM:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
                selectedItem: action.item
            };
        case FETCH_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case UPDATE_ITEMS:
            return {
                ...state,
                loading: true
            };
        case UPDATE_ITEMS_SUCCESS:
            const sortedItems = [...state.items];
            sortedItems.sort((item: ItemModel, item2: ItemModel) => {
                if (action.sortBy === 'name') {
                    return item.name.localeCompare(item2.name);
                } else if (action.sortBy === 'abv') {
                    return item.abv < item2.abv ? -1 : 1;
                }
                return 0;
            });
            const updatedItemsChunks = itemsChunks(sortedItems, state.itemsPerPage);

            return {
                ...state,
                loading: false,
                items: sortedItems,
                currentPageItems: updatedItemsChunks
            };
        case UPDATE_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
