import React, { Component } from 'react';

class Test extends Component{
    state = {
        title: '',
        id: 0
    };

    // For http requests
    // Always will be executed after componentWillMount
    componentDidMount(){
        console.log("Component did mount");
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                id: data.id
            }))
    }

    // Always will be executed first
    // componentWillMount(){
    //     console.log("Component will mount");
    // }

    // Render, delete
    // componentDidUpdate(){
    //     console.log("componentDidUpdate");
    // }

    // componentWillUpdate(){
    //     console.log("componentDidUpdate");
    // }

    // Instead of componentWillUpdate, used in Redux and better than other option
    // componentWillReceiveProps(nextProps, nextState){
    //     console.log("componentWillReceiveProps");
    // }

    // static getDerivedStateFromProps(nextProps, nextState){
    //     console.log("getDerivedStateFromProps");
    //     return null;
    // }

    // getSnapshotBeforeUpdate(prevProps, prevState){
    //     console.log("getSnapshotBeforeUpdate");
    // }

    render(){
        const {title, id} = this.state;
        return(
            <div>
                <h1>{title}</h1>
                <h1>Taken id is {id}</h1>
            </div>
        )
    }
}

export default Test;