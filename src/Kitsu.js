/*the imports of the page*/
import React, {Component} from 'react';
import Kitsuapi from './api_requests/Kitsuapi';
import Searches from './api_requests/searchbar/Searches';
import ErrorBoundary from './ErrorBoundary'
// import Kitsulogo from "images_screen_shot/Kitsus_logo"


class Kitsu extends Component {
  token = null;
  state = {
    items: [],
    query: "",
    people: [],
    isLoaded: false,
  }

  //This is the search featuer for Kitsu's page which will alow peope to filter throught name / genre and status
  // Each of the fetch calls calls one of the searchs so that searching for all of them is possible
  search = query => {
    const genres = `https://kitsu.io/api/edge/anime?filter[genres]=${query}&page[limit]=10&page[offset]=0;.toLowerCase()`
    const names = `https://kitsu.io/api/edge/anime?filter[text]=${query}&page[limit]=10&page[offset]=0;.toLowerCase()`
    const status = `https://kitsu.io/api/edge/anime?filter[status]=${query}&page[limit]=10&page[offset]=0;.toLowerCase()`
    const token = {};
    this.token = token;

    fetch(genres)
      .then(res => res.json())
      .then(result => {
        if (this.token === token) {
          if(result.data.length > 0) {
            this.setState({ items: result });
          }
        }
      });
    fetch(names)
      .then(res => res.json())
      .then(result => {
        if (this.token === token) {
          if(result.data.length > 0) {
            this.setState({ items: result });
          }
        }
      });
    fetch(status)
      .then(res => res.json())
      .then(result => {
        if (this.token === token) {
          if(result.data.length > 0) {
            this.setState({ items: result });
          }
        }
      });
  };

  Mainurl = () => {
    fetch(`https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0`)//Kitsu's API
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  };




  render() {
    return (

      <div>
        <div className="box1">
          <h2>
            Unofficial Kitsu
          </h2>
          <p>
            Kitsu is a sight that allows people to look up and find information out about anime and manga.
            Kitsu allows people to create an account and save Manga / Anime they are watching / wanting to watch / reading / wanting to read / finished.
            <br />
            Kitsu also allows users to leave comments about that show/manga, join groups and vote on how much they approve of the subject.
            <br />
            Below is a search bar which allows you to search out Anime names and status of Animes. This allows you to filter out or see if an Anime is finished how long it might take you to finish.
          </p>
        </div>
        <img src="images_screen_shot/kitsu's_logo.JPG" alt="Kitsus logo"/>
        <p className="note">
          Note: To search genre or status please put a capital at the start of the word. e.g. Current (status) or Action (genre).
        </p>
        <p className="space">Search Bar :</p>
        <Searches items={this.state.items} search={this.search}/>
        <ErrorBoundary>
        <Kitsuapi main={this.state.main} genre={this.state.genre} programs={this.state.programs} Geturl={this.Geturl} items={this.state.items} Mainurl={this.Mainurl} isLoaded={this.state.isLoaded} />
        </ErrorBoundary>
        <button className="whitespace"><a href="https://kitsu.io/explore/anime" target="_blank" rel="noopener noreferrer" className="pads">For more information please check out there sight. This is a direct link to it.</a></button>
      </div>

    );
  }
}

export default Kitsu;
