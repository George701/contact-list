import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component{

    state = {
            contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    phone: '555-555-555'
                },
                {
                    id: 2,
                    name: 'Karen Smith',
                    email: 'karen@gmail.com',
                    phone: '333-333-333'
                },
                {
                    id: 3,
                    name: 'Emily Brown',
                    email: 'ebrown@gmail.com',
                    phone: '777-777-777'
                }
            ]
        };

    render(){

        const { contacts } = this.state;

        return (
            // Do not shown in real DOM
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                    />
                ))}
            </React.Fragment>
        )
    }
}


export default Contacts;