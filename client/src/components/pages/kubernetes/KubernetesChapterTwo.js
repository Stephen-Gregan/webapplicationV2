import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import Cube from 'react-3d-cube';

const KubernetesChapterTwo = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Rotate the Cubes, Find the Content
			</h1>
			<div style={{ height: '50px' }}></div>
			<div style={{ display: 'flex' }}>
				<div>
					{' '}
					<div
						style={{
							width: 300,
							height: 600,
							paddingLeft: '90px',
						}}
					>
						<Cube size={265} index='front'>
							<img src='./smoke.jpg' style={{ border: '2px solid white' }} />
							<div class='bottom-left'>Cluster</div>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img><img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
						</Cube>
					</div>
				</div>
				<div>
					{' '}
					<div
						style={{
							width: 300,
							height: 600,
							paddingLeft: '90px',
						}}
					>
						<Cube size={265} index='front'>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img src='./smoke.jpg' style={{ border: '2px solid white' }} />
							<div class='bottom-left'>Volume</div><img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
						</Cube>
					</div>
				</div>
				<div>
					{' '}
					<div
						style={{
							width: 300,
							height: 600,
							paddingLeft: '90px',
						}}
					>
						<Cube size={265} index='front'>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img src='./smoke.jpg' style={{ border: '2px solid white' }} />
							<div class='bottom-left'>Master</div>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img><img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
						</Cube>
					</div>
				</div>
				<div>
					{' '}
					<div
						style={{
							width: 300,
							height: 600,
							paddingLeft: '90px',
						}}
					>
						<Cube size={265} index='front'>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img src='./smoke.jpg' alt="" style={{ border: '2px solid white' }} />
							<div class='bottom-left'>Replica Sets</div>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
						</Cube>
					</div>
				</div>
				<div>
					{' '}
					<div
						style={{
							width: 300,
							height: 600,
							paddingLeft: '90px',
						}}
					>
						<Cube size={265} index='front'>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img src='./smoke.jpg' style={{ border: '2px solid white' }} />
							<div class='bottom-left'>Node</div>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
							<img
                                src='./smoke.jpg'
                                alt=""
								style={{ border: '2px solid white' }}
							></img>
						</Cube>
						
					</div>
				</div>
			</div>
			
			<div style={{ height: '50px' }}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/kuberneteschapterone'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i className='fas fa-arrow-left'></i> Chapter One
					</h1>
				</a>
				<a href='/kuberneteschapterthree'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Three <i className='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default KubernetesChapterTwo;
