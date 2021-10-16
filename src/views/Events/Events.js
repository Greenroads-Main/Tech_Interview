import React from "react";
import '../../App.css';
import moment from 'moment';

class Events extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/orgs/greenroads-fl/events")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div><h1>Loading...</h1> </div>;
   
        return (
        <div className="App">
            <h1>Events</h1>  {
                items.map((item, index) => ( 
                <ul key={ index } className="events">
                  <li>Id: { item.id }</li>
                  <li>Type: { item.type }</li>
                  <li>Actor: 
                    <ul>
                      <li>Id: { item.actor.id }</li>
                      <li>Login: { item.actor.login }</li>
                      <li>Display Login: { item.actor.display_login }</li>
                      <li>Gravatar Id: <span className="empty">{!!(item.actor.gravatar_id) ? item.actor.gravatar_id : "(empty)"}</span></li>
                      <li>URL: { item.actor.url }</li>
                      <li>Avatar URL: { item.actor.avatar_url }</li>
                    </ul>
                  </li>
                  <li>Repo: 
                    <ul>
                      <li>Id: { item.repo.id }</li>
                      <li>Name: { item.repo.name }</li>
                      <li>URL: { item.repo.url }</li>
                    </ul>
                  </li>
                  <li>Payload: 
                    <ul>
                      <li>Ref: { item.payload.ref }</li>
                      <li>Ref Type: { item.payload.ref_type }</li>
                      <li>Master Branch: { item.payload.master_branch }</li>
                      <li>Description: { item.payload.description }</li>
                      <li>Pusher Type: { item.payload.pusher_type }</li>
                    </ul>
                  </li>
                  <li>Public: { String(item.public) }</li>
                  <li>Created At: { moment(item.created_at).format('MMMM Do YYYY, h:mm:ss a') }</li>
                  <li>Org: 
                    <ul>
                      <li>Id: { item.org.id }</li>
                      <li>Login: { item.org.login }</li>
                      <li>Gravatar Id: <span className="empty">{!!(item.org.gravatar_id) ? item.org.gravatar_id : "(empty)"}</span></li>
                      <li>URL: { item.org.url }</li>
                      <li>Gravatar URL: { item.org.avatar_url }</li>
                    </ul>
                  </li>
                  <hr />
                </ul>
                ))
            }
        </div>
    );
  }
}
 
export default Events;