import React, {Suspense, lazy, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {useDispatch} from "react-redux";
import {setIsAuthenticated} from "./stores/reducers/authenticated";

import {toast, ToastContainer} from "react-toastify";

import {PrivateRoutes} from "./routes/PrivateRoutes";

// import components
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';

// import views
const Login = lazy(() => import('./views/Login'));
const Home = lazy(() => import('./views/Home'));

function App() {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// logic when apps initiate

		setTimeout(() => {
			setLoading(false)
		}, 3000);
	}, [])

	// set how loading start and stop ??
	return (
		<Router>
			<div className="App">
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
				{/*<Loading/>*/}
				<Header/>
				<Suspense fallback={null}>
					<Switch>
						<Route path="/" exact={true} component={Home}/>
						<Route path="/login" component={Login}/>
					</Switch>
				</Suspense>
			</div>
		</Router>
	);
}

export default App;
