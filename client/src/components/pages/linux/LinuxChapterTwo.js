import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

const LinuxChapterTwo = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Check out some Linux Commands</h1>{' '}
			<ul className='linux-list'>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ touch</h2>
						<p className='linux-paragraph'>
						The touch command is used to create, 
						change and modify timestamps of a file. 
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ cat</h2>
						<p className='linux-paragraph'>
							The cat command (short for “concatenate”) lists the contents of
							files to the terminal window.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ cd</h2>
						<p className='linux-paragraph'>
							The cd command changes your current directory. It moves you to a
							new place in the filesystem.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ clear</h2>
						<p className='linux-paragraph'>
							The clear command clears the terminal window back to default.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ cp</h2>
						<p className='linux-paragraph'>
						The cp command is used for copying files and directories. 
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ history</h2>
						<p className='linux-paragraph'>
							The history commands gives you a list of all entered commands.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ mkdir</h2>
						<p className='linux-paragraph'>
							The mkdir command shows the size, used and available space on the
							mounted filesystems.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ pwd</h2>
						<p className='linux-paragraph'>
							The pwd stands for print working directory and does just that.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ echo</h2>
						<p className='linux-paragraph'>
							The echo command prints (echoes) a string of text to the terminal
							window.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ tail</h2>
						<p className='linux-paragraph'>
						The tail command is a command-line utility for outputting the last 
						part of files given to it via standard input. 
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ ls</h2>
						<p className='linux-paragraph'>
							The ls command lists the files and folders in the directory you
							specify.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ whoami</h2>
						<p className='linux-paragraph'>
							The whoami command notifys which user you are currently logged in as.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ printenv</h2>
						<p className='linux-paragraph'>
						the printenv command prints all or part of the shell environment.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ rmdir</h2>
						<p className='linux-paragraph'>
							The grep utility searches for lines which contain a search
							pattern.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ rm</h2>
						<p className='linux-paragraph'>
						The rm command stands for 'remove' as the name suggests rm command is used to delete files/directorys. 
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ head</h2>
						<p className='linux-paragraph'>
						The head command, as the name implies, print the top N number of data of the 
						given input. 
						</p>
					</a>
				</li>
			</ul>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/linuxchapterone'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i class='fas fa-arrow-left'></i> Chapter One
					</h1>
				</a>
				<a href='/linuxchapterthree'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Three <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default LinuxChapterTwo;
