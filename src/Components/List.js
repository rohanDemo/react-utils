import React, { Component } from 'react'
import BasicDialog from './BasicDialog'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        }
    }
    showDetail = () => {                
        this.setState({
            showDetails: true
        })
    }

    modalOkEvent = () => {
        this.setState({
            showDetails: false
        })
    }

    render() {
        const { data } = this.props
        return (
            <>
            <div onClick={this.showDetail} style={{
                display: 'flex',
                flexDirection: 'column', margin: '5px', padding: '5px'
                , boxShadow: '5px 5px grey', border: '1px solid grey', width: '200px'
            }}>
                <div>
                    {data.name}
                </div>

            </div>
  {
            this.state.showDetails &&
            <BasicDialog
                open={this.state.showDetails}
                modaltitle="User Details"
                modalContent={data.name + ' known as ' + data.username + ' lives at ' + data.address.street + ',' + data.address.suite}
                okText="OK"
                modalOkEvent={this.modalOkEvent}
            />

        }
        </>
        )
    }
}