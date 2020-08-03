import '../styles/global.css';

// function MyApp({ Component, pageProps }) {
//     return (
//     <Provider store={store}>
//         <Component {...pageProps} />
//     </Provider>)
// }
// const makeStore = (Context) => store;
// export default withRedux(store)(MyApp);

import App from 'next/app';
import {Provider} from 'react-redux';
import React from 'react';
import withRedux from "next-redux-wrapper";
import store from './store/index';
import { fetchGetUsersById } from './module/todo/actions/todoactions'


class MyApp extends App {

  
    static async getInitialProps({Component, ctx}) {
        ctx.store.dispatch(fetchGetUsersById(1))
        const pageProps = await Component.getInitialProps(ctx);

        return {pageProps};
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }
}


//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);