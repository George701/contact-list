import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
    // constructor(props){
    //     super(props);
    //
    //     this.nameInput = React.createRef();
    //     this.emailInput = React.createRef();
    //     this.phoneInput = React.createRef();
    // }
    state = {
        name: '',
        email: '',
        phone: '',
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        // console.log(this.state);

        const { name, email, phone } = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({type: 'ADD_CONTACT', payload: newContact});

        // Clear State
        this.setState({
            name: '',
            email: '',
            phone: ''
        });

       // const contact = {
       //     name: this.nameInput.current.value,
       //     email: this.emailInput.current.value,
       //     phone: this.phoneInput.current.value
       // };
       //
       // console.log(contact);
    };

    // static defaultProps = {
    //     name: 'Fred Smith',
    //     email: 'fred@yahoo.com',
    //     phone: '777-777-777'
    // };

    render(){
        const { name, email, phone } = this.state;

        return(
            <Consumer>
                { value =>{
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Name..."
                                                // defaultValue={name}
                                                // ref={this.nameInput}
                                                value={name}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Email..."
                                                // defaultValue={email}
                                                // ref={this.emailInput}
                                                value={email}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input
                                                type="text"
                                                name="phone"
                                                className="form-control form-control-lg"
                                                placeholder="Enter Phone..."
                                                // defaultValue={phone}
                                                // ref={this.phoneInput}
                                                value={phone}
                                                onChange={this.onChange}
                                            />
                                        </div>
                                        <input type="submit" value="Add Contact" className="btn btn-dark btn-block"/>
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