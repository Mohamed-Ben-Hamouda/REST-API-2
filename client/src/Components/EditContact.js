import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editContact } from '../actions/actions'
import { Link } from 'react-router-dom'



class EditContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: ""
        }
    }
    componentDidMount() {
        let contact = this.props.contacts.filter(el => String(el._id) === this.props.match.params.id)
        this.setState(contact[0])
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {

        return (


            <header className="App-header">
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={() => this.props.editContact(this.state._id, {
                        name: this.state.name,
                        email: this.state.email,
                        phone: this.state.phone
                    })} >Confirm</button>
                    <button onClick={() => this.props.history.goBack()} >Cancel</button>
                </div>
            </header>
        )
    }
}

const mapstatetoProps = state => {
    return {
        contacts: state.contacts
    }
}
export default connect(mapstatetoProps, { editContact })(EditContact)

