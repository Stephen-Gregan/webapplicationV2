import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import ReactTerminal from 'react-terminal-component';

const LinuxChapterThree = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Type some commands from the previous chapter
			</h1>

			<ReactTerminal style={{ height: '1000px' }} />
			<div style={{ height: '100px' }}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/linuxchaptertwo'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i class='fas fa-arrow-left'></i> Chapter Two
					</h1>
				</a>
				<a href='/linuxchapterfour'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Four <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default LinuxChapterThree;
