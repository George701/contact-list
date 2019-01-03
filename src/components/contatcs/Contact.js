import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';

class Contact extends Component{
    state = {
        showContactInfo: false,
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({type: 'DELETE_CONTACT', payload: id});
    };

    render(){

        const { showContactInfo } = this.state;

        const { id, name, email, phone } = this.props.contact;


        return (
            <Consumer>
                {value => {
                    return(
                        <div className="card card-body mb-3 cnt-block">
                            <h4>{name}
                                <i
                                    onClick={() =>
                                        this.setState({showContactInfo: !this.state.showContactInfo})}
                                    className="fas fa-sort-down chevron"
                                    style={{cursor:'pointer'}}
                                />
                                <i
                                    className="fas fa-times cros-nrubi"
                                    onClick={this.onDeleteClick.bind(this, id, value.dispatch)}
                                />
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group cust-bk">
                                    <li className="list-group-item"><span className="text-cust">Em</span>ail: {email}</li>
                                    <li className="list-group-item"><span className="text-cust">Ph</span>one: {phone}</li>
                                </ul>
                            ):null}

                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;