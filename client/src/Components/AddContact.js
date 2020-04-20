import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../actions/actions'

class AddContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: ""
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {

        return (


            <header className="App-header">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={() => this.props.addContact(this.state)}>ADD</button>
                    <button onClick={() => this.props.history.goBack()} >Cancel</button>
                </div>
            </header>
        )
    }
}


export default connect(null, { addContact })(AddContact)

