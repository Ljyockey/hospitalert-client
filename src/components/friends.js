import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {searchFriends, sortFriends, newSentRequest, acceptFriend, deleteFriend, setProfile} from '../actions';

import './style/friends.css';

const axios = require('axios');
const {API_BASE_URL} = require('../config');

export class Friends extends React.Component {

    componentWillMount() {
        axios.get(`${API_BASE_URL}/friends/${this.props.userId}`)
        .then(res => {
            if (res.data.friends !== undefined) {
            this.props.dispatch(sortFriends(res.data.friends))
            }
        })
    }

    searchFriends(event) {
        event.preventDefault()
        const searchParams = this.search.value;
        this.search.value = '';
        axios.get(`${API_BASE_URL}/users/${searchParams}`)
        .then(res => {
            this.props.dispatch(searchFriends(res.data.users, searchParams))
        })
    }

    addFriend(event, friend, name) {
        event.preventDefault();
        const newFriend = {
            status: 'pending',
            user_id: this.props.userId,
            friend_id: friend
        }
        axios.post(`${API_BASE_URL}/friends`, newFriend)
        .then(res => {
            const newSent = Object.assign({}, res.data, {
                //adds name from search result to prevent API call
                friendName: name
            })
            this.props.dispatch(newSentRequest(newSent))
        })
    }

    acceptFriend(event, id) {
        event.preventDefault();
        axios.put(`${API_BASE_URL}/friends/${id}`, {status: 'active'})
        this.props.dispatch(acceptFriend(id))
    }

    setProfile(event, id, name) {
        event.preventDefault();
        this.props.dispatch(setProfile(id, name))
    }

    deleteFriend(event, id) {
        event.preventDefault();
        axios.delete(`${API_BASE_URL}/friends/${id}`)
        this.props.dispatch(deleteFriend(id))
    }



    render() {
        
        //displays results of search - if any
        const searchResults = (this.props.friendsResults !== undefined) ?
        (this.props.friendsResults.length > 0) ?
        this.props.friendsResults.map((item => {
            return <li key={item.id}>{item.name} - <a onClick={e => this.addFriend(e, item.id, item.name)}>Add Friend</a></li>
        })) : <p>No results for {this.props.search}.</p>
        : undefined

        //displays user's friend requests
        const pendingFriends = (this.props.pending.length > 0) ?
            (this.props.pending.map((item) => {
                return <li key={item.id}>{item.userName} - 
                    <a onClick={(e) => this.acceptFriend(e, item.id)}>Add </a>
                    [<a className="delete-friend" onClick={(e) => this.deleteFriend(e, item.id)}>Delete</a>]
                    </li>
            }))
        :
            <p>No pending friend requests. If someone sends you a friend request, they'll appear here.</p>;

        //displays pending friend requests that user has sent    
        const sentFriends = (this.props.sent.length > 0) ?
            (this.props.sent.map((item) => {
                return <li key={item.id}>{item.friendName}</li>
            }))
        :
            <p>No unanswered requests. If you send someone a friend request, they'll appear here until it is approved or denied.</p>;
        
        //displays user's friends    
        const activeFriends = (this.props.active.length > 0) ?
            (this.props.active.map((item) => {
                //displays name and ID opposite of the user
                const targetName = item.friendName === this.props.userName ? item.userName : item.friendName;
                const targetId = item.friend_id === this.props.userId ? item.user_id : item.friend_id;
                return <li key={item.id} onClick={(e) => this.setProfile(e, targetId, targetName)}>
                        <Link to={`/profile/${targetId}`}>{targetName}</Link> - &nbsp;
                        [<a className="delete-friend" onClick={(e) => this.deleteFriend(e, item.id)}>Delete</a>]            
                    </li>
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
                                <input type="text" placeholder="ex. Jane Smith" ref={input =>
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

                <section className="friends">
                    <div className="container">
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
                                    {sentFriends}
                                    </ul>
                                </div>
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
    sent: state.sentFriends,
    active: state.activeFriends,
    userId: state.currentUser.id,
    userName: state.currentUser.name,
    search: state.friendsSearchParams
});

export default connect(mapStateToProps)(Friends);