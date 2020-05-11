import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const { addContact, updateContact, clearCurrent, current } = contactContext;

	useEffect(() => {
		if (current !== null) {
			setContact(current);
		} else {
			setContact({
				name: '',
				email: '',
				phone: '',
				type: 'Awaiting Confirmation',
			});
		}
	}, [contactContext, current]);

	const [contact, setContact] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'Message',
	});

	const { name, email, phone, type } = contact;

	const onChange = (e) =>
		setContact({
			...contact,
			[e.target.name]: e.target.value,
		});

	const onSubmit = (e) => {
		e.preventDefault();
		if (current === null) {
			addContact(contact);
		} else {
			updateContact(contact);
		}

		setContact({
			name: '',
			email: '',
			phone: '',
			type: 'Message',
		});
	};

	const clearAll = () => {
		clearCurrent();
	};

	return (
		<div className='contact-form-container'>
			<form onSubmit={onSubmit}>
				<h2 className='text-primary2' style={{color: 'black', textTransform: 'uppercase'}}>
					{current
						? 'Update Friend'
						: 'Invite Friend To Start Their Learning Journey :)'}
					<hr></hr>
				</h2>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					placholder='name'
					name='name'
					value={name}
					onChange={onChange}
				/>
				<label htmlFor='email'>Email Address</label>
				<input
					type='text'
					placholder='email'
					name='email'
					value={email}
					onChange={onChange}
				/>
				<label htmlFor='phone'>Phone Number</label>
				<input
					type='text'
					placholder='phone'
					name='phone'
					value={phone}
					onChange={onChange}
				/>
				{/* <h5>Contact Type</h5>
			<input
				type='radio'
				name='type'
				value='Message'
				checked={type === 'Message'}
				onChange={onChange}
			/>
			Personal{' '}
			<input
				type='radio'
				name='type'
				value='Awaiting Confirmation'
				checked={type === 'Awaiting Confirmation'}
				onChange={onChange}
			/>
			Professional */}
				<div>
					<input
						type='submit'
						value={current ? 'Update Friend' : 'Invite Friend'}
						className='btn btn-primary btn-block'
					/>
				</div>
				{current && (
					<div>
						<button className='btn btn-light btn-block' onClick={clearAll}>
							Clear
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
