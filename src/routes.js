import React from 'react';
import App from './components/app'
import { Route } from 'react-router'
import CocktailsIndex from './components/cocktails_index'

export default (
  < Route path="/" component={App} >
    <Route path="/cocktails" component={CocktailsIndex}/>
  </Route>
)
