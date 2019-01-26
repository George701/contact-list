import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
// import uuid from 'uuid';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        // let errors = {};

        // Check for Errors

        if(name===''){
            this.setState({errors: {name: 'Name is required!'}});
            return;
        }
        if(email===''){
            this.setState({errors: {email: 'Email is required!'}});
            return;
        }
        if(phone===''){
            this.setState({errors: {phone: 'Phone is required!'}});
            return;
        }

        const newContact = {
            name,
            email,
            phone
        };

        const res = await axios.post('http://jsonplaceholder.typicode.com/users', newContact);
        dispatch({type: 'ADD_CONTACT', payload: res.data});


        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');

    };

    render(){
        const { name, email, phone, errors } = this.state;

        return(
            <Consumer>
                { value =>{
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3 center">
                            <div className="card-header bg-custom bold">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                        <TextInputGroup
                                            name="name"
                                            placeholder="Enter Name"
                                            value={name}
                                            onChange={this.onChange}
                                            label="Name"
                                            error={errors.name}
                                        />

                                        <TextInputGroup
                                            name="email"
                                            placeholder="Enter Email"
                                            type="email"
                                            value={email}
                                            onChange={this.onChange}
                                            label="Email"
                                            error={errors.email}
                                        />

                                        <TextInputGroup
                                            name="phone"
                                            placeholder="Enter Phone"
                                            value={phone}
                                            onChange={this.onChange}
                                            label="Phone"
                                            error={errors.phone}
                                        />


                                        <input type="submit" value="Add Contact" className="btn btn-dark btn-block btn-cust"/>
                                    </form>
                                </div>
                            </div>
                    )
                }}
            </Consumer>
        )

    }
}

export default AddContact;