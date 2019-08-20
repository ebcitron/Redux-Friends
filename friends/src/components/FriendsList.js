import React from 'react';
import Friend from './Friend';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
    constructor(){
        super()
        this.state = {
            friends: []
        }
    };

    componentDidMount(){
        this.getFriends();
    }

    getFriends = () => {
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
    }

    render(){
        console.log('friends', this.state.friends);

        return(
            <div>
                {this.state.friends.map(friend => {
                  return (
                       <Friend friend ={friend} /> 
                               )
                   })}
            </div>
        )
    }
}

export default FriendsList;