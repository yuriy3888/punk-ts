import {Dispatch} from "redux";
import {connect} from 'react-redux';
import {ICombinedReducers} from "../../shared/reducers/reducers";
import {fetchItem, IAction} from "../../shared/actions/item.actions";
import {ItemDetailsPage, ItemPageDP, ItemPageSP} from "./item-details.page";

function mapStateToProps(reducers: ICombinedReducers): ItemPageSP {
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

function mapDispatchToProps(dispatch: Dispatch<IAction>): ItemPageDP {
    return {
        fetchItem: (id: string) => {
            fetchItem(dispatch, id)
                .then(dispatch);
        }
    }
}

export const ItemDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(ItemDetailsPage);
