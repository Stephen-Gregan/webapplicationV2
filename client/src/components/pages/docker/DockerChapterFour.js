import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import Puzzle from 'react-image-puzzle';

const DockerChapterFour = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Solve the Puzzle</h1>
			<div style={{ width: '1600px', background: 'white' }}>
				<h3 style={{ textAlign: 'center', top: '50%' }}>
					Rearrange the image sections individually to get the bigger picture
				</h3>
				<img
				className='imageopacity'
					src='./kardc.png'
					alt=""
					style={{
						height: '500px',
						width: '500px',
						float: 'right',
						border: '1px solid black',
					}}
				></img>
				<div></div>
			</div>
			<div>
				<Puzzle size='500' level='9' position='right' image='./kardc.png' />
			</div>

			<div style={{ height: '300px' }}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/dockerchapterthree'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i className='fas fa-arrow-left'></i> Chapter Three
					</h1>
				</a>
				<a href='/contentpicker'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Back To Content <i className='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default DockerChapterFour;
