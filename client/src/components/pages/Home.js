import React, { useContext, useEffect, Fragment } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/AuthContext';
import Slider from '../../components/slider/Slider';
import Images from '../../images';

const Home = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<div className=''>
				<div>
					<Slider images={Images} />
				</div>
			</div>
			<hr style={{ color: 'black' }}></hr>
			<div className='moving-image'>
				<br></br>
				<img
					src='./mad-designer.png'
					style={{ height: '140px', width: '170px' }}
				/>
				<br></br>
			</div>
			<hr></hr>
			<div className='grid-2'>
				<div>
					<ContactForm />
				</div>
				<div>
					<ContactFilter />
					<Contacts />
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
