import * as React from "react";
import {ItemDetailsWrapper} from "./styles";
import Loading from "../../components/loading/loading";
import {history} from "../../utils/history";
import {ItemState} from "../../shared/reducers/item.reducer";

export interface ItemPageSP extends ItemState{
}

export interface ItemPageDP {
    fetchItem: (id: string) => void;
}

interface Props extends ItemPageSP, ItemPageDP {
    match: {
        params: {
            id: string
        }
    }
}

interface State {
}

export class ItemDetailsPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const id = this.props && this.props.match && this.props.match.params && this.props.match.params.id;
        this.props.fetchItem(id);

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        history.push('/');
    }

    render() {
        const {selectedItem} = this.props;
        if (!this.props.loading && selectedItem) {
            return (
                <ItemDetailsWrapper>
                    <p className="back-btn" onClick={this.goBack}>{`< Home Page`}</p>
                    <h1 className="title">More Info</h1>
                    <h2 className="name">{selectedItem.name}</h2>
                    <h3 className="description">{selectedItem.description}</h3>
                    <p className="first-brewed">First brewed: {selectedItem.first_brewed}</p>
                    <p className="abv">Abv: {selectedItem.abv}%</p>
                    <p className="og">Og: {selectedItem.target_og}</p>
                    <p className="ibu">Ibu: {selectedItem.ibu}</p>
                    {selectedItem.ingredients && selectedItem.ingredients.yeast &&
                    <p className="yeast">Yeast: {selectedItem.ingredients.yeast}</p>}
                    <p className="tips">Brewers tips: {selectedItem.brewers_tips}</p>
                    {selectedItem.food_pairing &&
                    <div className="food-pairing">
                        <h3>Food pairing:</h3>
                        {selectedItem.food_pairing.map((value, index) =>
                            <p key={index}>- {value}</p>)}
                    </div>}
                    {selectedItem.ingredients && selectedItem.ingredients.hops &&
                    <section className="hops">
                        <h3>Hops:</h3>
                        {selectedItem.ingredients.hops.map((value, index) => <p key={index}>- {value.name}</p>)}
                    </section>
                    }
                    {selectedItem.ingredients && selectedItem.ingredients.malt &&
                    <section className="malts">
                        <h3>Malts:</h3>
                        {selectedItem.ingredients.malt.map((value, index) => <p key={index}>- {value.name}</p>)}
                    </section>}
                    <section className="contributed-by">
                        <h3>Contributed by: </h3>{selectedItem.contributed_by}
                    </section>
                    {selectedItem.image_url ?
                        <img className="img" src={selectedItem.image_url} alt=""/>
                        :
                        <div className="no-photo">Missing image</div>
                    }
                </ItemDetailsWrapper>
            );
        }
        return <Loading loading={this.props}/>
    }
}
