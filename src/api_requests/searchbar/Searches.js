import React, {Component} from 'react';


class Search extends Component {
  state = {
    query: "",
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.props.search(value);
  };
  
  componentDidMount() {
    this.props.search("");
  }
//this renders the search bar and alows the pages to filter through there array of items in there api
  render() {
    return (
      <form className="space_input">
        <input
          type="text"
          className="search-box"
          placeholder="Search for ..."
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default Search
