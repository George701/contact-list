import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    // console.log("Reducer is accessed "+action.type);
    switch(action.type){
        case 'DELETE_CONTACT':
            // const test = Object.keys(state).map(i => state[i]);
            // console.log("Case 1. " + test);
            // console.log("Case 2. " + test.dispatch);
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload)
            };
        default: return state;
    }
};

export class Provider extends Component {
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
       ],
       dispatch: action => this.setState(state => reducer(state, action))
   };

   render(){
       return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
       )
   }
}

export const Consumer = Context.Consumer;
