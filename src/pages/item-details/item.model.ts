export interface ItemModel {
    id: number;
    name: string;
    tagline: string;
    first_brewed: string;
    description: string;
    image_url: string | null;
    abv: number;
    ibu: number | null;
    target_fg: number;
    target_og: number;
    ebc: number | null;
    srm: number | null;
    ph: number | null;
    attenuation_level: number;
    volume: {
        value: number;
        unit: string;
    };
    boil_volume: {
        value: number;
        unit: string;
    };
    method: {
        mash_temp: {
            temp: {
                value: number;
                unit: string;
            },
            duration: number | null;
        }[];
        fermentation: {
            temp: {
                value: number;
                unit: string;
            }
        };
        twist: string | null;
    };
    ingredients: {
        malt: {
            name: string;
            amount: {
                value: number;
                unit: string;
            }
        }[];
        hops: {
            name: string;
            amount: {
                value: number;
                unit: string;
            };
            add: string;
            attribute: string;
        }[];
        yeast: string;
    };
    'food_pairing': string[];
    'brewers_tips': string;
    'contributed_by': string;
}
