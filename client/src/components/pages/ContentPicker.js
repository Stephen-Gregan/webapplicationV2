import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import Images from '../layout/Images';

const ContentPicker = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);

	return (
		<div>
			<div className='rowers'>
				<div className='columnings'>
					<h3>Docker</h3>
					<a href='./dockerlanding'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./f55e8059ea945abfd6804b887dd4a0af.gif'
						/>
					</a>
				</div>
				<div className='columnings'>
					<h3>Kubernetes</h3>
					<a href='./kuberneteslanding'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./Orchestrating-with-Kubernetes-in-Azure-Container-Service.gif'
						/>
					</a>
				</div>
				<div className='columnings'>
					<h3>Linux</h3>
					<a href='./linuxlanding'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./cOxBL.gif'
						/>
					</a>
				</div>
			</div>
			<div className='rowers'>
				<div className='columnings'>
					<h3>React</h3>
					<a href='#'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./giphy.gif'
						/>
					</a>
				</div>
				<div className='columnings'>
					<h3>Python</h3>
					<a href='#'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./9068ac73d5de35ee-http-requests-in-python-3.gif'
						/>
					</a>
				</div>
				<div className='columnings'>
					<h3>Angular JS</h3>
					<a href='#'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./Angular_JS_blog_Giff.gif'
						/>
					</a>
				</div>
			</div>
			<div className='rowers'>
				<div className='columnings'>
					<h3>Neural Networks</h3>
					<a href='#'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./5Szi.gif'
						/>
					</a>
				</div>
				<div className='columnings'>
					<h3>Artificial Intelligence</h3>
					<a href='#'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./ai.gif'
						/>
					</a>
				</div>
				<div className='columnings'>
					<h3>Hacking</h3>
					<a href='#'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./fsociety.gif'
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContentPicker;

{
	/* <div classNameName='grid-6' style={{ display: 'flex' }}>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>Docker</h3>
					<a href='./dockerlanding'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./f55e8059ea945abfd6804b887dd4a0af.gif'
						/>
					</a>
				</div>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>Kubernetes</h3>
					<a href='./kuberneteslanding'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./Orchestrating-with-Kubernetes-in-Azure-Container-Service.gif'
						/>
					</a>
				</div>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>Linux</h3>
					<a href='./linuxlanding'>
						<img
							style={{ height: '200px' }}
							classNameName='imagesContent'
							src='./cOxBL.gif'
						/>
					</a>
				</div>
			</div>
			<div classNameName='grid-2' style={{ display: 'flex' }}>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>React</h3>
					<img
						style={{ height: '200px' }}
						classNameName='imagesContent'
						src='./giphy.gif'
					/>
				</div>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>Python</h3>
					<img
						style={{ height: '200px' }}
						classNameName='imagesContent'
						src='./9068ac73d5de35ee-http-requests-in-python-3.gif'
					/>
				</div>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>Angular</h3>
					<img
						style={{ height: '200px' }}
						classNameName='imagesContent'
						src='./Angular_JS_blog_Giff.gif'
					/>
				</div>
			</div> */
}
{
	/* <div classNameName='row' style={{ display: 'flex' }}>
				<div classNameName='column' style={{ flex: '33.33%', padding: '5px' }}>
					<h3>Neural Networks</h3>
					<img
						style={{ height: '200px', width: '100%' }}
						classNameName='imagesContent'
						src='./ai.gif'
					/>
				</div>
				<div classNameName='column' style={{ flex: '25%', padding: '5px' }}>
					<h3>Artificial Intelligence</h3>
					<img
						style={{ height: '200px', width: '100%' }}
						classNameName='imagesContent'
						src='./ai.gif'
					/>
				</div>
				<div classNameName='column' style={{ flex: '25%', padding: '5px' }}>
					<h3>Hacking</h3>
					<img
						style={{ height: '200px', width: '100%' }}
						classNameName='imagesContent'
						src='./ai.gif'
					/>
				</div>
				<div classNameName='column' style={{ flex: '25%', padding: '5px' }}>
					<h3>Hacking</h3>
					<img
						style={{ height: '200px', width: '100%' }}
						classNameName='imagesContent'
						src='./ai.gif'
					/>
				</div>
			</div> */
}
