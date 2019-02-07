import React, {Component} from 'react';
import Infomation from './Collapse'


  class Studio_Ghibliapi extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        coverImage:[],
        tester: [],
      };
    }
    /*
      This is code being called from Studio_Ghibli.js
    */
    componentDidMount() {
      this.props.Mainurl()
    }

    // this is what is beeing rendered as well as an error catcher in the lode so that if it cant call the api it will leave a loading or flag up an error.
    render() {
      const { error, isLoaded, tester} = this.state;
      let items = this.props.items
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!this.props.isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <div>
            {items.map(item => (
              <li key={item.tester} className={item.notDisplay ? `vanish` : `cover`}>
                <p className="Movie">
                  Name Of Move <span className='block'>:</span> {item.title}, {item.name}
                </p>
                <p className="Director">
                Director <span className='block'>:</span> {item.director}, {item.gender}
                </p>
                <span className="body">
                {item.description} {item.films}
                </span>
                <br/>
                <p className="Year_relesed">
                  Year Relesed <span className='block'>:</span> {item.release_date} {item.age}
                </p>
              </li>
            ))}
          </div>
        );
      }
    }
  }

  export default Studio_Ghibliapi;
