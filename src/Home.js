/*the imports of the page*/
import React, {Component} from 'react';
import ErrorBoundary from './ErrorBoundary'
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/Button';

/*what will apear on the body of the page*/
class Home extends Component {
  render() {
    return(
      <ErrorBoundary>
      <div>
        <div className="box1">
          <h2>Welcome to Anime helper</h2>
          <p className="rose">This site is about helping new and old fans of Anime to find different types of Animes and Manga’s from different sites all in one place.</p>
          <p className="rose">The three sites that can be found throughout this one are <a className="rose" href="https://www.studioghibli.com.au/" target="_blank" rel="noopener noreferrer">Studio Ghibli</a> ,
          <a className="rose" href="https://www.animenewsnetwork.com/" target="_blank" rel="noopener noreferrer"> Anime News Network (ANN)</a> and  <a className="rose" href="https://kitsu.io/explore/anime" target="_blank" rel="noopener noreferrer">
          Kitsu</a>. All of these sites are highly known across the anime community.</p>
          <p className="rose">
            Each of these sites are very distinct about what they each cover : <br/> One is a movie company, <br/> One is about giving reviews, <br/> One is about news around Anime, Manga, Games and more.
          </p>
        </div>
        <div className="box2">
          <p className="rose">What to expect from this website:</p>
          <ul>
            <li>
              A random Anime and Manga generator from Anime News Network.
            </li>
            <li>
              A search bar for Anime from Kitsu.
            </li>
            <li>
              And a search bar for all the movies that Studio Ghibli have made.
            </li>
          </ul>
        </div>
        <div className="box3">
          <p className="rose">Below is the links to the sites within the page</p>
          <a className="rose" href="https://www.studioghibli.com.au/" target="_blank" rel="noopener noreferrer">Studio Ghibli</a>
          <br />
          <a className="rose" href="https://www.animenewsnetwork.com/" target="_blank" rel="noopener noreferrer">Anime News Network</a>
          <br />
          <a className="rose" href="https://kitsu.io/explore/anime" target="_blank" rel="noopener noreferrer">Kitsu</a>
        </div>
        <div className="box4">
          <p className="email_link">If you have any questions feel free to email me useing the link below.</p>
          <a className="rose email" href="mailto:rossbunn@yahoo.co.uk?">Email</a>
        </div>
      </div>
      </ErrorBoundary>
    );
  }
}

export default Home;
