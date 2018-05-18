import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'styled-components';
import { App } from './components/App';
import * as Variables from './styles/variables';

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
  <Router>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
