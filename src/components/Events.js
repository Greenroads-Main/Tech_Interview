import React, { Component } from 'react';
import axios from 'axios';

export default class Events extends Component {
  state = {item: null};

  componentDidMount(){
    axios.get("https://api.github.com/orgs/GreenRoads-FL/events")
         .then(response => this.setState(
           { item:response.data },
           console.log(response)
           )
         )
         .catch(function(error) {
           console.log('Fetch error: ' + error.message);
         });
  }

  render() {
    const item = this.state.item;
    if (item === null) {
      return <div><p>Loading...</p></div>;
    }

    return (
      <div className="App">
        <h1>Events</h1>
      </div>
    );
  }
}