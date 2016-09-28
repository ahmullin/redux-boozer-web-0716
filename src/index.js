import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux'
import rootReducer from './reducers'

import {fetchCocktails} from './actions'

import {Provider} from 'react-redux'

import routes from './routes'
import {Router, browserHistory} from 'react-router'

const store = createStore(rootReducer)

store.dispatch(fetchCocktails())

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>, document.getElementById('container')

)
