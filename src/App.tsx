import React from 'react';
import './App.css';
import {HeaderComponent} from "./components/header/header";
import {Routes} from "./routes";
import {Provider} from "react-redux";
import {store} from "./shared/reducers/reducers";

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="App">
                <HeaderComponent/>
                <Routes/>
            </div>
        </Provider>
    );
};

export default App;
