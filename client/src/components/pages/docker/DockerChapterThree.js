import React, { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

const DockerChapterThree = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Docker Commands</h1>
			<ul className='linux-list'>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ run</h2>
						<p className='linux-paragraph'>
						Runs a command in a new container.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ start</h2>
						<p className='linux-paragraph'>
						Starts one or more stopped containers.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ stop</h2>
						<p className='linux-paragraph'>
						Stops one or more running containers.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ build</h2>
						<p className='linux-paragraph'>
						Builds an image form a Docker file.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ pull</h2>
						<p className='linux-paragraph'>
						Pulls an image or a repository from a registry.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ push</h2>
						<p className='linux-paragraph'>
						Pushes an image or a repository to a registry.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ export</h2>
						<p className='linux-paragraph'>
						Exports a container’s filesystem as a tar archive.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ exec</h2>
						<p className='linux-paragraph'>
						Runs a command in a run-time container.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ search</h2>
						<p className='linux-paragraph'>
						Searches the Docker Hub for images.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ attach</h2>
						<p className='linux-paragraph'>
						Attaches to a running container.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ commit</h2>
						<p className='linux-paragraph'>
						Creates a new image from a container’s changes.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ create</h2>
						<p className='linux-paragraph'>
						Create a container from an image.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ inspect</h2>
						<p className='linux-paragraph'>
						See lots of info about a container.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ logs</h2>
						<p className='linux-paragraph'>
						Print logs.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ rm</h2>
						<p className='linux-paragraph'>
						Delete a stopped container.
						</p>
					</a>
				</li>
				<li className='linux-list-element'>
					<a href='#'>
						<h2 className='linux-heading'>~$ kill</h2>
						<p className='linux-paragraph'>
						Stop main process in container abruptly.
						</p>
					</a>
				</li>
			</ul>
			{/* <div style={{ height: '150px' }}></div>
			<div className='box-doc'>
				<div>
					<span>
						<h3 style={{ margin: '30px' }}>
							docker pull – Pulls an image or a repository from a registry.
						</h3>
						<h3 style={{ position: 'absolute', top: '275px' }}>
							docker stop – Stops one or more running containers.
						</h3>
					</span>
					<span>
						<h3 style={{ margin: '30px' }}>
							docker start – Starts one or more stopped containers.
						</h3>
						<h3 style={{ position: 'absolute', top: '275px' }}>
							docker run – Runs a command in a new container.
						</h3>
					</span>
					<span>
						<h3 style={{ margin: '30px' }}>
							docker build – Builds an image form a Docker file.
						</h3>
						<h3 style={{ position: 'absolute', top: '275px' }}>
							docker push – Pushes an image or a repository to a registry.
						</h3>
					</span>
					<span>
						<h3 style={{ margin: '30px' }}>
							docker export – Exports a container’s filesystem as a tar archive.
						</h3>
						<h3 style={{ position: 'absolute', top: '275px' }}>
							docker exec – Runs a command in a run-time container.
						</h3>
					</span>
				</div>
			</div>
			<div style={{ height: '150px' }}></div> */}
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/dockerchaptertwo'>
					<h1 style={{ textAlign: 'left', justifyContent: 'left' }}>
						<i class='fas fa-arrow-left'></i> Chapter Two
					</h1>
				</a>
				<a href='/dockerchapterfour'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Four <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default DockerChapterThree;
