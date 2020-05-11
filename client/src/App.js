import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ContentPicker from './components/pages/ContentPicker';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import DockerLanding from './components/pages/docker/DockerLanding';
import DockerChapterOne from './components/pages/docker/DockerChapterOne';
import DockerChapterTwo from './components/pages/docker/DockerChapterTwo';
import DockerChapterThree from './components/pages/docker/DockerChapterThree';
import DockerChapterFour from './components/pages/docker/DockerChapterFour';
import KubernetesLanding from './components/pages/kubernetes/KubernetesLanding';
import KubernetesChapterOne from './components/pages/kubernetes/KubernetesChapterOne';
import KubernetesChapterTwo from './components/pages/kubernetes/KubernetesChapterTwo';
import KubernetesChapterThree from './components/pages/kubernetes/KubernetesChapterThree';
import KubernetesChapterFour from './components/pages/kubernetes/KubernetesChapterFour';
import LinuxLanding from './components/pages/linux/LinuxLanding';
import LinuxChapterOne from './components/pages/linux/LinuxChapterOne';
import LinuxChapterTwo from './components/pages/linux/LinuxChapterTwo';
import LinuxChapterThree from './components/pages/linux/LinuxChapterThree';
import LinuxChapterFour from './components/pages/linux/LinuxChapterFour';
import Alerts from './components/layout/Alerts';
import PrivateRoute from '../src/components/routing/PrivateRoute';
import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import SetAuthToken from './utils/SetAuthToken';
import Footer from '../src/components/layout/Footer';

import './App.css';

if (localStorage.token) {
	SetAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						{/* <MyComponent> */}
						<Fragment>
							<Navbar />
							<div className='container'>
								<Alerts />
								<Switch>
									<PrivateRoute exact path='/' component={Home} />
									<Route exact path='/about' component={About} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
									<PrivateRoute
										exact
										path='/contentpicker'
										component={ContentPicker}
									/>
									<PrivateRoute
										exact
										path='/dockerlanding'
										component={DockerLanding}
									/>
									<PrivateRoute
										exact
										path='/dockerchapterone'
										component={DockerChapterOne}
									/>
									<PrivateRoute
										exact
										path='/dockerchaptertwo'
										component={DockerChapterTwo}
									/>
									<PrivateRoute
										exact
										path='/dockerchapterthree'
										component={DockerChapterThree}
									/>
									<PrivateRoute
										exact
										path='/dockerchapterfour'
										component={DockerChapterFour}
									/>
									<PrivateRoute
										exact
										path='/kuberneteslanding'
										component={KubernetesLanding}
									/>
									<PrivateRoute
										exact
										path='/kuberneteschapterone'
										component={KubernetesChapterOne}
									/>
									<PrivateRoute
										exact
										path='/kuberneteschaptertwo'
										component={KubernetesChapterTwo}
									/>
									<PrivateRoute
										exact
										path='/kuberneteschapterthree'
										component={KubernetesChapterThree}
									/>
									<PrivateRoute
										exact
										path='/kuberneteschapterfour'
										component={KubernetesChapterFour}
									/>
									<PrivateRoute
										exact
										path='/linuxlanding'
										component={LinuxLanding}
									/>
									<PrivateRoute
										exact
										path='/linuxchapterone'
										component={LinuxChapterOne}
									/>
									<PrivateRoute
										exact
										path='/linuxchaptertwo'
										component={LinuxChapterTwo}
									/>
									<PrivateRoute
										exact
										path='/linuxchapterthree'
										component={LinuxChapterThree}
									/>
									<PrivateRoute
										exact
										path='/linuxchapterfour'
										component={LinuxChapterFour}
									/>
								</Switch>
							</div>

							<Footer />
						</Fragment>
						{/* </MyComponent> */}
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
		// </div>
	);
};

export default App;
