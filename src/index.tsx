import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { injectGlobal } from 'styled-components';
import { App } from './components/App';
import * as Variables from './styles/variables';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

// middlewares
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  // tslint:disable-next-line
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

// create store
const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

// tslint:disable-next-line
injectGlobal`
* {
  user-select: none;
}

html {
  font-size: 10px;

  @media (min-width: ${Variables.SIZE_EXTRA_SMALL}) {
    font-size: 13px;
  }

  @media (min-width: ${Variables.SIZE_SMALL}) {
    font-size: 15px;
  }

  @media (min-width: ${Variables.SIZE_MEDIUM}) {
    font-size: 17px;
  }

  @media (min-width: ${Variables.SIZE_LARGE}) {
    font-size: 19px;
  }
}

body {
  font-family: ${Variables.FONT_BASE};
  margin: 0 auto;
}

a {
  color: inherit;
  text-decoration: inherit;
  -webkit-text-stroke: inherit;

  &:hover {
    color: inherit;
  }
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
