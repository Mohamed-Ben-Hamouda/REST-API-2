import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { delContact } from '../actions/actions'
import { Link } from 'react-router-dom'

const ContactItem = props => {
    return (
        <Card className="text-center">
            <Card.Header>name: {props.info.name}</Card.Header>
            <Card.Body>
                <Card.Title>email</Card.Title>
                <Card.Text>
                    {props.info.email}
                </Card.Text>
                <Card.Title>phone</Card.Title>
                <Card.Text>
                    {props.info.phone}
                </Card.Text>

                <Link to={`/contact/${props.info._id}`}> <Button variant="primary">Edit</Button></Link>
                <Button variant="danger" onClick={() => props.delContact(props.info._id)}>Delete</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>



    )
}

export default connect(null, { delContact })(ContactItem)





