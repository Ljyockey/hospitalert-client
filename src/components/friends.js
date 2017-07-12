import React from 'react';
import {connect} from 'react-redux';
import {searchFriends} from '../actions';

import './friends.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class Friends extends React.Component {

    searchFriends(event) {
        event.preventDefault()
        const searchParams = this.search.value;
        axios.get(`${API_BASE_URL}/users/${searchParams}`)
        .then(res => {
            this.props.dispatch(searchFriends(res.data.users))
        })
    }

    render() {
        
        const searchResults = (this.props.friendsResults) ?
        this.props.friendsResults.map((item => {
            <li key={item.id}>${item.name}</li>
        })) : undefined;

        return (
            <main>
                <div className="header">
                    <h1> Friends </h1>
                </div>
                

                <section className="search-friends">
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
                </section>

                <section className="friend-list">
                    <h2>My Friends</h2>
                    {/*create a variable for friends*/}
                </section>

                <section className="friend-requests">
                    <h2>Friend Requests</h2>
                    {/*create variable for requests*/}
                </section>
                <section className="pending-requests">
                    <h2>Sent Requests</h2>
                    {/*create variable for pending requests*/}
                </section>
            </main>
        );
    }
}

const mapStateToProps = (state) => ({
    friendsResults: state.friendsSearchResults
});

export default connect(mapStateToProps)(Friends);