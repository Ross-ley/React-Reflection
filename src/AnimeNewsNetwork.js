import React, {Component} from 'react'
import AnimeNewsNetworkapi from './api_requests/AnimeNewsNetworkapi'
import ErrorBoundary from './ErrorBoundary'

class AnimeNewsNetwork extends Component {
  token = null;
  state = {
    items: [],
    query: "",
    people: [],
    isLoaded: false,
  }
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick;
    this.state = { random: 15, open: false, };
  }
  //this is the filter function being used in an handle click
  handleClick = () => {
    let rand = Math.floor(Math.random() * Math.floor(21745));
    this.setState({random : rand})
    const genres = `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=${this.state.random}`
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
           // Typical action to be performed when the document is ready:
           document.getElementById("first").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", genres, true);
    xhttp.send();
  }
  //I had to call ANN's api through creating a new xml request as thats how they had there api set up to be
     Mainurl = () => {
       var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
         if (this.readyState === 4 && this.status === 200) {
            // Typical action to be performed when the document is ready:
            document.getElementById("first").innerHTML = xhttp.responseText;
         }
     };
     //This calls the xml request with the api
     xhttp.open("GET", `https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=72`, true); //ANN's api
     xhttp.send();
   }
//This is what you will see on the web page


  render() {
    const { open } = this.state;
    return (
    <ErrorBoundary>
      <div>
        <div className="box1">
          <h2>
            Unofficial Anime News Network
          </h2>
          <p>
            Anime News Network (ANN) is a well-known sight which allows people to search up anime and manger, as well as create an account to speak and keep track of what they have watched / read.
            <br />
            ANN also allows you to keep up to date on all the latest news and events. They also allows you to keep up and discuss with others about the topic that they have up on their forum. ANN not only coves anime and manga they also cover news from japan to do with movies, games and more.
            <br />
            Below is a Random number generator which gives you an Anime or Manga and information on it.
          </p>
        </div>
        <div className="convert">
          <img className="possion" src="//cdn.animenewsnetwork.com/stylesheets/img/logo.name.no-dot.png" alt="ANN's logo" />
        </div>
        <p className="note">
          "Note: Not all of the items on this randomiser are PG friendly !!"
        </p>
        <p className="space">Random Anime / Manga generator :</p>
        <button onClick={this.handleClick} className="Randomise">Randomise</button>
        <AnimeNewsNetworkapi main={this.state.main} genre={this.state.genre} programs={this.state.programs} Geturl={this.Geturl} items={this.state.items} Mainurl={this.Mainurl} isLoaded={this.state.isLoaded}
        token={this.token} random={this.state.random} clickhandler={this.handleClick} />
        <button className="padding"><a href="https://www.animenewsnetwork.com/" target="_blank" rel="noopener noreferrer" className="pads">For more information please check out there sight. This is a direct link to it.</a></button>
      </div>
    </ErrorBoundary>
    );
  }
}

export default AnimeNewsNetwork;
