import * as React from "react";
import {ItemModel} from "../../pages/item-details/item.model";
import {ItemWrapper} from "./styles";
import {history} from "../../utils/history";

interface ItemProps {
    item: Pick<ItemModel, 'id' | 'name' | 'image_url'>;
}

export default class Item extends React.Component<ItemProps, {}> {
    constructor(props: ItemProps) {
        super(props);
    }

    static goToItem(id: number) {
        history.push(`/item/${id}`);
    }

    render() {
        const {item} = this.props;
        return (
            <ItemWrapper>
                <h1 className="title" onClick={() => Item.goToItem(item.id)}>{item.name}</h1>
                {this.props.item.image_url ?
                    <img className="img" src={item.image_url || ''} alt={item.name} onClick={() => Item.goToItem(item.id)}/>
                    :
                    <div className="no-photo" onClick={() => Item.goToItem(item.id)}>Missing image</div>
                }
                <p className="more-details" onClick={() => Item.goToItem(item.id)}>More details</p>
            </ItemWrapper>
        )
    }
}
