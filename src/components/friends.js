import React from 'react';
import {connect} from 'react-redux';
import {searchFriends, sortFriends} from '../actions';

import './friends.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class Friends extends React.Component {

    componentWillMount() {
        axios.get(`${API_BASE_URL}/friends`)
        .then(res => this.props.dispatch(sortFriends(res.data.Friends)))
    }

    searchFriends(event) {
        event.preventDefault()
        const searchParams = this.search.value;
        axios.get(`${API_BASE_URL}/users/${searchParams}`)
        .then(res => {
            this.props.dispatch(searchFriends(res.data.users))
        })
    }

    render() {
        
        const searchResults = (this.props.friendsResults.length > 0) ?
        this.props.friendsResults.map((item => {
            return <li key={item.id}>{item.name}</li>
        })) : undefined;

        const pendingFriends = (this.props.pending.length > 0) ?
            (this.props.pending.map((item) => {
                return <li key={item.id}>{item.friendName}</li>
            }))
        :
            <p>No pending requests</p>;

        const activeFriends = (this.props.active.length > 0) ?
            (this.props.active.forEach((item) => {
                <li key={item.id}>{item.friendName}</li>
            }))
        :
            <p>You don't have any friends yet. Use the search bar to find friends.</p>;

            

        return (
            <main>
                <div className="header">
                    <h1> Friends </h1>
                </div>
                

                <section className='search-friends'>
                    <div className='search-friends-card mdl-card mdl-shadow--8dp'>
                        <div className="mdl-card__title">
                            <h2>Search for Friends</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            <form className="search-friends-form" onSubmit={e => this.searchFriends(e)}>
                                <label htmlFor="search-friends">Find Friends - Type Name</label>
                                <input type="text" placeholder="Joe Smith" ref={input =>
                                    this.search = input}/>
                                <input type="submit" value="Search" />
                            </form>
                            <div className="friend-search-results">
                                <ul>
                                {searchResults}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="friends container">
                    <div className="row">
                        <div className="col-md-3 friend-list mdl-card mdl-shadow--6dp">
                            <div className="mdl-card__title mdl-card--expand"> 
                                <h3 className="mdl-card__title-text">My Friends</h3>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <ul>
                                {activeFriends}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 friend-requests mdl-card mdl-shadow--6dp">
                            <div className="mdl-card__title mdl-card--expand">
                                <h3 className="mdl-card__title-text">Friend Requests</h3>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <ul>
                                {pendingFriends}
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3 pending-requests mdl-card mdl-shadow--6dp">
                            <div className="mdl-card__title mdl-card--expand">
                                <h3 className="mdl-card__title-text">Sent Requests</h3>
                            </div>
                            <div className="mdl-card__supporting-text">
                                <ul>
                                {pendingFriends}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    friendsResults: state.friendsSearchResults,
    pending: state.pendingFriends,
    active: state.activeFriends
});

export default connect(mapStateToProps)(Friends);