import { GET_CONTACTS } from './types'
import axios from 'axios'


export const getContact = () => dispatch => {
    axios.get('/allcontact')
        .then(res => dispatch({
            type: GET_CONTACTS,
            payload: res.data
        }))
        .catch(err => console.log(err))
}
export const addContact = newContact => dispatch => {
    axios.post('/newcontact', newContact)
    // .then(() => dispatch(getContact()))
    // .catch(err => console.log(err))
}
export const delContact = id => dispatch => {
    axios.delete(`/deletecontact/${id}`)
        .then(() => dispatch(getContact()))
        .catch(err => console.log(err))
}
export const editContact = (id, updateContact) => dispatch => {
    axios.put(`/editcontact/${id}`, updateContact)
        .then(() => dispatch(getContact()))
        .catch(err => console.log(err))
}
