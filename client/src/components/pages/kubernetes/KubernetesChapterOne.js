import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
// import Board from '../../animation/Board';
// import Card from '../../animation/Card';

const KubernetesChapterOne = () => {
	const authContext = useContext(AuthContext);

	useEffect(() => {
		authContext.loadUser();
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>Hover over the Cards</h1>
			<div style={{ height: '50px' }}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className='card-two'>
					<div className='imageBox-two'>
						<img src='./smoke.jpg' />
					</div>

					<div className='textBox-two'>
						{/* <h3>Kubernetes Master</h3> */}
						<p>
							The Kubernetes master is responsible for maintaining the desired
							state for your cluster. When you interact with Kubernetes, such as
							by using the kubectl command-line interface, you’re communicating
							with your cluster’s Kubernetes master. The “master” refers to a
							collection of processes managing the cluster state. Typically all
							these processes run on a single node in the cluster, and this node
							is also referred to as the master. The master can also be
							replicated for availability and redundancy.
						</p>
					</div>
					<h3
						style={{
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~# Master
					</h3>
				</div>
				<div className='card-one'>
					<div className='imageBox-one'>
						<img src='./smoke.jpg' />
					</div>
					<div className='textBox-one'>
						{/* <h3>Stephen Gregan</h3> */}
						<p>
							The nodes in a cluster are the machines (VMs, physical servers,
							etc) that run your applications and cloud workflows. The
							Kubernetes master controls each node; you’ll rarely interact with
							nodes directly.  You can create and modify Node objects using kubectl.  
							When you want to create Node objects manually, set the kubelet flag 
							--register-node=false.  You can modify Node objects regardless of the 
							setting of --register-node. For example, you can set labels on an existing 
							Node, or mark it unschedulable.
						</p>
					</div>
					<h3
						style={{
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~# Nodes
					</h3>
				</div>
				<div className='card-one'>
					<div className='imageBox-one'>
						<img src='./smoke.jpg' />
					</div>
					<div className='textBox-one'>
						{/* <h3>Stephen Gregan</h3> */}
						<p>
							A Pod is the basic execution unit of a Kubernetes app--the
							smallest unit in the Kubernetes object model that you
							create or deploy. A Pod represents processes running on your
							cluster. A Pod encapsulates an app’s container, storage
							resources, a unique network identity, as well as options that
							govern how the container should run. A Pod represents a unit of
							deployment: a single instance of an app in Kubernetes,
							which might consist of either a single container or a small number
							of containers that are tightly coupled and that share resources.
						</p>
					</div>
					<h3
						style={{
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~# Pods
					</h3>
				</div>
			</div>
			<div style={{ height: '100px' }}></div>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div className='card-two'>
					<div className='imageBox-two'>
						<img src='./smoke.jpg' />
					</div>
					<div className='textBox-two'>
						{/* <h3>Stephen Gregan</h3> */}
						<p>
							A Volume has an explicit lifetime - the same as the Pod that
							encloses it. It outlives any Containers that run within the Pod,
							and data is preserved across Container restarts. When a Pod ceases
							to exist, the volume will cease to exist, too. More importantly
							Kubernetes supports many types of volumes, and a Pod
							can use any number of them. A volume is just a
							directory, possibly with some data in it, which is accessible to
							the Containers in a Pod. How that directory comes to be, the
							medium that backs it, and the contents are determined by the
							volume type.
						</p>
					</div>
					<h3
						style={{
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~# Volumes
					</h3>
				</div>
				<div className='card-two'>
					<div className='imageBox-two'>
						<img src='./smoke.jpg' />
					</div>
					<div className='textBox-two'>
						<p>
							A ReplicaSet’s purpose is to maintain a stable set of replica Pods
							running at any given time. As such, it is often used to guarantee
							the availability of a specified number of identical Pods. A
							ReplicaSet is defined with fields, including a selector that
							specifies how to identify Pods it can acquire, a number of
							replicas indicating how many Pods it should be maintaining, and a
							pod template specifying the data of new Pods it should create to
							meet the number of replicas criteria.
						</p>
					</div>
					<h3
						style={{
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~# Replica Sets
					</h3>
				</div>
				<div className='card-one'>
					<div className='imageBox-one'>
						<img src='./smoke.jpg' />
					</div>
					<div className='textBox-one'>
						<p>
							A ReplicationController ensures that a specified number of pod
							replicas are running at any one time. This ensures that a pod or a
							homogeneous set of pods is always up and available. If there are
							too many pods, the Controller terminates the extra
							pods. If there are too few, the Controller starts more
							pods. Unlike manually created pods, the pods maintained by a
							Controller are automatically replaced if they fail, are
							deleted, or are terminated. For example, your pods are re-created
							on a node after disruptive maintenance such as a kernel upgrade.
						</p>
					</div>
					<h3
						style={{
							color: 'green',
							backgroundColor: 'black',
						}}
					>
						~# Controller
					</h3>
				</div>
			</div>
			<div style={{ height: '150px' }}></div>

			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<a href='/kuberneteschapterone'></a>
				<a href='/kuberneteschaptertwo'>
					<h1 style={{ textAlign: 'right', justifyContent: 'right' }}>
						Chapter Two <i class='fas fa-arrow-right'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default KubernetesChapterOne;
