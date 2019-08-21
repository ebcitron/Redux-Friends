import React from 'react';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {withFormik, Form, Input} from 'formik';
import FormikLoginForm from './Form';

class FriendsList extends React.Component {
    constructor() {
        super()
        this.state = {
            friends: [],
            formState: {
                name: '',
                email: '',
                password: ''
            }
        }
    };

    componentDidMount() {
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
    addFriend = friend => {
        axiosWithAuth().post('http://localhost:5000/api/friends', friend)
            .then(res => {
                console.log('res.data', res.data)
            })
    }
   
    render() {
        console.log('friends', this.state.friends);

        return (
            <div>
                <div>
                    <Form>
                     <FormikLoginForm />
                   </Form>
                 </div>
                        <div>
                            {this.state.friends.map(friend => {
                                return (
                                    <Friend friend={friend} />
                                )
                            })}
                        </div>
        </div>
                    )
            
            
                }
            }
            
export default FriendsList;