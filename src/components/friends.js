import React from 'react';
import {connect} from 'react-redux';

export default class Friends extends React.Component {
    render() {
        return (
            <main>

                <section className="search-friends">
                    <form className="search-friends-form">
                        <label htmlFor="search-friends">Find Friends - Type Name</label>
                        <input type="text" placeholder="Joe Smith"/>
                        <input type="submit" value="Submit" />
                    </form>
                </section>

                <section className="friend-list">
                    {/*create a variable for friends*/}
                </section>

                <section className="friend-requests">
                    {/*create variable for requests*/}
                </section>
                <section className="pending-requests">
                    {/*create variable for pending requests*/}
                </section>
            </main>
        );
    }
}