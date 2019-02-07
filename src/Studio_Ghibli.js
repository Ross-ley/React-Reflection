/*the imports of the page*/
import React, {Component} from 'react';
import Studio_Ghibliapi from './api_requests/Studio_Ghibliapi';
import Searches from './api_requests/searchbar/Searches';
import ErrorBoundary from './ErrorBoundary'


class Studio_Ghibli extends Component {
  token = null;
  state = {
    items: [],
    query: "",
    people: [],
    isLoaded: false,
  }
    /*this is the search being implemnted to the code*/
  search = query => {
    let items = this.state.items
    let search = items.map(film => {
      if(film.title.toLowerCase().search(`*${query}*`) == -1) {
        film.notDisplay = true;
        return film;
      }else {
        film.notDisplay = false;
        return film;
      }
    });
    this.setState(items=search)
  };
  Mainurl = () => {
    fetch('https://ghibliapi.herokuapp.com/films') // Studio Ghibli's api
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
  }

/*this is what will show on the studo ghibli page with what is in there api*/
  render() {
    return (
      <ErrorBoundary>
      <div>
        <div className="box1">
          <h2>
            Unofficial Studio Ghibli
          </h2>
          <p className="Movie">
            Studio Ghibli is a company which makes animated moves. They are one of the biggest and well known anime company’s for Anime. There have some well-known classics such as "My Neighbor Totoro" and "Spirited Away". These are some of the more iconic movies that are well known outside of the anime community.
            <br /> They pride them self’s on what they produce and have some of the most stunning and breath taking adventures that they can take you on.
          </p>
        </div>
        <div className="wraper_img">
          <img className="wrap_img" src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_gold.png" />
        </div>
        <p className="space Movie">Search Bar :</p>
        <Searches items={this.state.items} search={this.search}/>
        <Studio_Ghibliapi main={this.state.main} genre={this.state.genre} programs={this.state.programs} Geturl={this.Geturl} items={this.state.items} Mainurl={this.Mainurl} isLoaded={this.state.isLoaded}/>
        <button className="padding"><a href="https://www.studioghibli.com.au/" target="_blank" rel="noopener noreferrer" className='pads'>For more information about their products please check out there sight. This is a direct link to it.</a></button>
        <button className="padding"><a href="http://www.ghibli.jp/" target="_blank" rel="noopener noreferrer" className="pads">For more information about them please check out there sight. This is a direct link to it.</a></button>
      </div>
      </ErrorBoundary>
    );
  }
}

console.log(`https://ghibliapi.herokuapp.com/films`)

export default Studio_Ghibli;
