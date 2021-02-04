import {useSelector} from "react-redux";
import {Route, Redirect} from 'react-router-dom'

export const PrivateRoutes = ({
	component: Component,
	...rest
}) => {
	const isAuthenticated = useSelector((state) => state.authenticated.isAuthenticated)

	return <Route {...rest} component={(props) => (
		isAuthenticated ? (
			<Component {...props} />
		) : (
			<Redirect to="/login"/>
		)
	)}/>
};
