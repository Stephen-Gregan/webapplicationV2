import React from 'react';

const Footer = () => {
	return (
		<div>			
			<footer>
				<div className='footer-top'  style={{marginTop: '100px'}}>
					<div className='contain'>
						<div className='r'>
							<div className='segment-three'>
								<h2 style={{ color: '#fff', fontSize: '18px', textAlign: 'center' }}>Follow</h2>
								<a href='#' className='fa fa-facebook' style={{ textDecoration: 'none' }}></a>
								<a href='#' className='fa fa-twitter' style={{ textDecoration: 'none' }}></a>
								<a href='#' className='fa fa-linkedin' style={{ textDecoration: 'none' }}></a>
							</div>
							<div className='segment-four'>
								<h2 style={{ color: '#fff', fontSize: '18px',  textAlign: 'center'  }}></h2>
								{/* <p className='footer-paragraph' style={{ color: '#fff' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p> */}
								<form>
									<input type='email' placeholder='Email Address...' style={{margin: '0 auto', width: '50%'}}></input>
									<input type='submit' value='subscribe' style={{ color: 'white' }}></input>
								</form>
							</div>
							<div className='segment-four'>
								<h2 style={{ color: '#fff', fontSize: '18px',  textAlign: 'center'  }}>Copyright © 2020 Stephen Inc. All rights reserved.</h2>
								
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
