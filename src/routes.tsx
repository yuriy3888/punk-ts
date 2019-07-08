import {HashRouter, Route} from "react-router-dom";
import * as React from "react";
import {ListContainer} from "./pages/list/list.container";
import {ItemDetailsContainer} from "./pages/item-details/item-details.container";

export const Routes: React.FC = () => {
    return (
        <HashRouter>
            <Route exact path="/" component={ListContainer}/>
            <Route exact path="/item/:id" component={ItemDetailsContainer}/>
        </HashRouter>
    );
};
