import { Provider } from 'react-redux';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import './styles/sass/index.scss';
import { IntlProvider, addLocaleData } from 'react-intl';
import localeEn from 'react-intl/locale-data/en';
import localeDe from 'react-intl/locale-data/de';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store';
import messagesDe from './utils/locals/de';
import messagesEn from './utils/locals/en';

const messages = {
    de: messagesDe,
    en: messagesEn
};
addLocaleData([...localeEn, ...localeDe]);

const RenderDom = () => {
    const language = store.getState().locale.locale;
    return (
        <Provider store={store}>
            <IntlProvider locale={language} messages={messages[language]}>
                <App />
            </IntlProvider>
        </Provider>
    );
};

store.subscribe(() => {
    ReactDOM.render(<RenderDom />, document.getElementById('root'));
});
ReactDOM.render(<RenderDom />, document.getElementById('root'));
