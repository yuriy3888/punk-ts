import axios from "axios";
import {ItemModel} from "../../pages/item-details/item.model";

interface itemApiParams {
    API: string;
    pageCount: number;
    perPage: number;
}

const itemApiParams: itemApiParams = {
    API: "https://api.punkapi.com/v2/beers",
    pageCount: 1,
    perPage: 50
};

export class ItemService {

    static async fetchItems(): Promise<ItemModel[]> {
        const response = await this._fetchItems(itemApiParams.pageCount);
        return axios.all(response);
    }

    static async _fetchItems(pageNumber: number, arr: ItemModel[] = []) {
        const result = await axios.get(`${itemApiParams.API}/?page=${pageNumber}&per_page=${itemApiParams.perPage}`);
        if (result && result.data && result.data.length > 0) {
            pageNumber++;
            arr = [...arr, ...result.data];
            arr = await this._fetchItems(pageNumber, arr);
        }
        return arr;
    }

    static async fetchItem(id: string): Promise<ItemModel> {
        const response = await axios.get(`${itemApiParams.API}/${id}`);
        return response.data && response.data[0] ? response.data[0] : null;
    }
}
