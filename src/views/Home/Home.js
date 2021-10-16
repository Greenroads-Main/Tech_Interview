import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import moment from 'moment'

export default class GreenRoads extends Component {
  state = {item: null};

  componentDidMount(){
    axios.get("https://api.github.com/orgs/greenroads-fl")
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
        <p>Login: <span>{item.login}</span></p>
        <p>Id: <span>{item.id}</span></p>
        <p>Node Id: <span>{item.node_id}</span></p>
        <p>URL: <span>{item.url}</span></p>
        <p>Repos URL: <span>{item.repos_url}</span></p>
        <p>Events URL: <span>{item.events_url}</span></p>
        <p>Hooks URL: <span>{item.hooks_url}</span></p>
        <p>Issues URL: <span>{item.issues_url}</span></p>
        <p>Members URL: <span>{item.members_url}</span></p>
        <p>Public Members URL: <span>{item.public_members_url}</span></p>
        <p>Avatar URL: <span>{item.avatar_url}</span></p>
        <p>Description: <span className="empty">{!!(item.description) ? item.description : "(empty)"}</span></p>
        <p>Name: <span>{item.name}</span></p>
        <p>Company: <span className="empty">{!!(item.company) ? item.company : "(empty)"}</span></p>
        <p>Blog: <span>{item.blog}</span></p>
        <p>Location: <span>{item.location}</span></p>
        <p>Email: <span>{ String(item.email) }</span></p>
        <p>Twitter Username: <span>{ String(item.twitter_username) }</span></p>
        <p>Verfied: <span>{ String(item.is_verified) }</span></p>
        <p>Organization Projects: <span>{ String(item.has_organization_projects) }</span></p>
        <p>Repository Project: <span>{item.has_repository_projects}</span></p>
        <p>PUblic Repos: <span>{item.public_repos}</span></p>
        <p>Public Gists: <span>{item.public_gists}</span></p>
        <p>Followers: <span>{item.followers}</span></p>
        <p>Following: <span>{item.following}</span></p>
        <p>HTML URL: <span>{item.html_url}</span></p>
        <p>Created At: <span>{ moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a') }</span></p>
        <p>Updated At: <span>{ moment(item.updated_at).format('MMMM Do YYYY, h:mm:ss a') }</span></p>
        <p>Type: <span>{item.type}</span></p>
      </div>
    );
  }
}