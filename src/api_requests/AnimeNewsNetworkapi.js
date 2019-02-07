import React, {Component} from 'react';

  class AnimeNewsNetworkapi extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        coverImage:[],
        tester: [],
      };
      this.handleClick = this.handleClick;
      this.state = { random: 1 };
    }
    //this is code from AnimeNewsNetwork.js to help render what is in the boxes on the page

    componentDidMount() {
      this.props.Mainurl();
  }

  /*
    the code below is what the webpage will show
  */
    render() {
      const { error, isLoaded, tester} = this.state;
      let items = this.props.items
      if (error) {
        return <div>Error: {error.message}</div>;
      }else {
        return (
          <div>
            <div id="first" className="conss"></div>
          </div>
        );
      }
    }
  }

  export default AnimeNewsNetworkapi;
