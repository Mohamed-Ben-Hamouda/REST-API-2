import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContact } from '../actions/actions'
import ContactItem from './ContactItem'
class ContactList extends Component {
    componentDidMount() {
        this.props.getContact()
    }
    render() {
        return (
            <div>
                <header className="App-header">

                    <div>
                        {
                            this.props.contacts.map(el => <ContactItem info={el} />)

                        }

                    </div>

                    <button onClick={() => this.props.history.goBack()} >Cancel</button>
                </header>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps, { getContact })(ContactList)     
