import React from 'react';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'styles/globals.css';
import 'styles/home.css';
import 'styles/sidebar.css';
import 'styles/news.css';
import 'styles/shrimmer.css';
import 'styles/header.css';

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
