import React, { useState, useContext, useEffect, useRef } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';
import { TravelerEffect } from 'react-background-animation';

const Login = (props) => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		console.log('HI');
		if (isAuthenticated) {
			console.log('true');
			props.history.push('/');
			console.log('true2');
		}

		if (error === 'Invalid credentials') {
			console.log('vvvvv');
			setAlert(error, 'danger');
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const { name, email, password, passwordConfirm } = user;
	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setAlert('Please fill in all fields...', 'danger');
		} else {
			login({ email, password });
		}
	};

	return (
		<div className='form-container'>
			<h2>
				Account <span className='text-primary'>Login</span>
			</h2>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email Address</label>
					<input
						type='email'
						name='email'
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='name'>Password</label>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						required
					/>
				</div>
				<input
					type='submit'
					value='Login'
					className='btn btn-primary btn-block'
				/>
			</form>
			<React.Fragment>
				<TravelerEffect />
			</React.Fragment>
		</div>
	);
};

export default Login;
