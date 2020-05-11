import React, { useContext, useEffect } from 'react';
import Terminal from 'terminal-in-react';
import AuthContext from '../../../context/auth/AuthContext';
import pseudoFileSystemPlugin from 'terminal-in-react-pseudo-file-system-plugin';
const FileSystemPlugin = pseudoFileSystemPlugin();

const LinuxChapterOne = () => {
	const showMsg = () => 'Hello World';

	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>
				Type some commands in to the Terminal below...
			</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					// alignItems: 'center',
					height: '80vh',
				}}
			>
				<Terminal
					plugins={[FileSystemPlugin]}
					promptSymbol='~$'
					color='green'
					backgroundColor='black'
					barColor='black'
					style={{ fontWeight: 'bold', fontSize: '1em' }}
					commands={{
						'open-google': () =>
							window.open('https://www.google.com/', '_blank'),
						showMsg,
						popup: () => alert('Terminal in React'),
					}}
					descriptions={{
						'open-google': 'opens google.com',
						showmsg: 'shows a message',
						alert: 'alert',
						popup: 'alert',
					}}
					msg='Hello Friend, Hello Friend :), type help in the terminal below...'
				/>
			</div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/linuxchapterone'></a>
				<a href='/linuxchaptertwo'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Two <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default LinuxChapterOne;
