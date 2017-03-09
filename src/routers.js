import React from 'react';
import App from './App';
import Home from './components/Home';
import Blog from './components/Blog';
import Work from './components/Work';
import About from './components/About';
import Post from './components/Post';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';

export default function(){
  return(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
      <IndexRoute component={Home}/>
        <Route path='blog' component={Blog} />
        <Route path='work' component={Work} />
        <Route path='about' component={About} />
        <Route path='post/:title' component={Post} />

      </Route>
    </Router>
  )
}
