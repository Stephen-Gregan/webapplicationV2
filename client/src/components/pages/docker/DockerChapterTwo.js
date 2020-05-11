import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

const DockerChapterTwo = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
		

			<h1 style={{ textAlign: 'center' }}>Docker Components</h1>
			<div style={{height: '100px'}}></div>
			<div style={{ display: 'flex' }}>
				<div
					className='newContainer'
					style={{ width: '33.33%', border: '4px double black' }}
				>
					<h3
						style={{
							textAlign: 'center',
							verticalAlign: 'middle',
							lineHeight: '300px',
							fontFamily: 'Algerian',
							fontSize: '28px',
							color: 'green',
							backgroundColor: 'black'							
						}}
					>
						~$ CLIENT
					</h3>
					{/* <img src='./vm.png' alt='Avatar' className='image' /> */}
					<div className='overlay-bottom'>
						<div className='text'>
							The Docker client enables users to interact with Docker. Docker
							runs in a client-server architecture that means docker client can
							connect to the docker host locally or remotely.{' '}
						</div>
					</div>
				</div>
				<div
					className='newContainer'
					style={{ width: '33.33%', border: '4px double black' }}
				>
					<h3
						style={{
							textAlign: 'center',
							verticalAlign: 'middle',
							lineHeight: '300px',
							fontFamily: 'Algerian',
							fontSize: '28px',
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~$ HOST
					</h3>
					{/* <img src='./vm.png' alt='Avatar' className='image' /> */}
					<div className='overlay-top'>
						<div className='text'>
							The Docker host provides a complete environment to execute and run
							applications. It includes Docker daemon, Images, Containers,
							Networks, and Storage.
						</div>
					</div>
				</div>
				<div
					className='newContainer'
					style={{ width: '33.33%', border: '4px double black' }}
				>
					<h3
						style={{
							textAlign: 'center',
							verticalAlign: 'middle',
							lineHeight: '300px',
							fontFamily: 'Algerian',
							fontSize: '28px',
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~$ DAEMON
					</h3>
					{/* <img src='./vm.png' alt='Avatar' className='image' /> */}
					<div className='overlay-bottom'>
						<div className='text'>
							Docker Daemon is a persistent background process that manages
							Docker images, containers, networks, and storage volumes. The
							Docker daemon constantly listens for Docker API requests and
							processes them.
						</div>
					</div>
				</div>
			</div>
			<div style={{ display: 'flex' }}>
				<div
					className='newContainer'
					style={{ width: '33.33%', border: '4px double black' }}
				>
					<h3
						style={{
							textAlign: 'center',
							verticalAlign: 'middle',
							lineHeight: '300px',
							fontFamily: 'Algerian',
							fontSize: '28px',
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~$ IMAGES
					</h3>
					{/* <img src='./vm.png' alt='Avatar' className='image' /> */}
					<div className='overlay-top'>
						<div className='text'>
							Docker-images are a read-only binary template used to build
							containers. Images also contain metadata that describe the
							container’s capabilities and needs.
						</div>
					</div>
				</div>
				<div
					className='newContainer'
					style={{ width: '33.33%', border: '4px double black' }}
				>
					<h3
						style={{
							textAlign: 'center',
							verticalAlign: 'middle',
							lineHeight: '300px',
							fontFamily: 'Algerian',
							fontSize: '28px',
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~$ CONTAINERS
					</h3>
					{/* <img src='./vm.png' alt='Avatar' className='image' /> */}
					<div className='overlay-bottom'>
						<div className='text'>
							A container is a runnable instance of an image. You can create,
							start, stop, move, or delete a container using the Docker API or
							CLI.{' '}
						</div>
					</div>
				</div>
				<div
					className='newContainer'
					style={{ width: '33.33%', border: '4px double black' }}
				>
					<h3
						style={{
							textAlign: 'center',
							verticalAlign: 'middle',
							lineHeight: '300px',
							fontFamily: 'Algerian',
							fontSize: '28px',
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~$ NETWORKING
					</h3>
					{/* <img src='./vm.png' alt='Avatar' className='image' /> */}
					<div className='overlay-top'>
						<div className='text'>
							Through the docker networking, we can communicate one container to
							other containers. By default, you get three different networks on
							the installation of Docker – none, bridge, and host.
						</div>
					</div>
				</div>
			</div>
			<div style={{height: '100px'}}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/dockerchapterone'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i class='fas fa-arrow-left'></i> Chapter One
					</h1>
				</a>
				<a href='/dockerchapterthree'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Three <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div> 
		</div>
	);
};

export default DockerChapterTwo;
