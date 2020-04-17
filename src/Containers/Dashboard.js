import React, { Component } from 'react';
import List from '../Components/List';
import { Header } from '../Components/Header';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: false,
        }
    }

    async componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(response => {
                this.setState({
                    listData: response,
                })
            })
    }

    render() {
        const { listData } = this.state
        return (
            <>
                <Header name='DashBoard' />
                <div>
                    {listData && listData.map(item => (
                        <List data ={item}  />
                    ))}
                </div>
            </>
        )
    }
} 