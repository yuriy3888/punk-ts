import {Dispatch} from "redux";
import {connect} from 'react-redux';
import {ICombinedReducers} from "../../shared/reducers/reducers";
import ListPage, {ListPageDP, ListPageSP} from "./list.page";
import {fetchItems, IAction, updateItems} from "../../shared/actions/item.actions";
import {ItemModel} from "../item-details/item.model";

function mapStateToProps(reducers: ICombinedReducers): ListPageSP {
    return {
        items: reducers.item.items,
        selectedItem: reducers.item.selectedItem,
        currentPageItems: reducers.item.currentPageItems,
        pageCount: reducers.item.pageCount,
        itemsPerPage: reducers.item.itemsPerPage,
        loading: reducers.item.loading,
        error: reducers.item.error
    }
}

function mapDispatchToProps(dispatch: Dispatch<IAction>): ListPageDP {
    return {
        fetchItems: () => {
            fetchItems(dispatch)
                .then(dispatch);
        },
        updateItems: (items: ItemModel[], sortBy: string) => {
            updateItems(dispatch, items, sortBy);
        }
    }
}

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(ListPage);


