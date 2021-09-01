import React from 'react';

import store from "./store";
import { Provider } from "react-redux";

import {AppNavigation} from "./src/navigation/AppNavigation";
import {MainNavigation} from "./src/navigation/MainNavigation";

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
}