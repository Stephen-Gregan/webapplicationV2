import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contact/ContactContext';

const Navbar = ({ title, iconDocker, iconLinux, iconKubernetes }) => {
	const authContext = useContext(AuthContext);

	const { isAuthenticated, logout, user } = authContext;
	const { clearContacts } = ContactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li style={{ color: 'black' }}>Hi {user && user.name}</li>
			<li>
				<Link to='/' style={{ color: 'black' }}>Home</Link>
			</li>
			<li>
				<Link to='/contentpicker' style={{ color: 'black' }}>Content</Link>
			</li>
			<li>
				<a onClick={onLogout} href='/'>
					<i className='fas fa-sign-out-alt' style={{ color: 'black' }}></i>
					<span className='hide-sm' style={{ color: 'black' }}>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li style={{ transform: 'rotate(1deg)' }}>
				<Link to='/register' style={{ color: 'black', paddingTop: '10px', fontSize: 'x-large' }}>Register</Link>
			</li>
			<li style={{ transform: 'rotate(1deg)'}}>
				<Link to='/login' style={{ color: 'black', paddingTop: '10px', fontSize: 'x-large' }}>Login</Link>
			</li>
		</Fragment>
	);
	return (
		<div className='navbar bg-primary'>
			<h1 style={{transform: 'rotate(1deg)', marginLeft: '25px', marginBottom: '0px'}}>
				<i className={iconDocker} />
				<i className={iconKubernetes} />
				<i className={iconLinux} />
				{title}
			</h1>
			<ul style={{ transform: 'rotate(1deg)', paddingTop: '10px', fontSize: 'x-large' }}>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	iconDocker: PropTypes.string,
	iconLinux: PropTypes.string,
	iconKubernetes: PropTypes.string,
};

Navbar.defaultProps = {
	title: 'Doc/Kub/Linux',
	iconDocker: 'fab fa-docker',
	iconLinux: 'fab fa-linux',
	iconKubernetes: 'fas fa-dharmachakra',
};
export default Navbar;
