import React from 'react';
import Header from './components/common/header/index.js'
import {HashRouter,Route,Switch } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login'
import Write from './pages/write'
function App() {
  return (
    <div className="dell">
      
      <HashRouter>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home} ></Route>
      <Route exact path="/detail" component={Detail}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact patch="/write" component={Write}></Route>
      </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
