import React, { useReducer } from 'react';
import Axios from 'axios';
//import uuid from 'react';
//import uuidv4 from 'uuid/v4';
//import { v4 as uuidv4 } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	FILTER_CONTACTS,
	CLEAR_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: null,
		current: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(ContactReducer, initialState);

	// GET CONTACTS
	const getContacts = async () => {
		try {
			const res = await Axios.get('/api/contacts');
			dispatch({ type: GET_CONTACTS, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}
	};

	// ADD CONTACTS
	const addContact = async contact => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await Axios.post('/api/contacts', contact, config);
			dispatch({ type: ADD_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}
		//contact.id = uuidv4();
		//console.log(contact.id);
	};

	// DELETE CONTACTS
	const deleteContact = async id => {
		try {
			await Axios.delete(`/api/contacts/${id}`);
			dispatch({ type: DELETE_CONTACT, payload: id });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}
	};
	// UPDATE CONTACT
	const updateContact = async contact => {
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		try {
			const res = await Axios.put(
				`/api/contacts/${contact._id}`,
				contact,
				config
			);
			dispatch({ type: UPDATE_CONTACT, payload: res.data });
		} catch (err) {
			dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
		}
	};
	// CLEAR CONTACTS
	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS });
	};
	// SET CURRENT CONTACT
	const setCurrent = contact => {
		console.log(contact);
		dispatch({ type: SET_CURRENT, payload: contact });
	};
	// CLEAR CURRENT CONTACT
	const clearCurrent = () => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// FILTER CONTACTS
	const filterContacts = text => {
		dispatch({ type: FILTER_CONTACTS, payload: text });
	};
	// CLEAR FILTER
	const clearFilter = () => {
		dispatch({ type: CLEAR_FILTER });
	};
	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				addContact,
				deleteContact,
				setCurrent,
				clearCurrent,
				updateContact,
				filterContacts,
				clearFilter,
				getContacts,
				clearContacts
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
