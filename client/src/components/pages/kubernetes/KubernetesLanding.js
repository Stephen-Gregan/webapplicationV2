import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

const KubernetesLanding = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{/* <h1 style={{ textAlign: 'center' }}>Kubernetes - Select Chapter</h1> */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
				}}
			>
				<h2>
					<a href='/kuberneteschapterone'>Chapter 1</a>
				</h2>
				<h2>
					<a href='/kuberneteschaptertwo'>Chapter 2</a>
				</h2>
				<h2>
					<a href='/kuberneteschapterthree'>Chapter 3</a>
				</h2>
				<h2>
					<a href='/kuberneteschapterfour'>Chapter 4</a>
				</h2>
				<h2>
					<a href='/kuberneteslanding'>Chapter 5</a>
				</h2>
				<h2>
					<a href='/kuberneteslanding'>Chapter 6</a>
				</h2>
			</div>
			<div className='accordion-new'>
				<ul>
					<li>
						<div>
							{' '}
							<a href='kuberneteschapterone'>
								<h2>Chapter One</h2>
								<p>Learn about the different Kubernetes Components.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='kuberneteschaptertwo'>
								<h2>Chapter Two</h2>
								<p>Rotate the Cubes and find the hidden words.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='kuberneteschapterthree'>
								<h2>Chapter Three</h2>
								<p>Match content acquired from previous chapters.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='/kuberneteschapterfour'>
								<h2>Chapter Four</h2>
								<p>Re-arrange the image to see the bigger picture.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='#'>
								<h2>Chapter Five</h2>
								<p>Chapter coming soon...</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='#'>
								<h2>Chapter Six</h2>
								<p>Chapter coming soon...</p>
							</a>{' '}
						</div>
					</li>
				</ul>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/dockerlanding'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i class='fas fa-graduation-cap'></i> Docker
					</h1>
				</a>
				<a href='/linuxlanding'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Linux <i class='fas fa-graduation-cap'></i>
					</h1>
				</a>
			</div>
			{/* <div>
				<div className='row' style={{ display: 'flex' }}>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<a href='/kuberneteschapterone'>
							<img
								src='./735ef2d802bc06980c417efffc972fec.gif'
								style={{
									border: '15px double white',
									height: '200px',
									width: '500px',
									boxShadow: '5px 10px #4d2b29',
								}}
							/>
						</a>
					</div>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<a href='/kuberneteschaptertwo'>
							<img
								src='./23993ee37b6b331536ffdb4a54ed7ac4.gif'
								style={{
									border: '15px double white',
									height: '200px',
									width: '500px',
									boxShadow: '5px 10px #4d2b29',
								}}
							/>
						</a>
					</div>
				</div>
				<div className='row' style={{ display: 'flex' }}>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<a href='/kuberneteschapterthree'>
							<img
								src='./4c76a28ffecbb9a28d4502d5292cd378.gif'
								style={{
									border: '15px double white',
									height: '200px',
									width: '500px',
									boxShadow: '5px 10px #4d2b29',
								}}
							/>
						</a>
					</div>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<img
							src='./ca03c5a3981e6c49aba0f217caecd9d4.gif'
							style={{
								border: '15px double white',
								height: '200px',
								width: '500px',
								boxShadow: '5px 10px #4d2b29',
								filter: 'grayscale(100%)',
								opacity: '0.5',
							}}
						/>
					</div>
				</div>
				<div className='row' style={{ display: 'flex' }}>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<img
							src='./61739b25b3fd203ac27d3e9014e988c0.gif'
							style={{
								border: '15px double white',
								height: '200px',
								width: '500px',
								boxShadow: '5px 10px #4d2b29',
								filter: 'grayscale(100%)',
								opacity: '0.5',
							}}
						/>
					</div>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<img
							src='./812ad6f3ed8b4859798507bab680901a.gif'
							style={{
								border: '15px double white',
								height: '200px',
								width: '500px',
								boxShadow: '5px 10px #4d2b29',
								filter: 'grayscale(100%)',
								opacity: '0.5',
							}}
						/>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default KubernetesLanding;
