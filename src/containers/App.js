import React, {Component} from 'react';
import '../style/common.less'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { ConnectedRouter} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
import Home from "./Home/home";
import List from "./List/index";
import Discovery from "./Discovery/index";
import LySuccess from "./Discovery/success";
import Cart from "./Cart/index";
import Profile from "./Profile/index";
import Detail from "./Detail/detail";
import DetailMusic from "./DetailMusic/detailMusic";
import Tab from "../components/Tab/index";
import Login from "./Login/index"
import Register from "./Register/index"
import Protected from "../components/Protected/index"
const history = createHashHistory();

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={"/list/:name"} component={List}/>
            <Route path="/list" component={List}/>
            <Route path="/discovery" component={Discovery}/>
            <Route path="/lySuccess" component={LySuccess}/>

            <Protected path="/cart" component={Cart}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/detailMusic" component={DetailMusic}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>

          </Switch>
          <Tab/>
        </div>
      </ConnectedRouter>
    )
  }
}