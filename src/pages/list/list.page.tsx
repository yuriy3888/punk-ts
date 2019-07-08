import * as React from "react";
import Item from "../../components/item/item";
import {ListWrapper} from "./styles";
import ReactPaginate from "react-paginate";
import {ItemState} from "../../shared/reducers/item.reducer";
import Loading from "../../components/loading/loading";
import {ItemModel} from "../item-details/item.model";

export interface ListPageSP extends ItemState {
}

export interface ListPageDP {
    fetchItems: () => void;
    updateItems: (items: ItemModel[], sortBy: string) => void;
}

interface Props extends ListPageDP, ListPageSP {
}

interface State {
    pageNumber: number;
}

export default class ListPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        if(!(this.props && this.props.items && this.props.items.length > 0)) {
            this.props.fetchItems();
        }

        this.state = {
            pageNumber: 0 //InitialPage
        };

        this.handlePageClick = this.handlePageClick.bind(this);
        this.filterUpdateItems = this.filterUpdateItems.bind(this);
    }

    handlePageClick = (selectedItem: { selected: number }) => {
        this.setState({
            pageNumber: selectedItem.selected
        });
    };

    filterUpdateItems(data: any): void {
        this.props.updateItems(this.props.items,(data && data.target && data.target.value));
    }

    render() {

        const {currentPageItems} = this.props;
        const pageCount = currentPageItems.length;
        if (!this.props.loading && this.props.items && this.props.items.length > 0) {
            return (
                <React.Fragment>
                    <ListWrapper>
                        <h1 className="list-title">List of Beers</h1>
                        <section className="list-filter">
                            <h4 className="list-filter__title">Sort by</h4>
                            <select className="list-filter__select" id="filterBy" defaultValue="select" onChange={this.filterUpdateItems}>
                                <option value="select" disabled>Select</option>
                                <option value="name">Name</option>
                                <option value="abv">Abv</option>
                            </select>
                        </section>
                        <ReactPaginate
                            previousLabel={'<'}
                            nextLabel={'>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                        {currentPageItems[this.state.pageNumber].map((value, index) => <Item item={value}
                                                                                             key={index}/>)}
                    </ListWrapper>
                </React.Fragment>
            );
        }
        return <Loading loading={this.props}/>
    }
}
