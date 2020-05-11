import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

const LinuxLanding = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			{/* <h1 style={{ textAlign: 'center' }}>Linux - Select Chapter</h1> */}
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					width: '100%',
				}}
			>
				<h2>
					<a href='/linuxchapterone'>Chapter 1</a>
				</h2>
				<h2>
					<a href='/linuxchaptertwo'>Chapter 2</a>
				</h2>
				<h2>
					<a href='/linuxchapterthree'>Chapter 3</a>
				</h2>
				<h2>
					<a href='/linuxchapterfour'>Chapter 4</a>
				</h2>
				<h2>
					<a href='/linuxlanding'>Chapter 5</a>
				</h2>
				<h2>
					<a href='/linuxlanding'>Chapter 6</a>
				</h2>
			</div>

			<div class='accordion-new'>
				<ul>
					<li>
						<div>
							{' '}
							<a href='linuxchapterone'>
								<h2>Chapter One</h2>
								<p>Familiarize yourself with the Linux Terminal.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='linuxchaptertwo'>
								<h2>Chapter Two</h2>
								<p>Learn popular Linux Commands.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='linuxchapterthree'>
								<h2>Chapter Three</h2>
								<p>Enter commands into Terminal.</p>
							</a>{' '}
						</div>
					</li>
					<li>
						<div>
							{' '}
							<a href='/linuxchapterfour'>
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
				<a href='/kuberneteslanding'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Kubernetes <i class='fas fa-graduation-cap'></i>
					</h1>
				</a>
			</div>
			{/* <div>
				<div className='row' style={{ display: 'flex' }}>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<a href='./linuxchapterone'>
							<img
								src='./735ef2d802bc06980c417efffc972fec.gif'
								style={{
									border: '15px double white',
									// borderRadius: '50px',
									height: '200px',
									width: '500px',
									boxShadow: '5px 10px #4d2b29',
								}}
							/>
						</a>
					</div>
					<div className='column' style={{ flex: '50%', padding: '5px' }}>
						<a href='./linuxchaptertwo'>
							<img
								src='./23993ee37b6b331536ffdb4a54ed7ac4.gif'
								style={{
									border: '15px double white',
									// borderRadius: '50px',
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
						<a href='./linuxchapterthree'>
							<img
								src='./4c76a28ffecbb9a28d4502d5292cd378.gif'
								style={{
									border: '15px double white',
									// borderRadius: '50px',
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
								//borderRadius: '50px',
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
								//borderRadius: '50px',
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
								//borderRadius: '50px',
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

export default LinuxLanding;
