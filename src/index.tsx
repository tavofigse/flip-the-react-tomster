import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { injectGlobal } from 'styled-components';
import { App } from './components/App';
import { enthusiasm } from './reducers/index';
import * as Variables from './styles/variables';
import { IStoreState } from './types/index';

const store = createStore<IStoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

// tslint:disable-next-line
injectGlobal`
  font-size: 10px;

  html, body {
    margin: 0;
  }

  @media (min-width: ${Variables.SIZE_EXTRA_SMALL}) {
    font-size: 13px;
  }

  @media (min-width: $size-small) {
    font-size: 15px;
  }

  @media (min-width: $size-medium) {
    font-size: 17px;
  }

  @media (min-width: $size-large) {
    font-size: 19px;
}
`;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
