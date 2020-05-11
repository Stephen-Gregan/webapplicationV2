import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

const DockerChapterOne = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	let imageTracker = 'f';
	const change = () => {
		const images = document.getElementById('social');

		if (imageTracker === 'v') {
			images.src = './dc.png';
			imageTracker = 'd';
		} else {
			images.src = './vm.png';
			imageTracker = 'v';
		}
	};

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Click on the image</h1>
			<div
				className='grid-2'
				style={{
					// height: '700px',
					// width: '1000px',
					justifyContent: 'center',
					border: '10px double black',
					height: '685px',
					width: '700px',
					display: 'block',

					marginLeft: 'auto',
					marginRight: 'auto',
				}}
			>
				<img
					src='./vm.png'
					alt=""
					class='center'
					id='social'
					style={{}}
					onClick={change}
				></img>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/dockerchapterone'></a>
				<a href='/dockerchaptertwo'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Two <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default DockerChapterOne;
