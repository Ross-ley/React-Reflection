import React, {Component} from 'react';


  class Kitsuapi extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        coverImage:[],
        tester: [],
        original: [],
      };
    }
    //this is being called from kitsu.js so that it can render whats on the web page
    componentDidMount() {
      this.props.Mainurl()
    }

/*
  the code below is what the webpage will show when your on the tab of unoffical Kitsu
*/
    render() {
      const { error, isLoaded, tester, original, img, size} = this.state;
      let items = this.props.items
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!this.props.isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul className="falt">
            {items.data.map(item => (
              <div className="flexy">
                <li key={""}>
                  <p className="pos">Title: {item.attributes.canonicalTitle},</p>
                  <p className="pos">Episode Count: {item.attributes.episodeCount},</p>
                  <p className="pos">Age Rating: {item.attributes.ageRating},</p>
                  <p className="pos">Next Release: {item.attributes.nextRelease}</p>
                  <p className="pos">Status: {item.attributes.status}</p>
                  <div className="covers">
                    <img className="img-size" src={item.attributes.posterImage ? item.attributes.posterImage.original :  "null" } />
                    <img className={item.attributes.coverImage === item.attributes.coverImage ? " " : "img-size"} src={item.attributes.coverImage ? item.attributes.coverImage.original :  "null" } />
                  </div>
                </li>
              </div>
            ))}
          </ul>
        );
      }
    }
  }
  // use url as main url
  //create a box with an onCLick event
  //chnage url when onclick event actervates
  //able to change when the text is being changed

  export default Kitsuapi;
