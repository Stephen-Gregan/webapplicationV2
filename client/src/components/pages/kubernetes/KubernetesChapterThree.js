import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import Board from '../../animation/Board';
import Card from '../../animation/Card';

const KubernetesChapterThree = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	function myFunction() {
		document.getElementById('myDiv').style.display = 'block';
	}

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Drag the retrieved content from the Previous chapter to the right box
			</h1>
			<div className='flexbox'>
				<Board id='board-1' className='board'>
					<Card id='card-1' className='card' draggable='true'>
						<p>Pod</p>
					</Card>
					<Card id='card-2' className='card' draggable='true'>
						<p>Node</p>
					</Card>
					<Card id='card-3' className='card' draggable='true'>
						<p>Replica Sets</p>
					</Card>
					<Card id='card-4' className='card' draggable='true'>
						<p>Master</p>
					</Card>
					<Card id='card-5' className='card' draggable='true'>
						<p>Cluster</p>
					</Card>
					<Card id='card-6' className='card' draggable='true'>
						<p>Volume</p>
					</Card>	
				</Board>
				<div>
					<button onClick={myFunction}>Show Answers</button>
					<div id='myDiv' style={{ display: 'none' }}>
						<ul>
							<li>Master</li>
							<li>Node</li>
							<li>Volume</li>
							<li>Replica Sets</li>
							<li>Cluster</li>
						</ul>
					</div>
				</div>

				<Board id='board-2' className='board'></Board>
			</div>

			<div style={{ height: '50px' }}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/kuberneteschaptertwo'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i className='fas fa-arrow-left'></i> Chapter Two
					</h1>
				</a>
				<a href='/kuberneteschapterfour'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Four <i className='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default KubernetesChapterThree;
