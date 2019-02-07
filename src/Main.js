import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Button from 'react-bootstrap/Button';

//This is calling each of the pages to lode it all into one page
import Home from './Home';
import Kitsu from './Kitsu';
import Studio_Ghibli from './Studio_Ghibli';
import AnimeNewsNetwork from './AnimeNewsNetwork';

//this makes it so that this is a singel page aplcation
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Anime helper</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Studio_Ghibli">Studio Ghibli</NavLink></li>
            <li><NavLink to="/Kitsu">Kitsu</NavLink></li>
            <li><NavLink to="/AnimeNewsNetwork">Anime News Network</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/Studio_Ghibli" component={Studio_Ghibli}/>
          <Route path="/Kitsu" component={Kitsu}/>
          <Route path="/AnimeNewsNetwork" component={AnimeNewsNetwork}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
/* change name of tabs and links to sute the page*/

export default Main;
