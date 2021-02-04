import React from 'react';
import {useHistory} from "react-router-dom";

import {useDispatch} from "react-redux";
import {setIsAuthenticated} from "../stores/reducers/authenticated";

import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import Fade from '@material-ui/core/Fade';

// import component
import {Form, useForm} from "../components/Form/UseForm";
import Input from "../components/Input/InputText";
import InputPassword from "../components/Input/InputPassword";

export default function Login() {
	const dispatch = useDispatch();
	let history = useHistory();

	const form = {
		email: '',
		password: ''
	}

	const validate = (fieldValues = values) => {
		let temp = {...errors}

		if ('email' in fieldValues) {
			temp.email = fieldValues.email ? '' : 'Email field is required!!';
		}

		if ('email' in fieldValues) {
			temp.email = (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/).test(fieldValues.email) ? '' : 'Email is not valid!!';
		}

		if ('password' in fieldValues) {
			temp.password = fieldValues.password ? '' : 'Password field is required';
		}

		setErrors({
			...temp
		})

		if (fieldValues === values) {
			return Object.values(temp).every(x => x === '');
		}
	}

	const {
		values,
		errors,
		setErrors,
		handleInputChange,
		resetForm
	} = useForm(form, true, validate)

	// submit login
	const handleSubmit = (e) => {
		e.preventDefault();

		if (validate()) {
			console.log(values)

			resetForm();
		}
	}

	return (
		<Fade in={true} timeout={1500}>
			<Grid className="login-container" container>
				<Grid className="login-left-side" item xs={8} xl={8}>

				</Grid>

				<Grid className="login-right-side" item xs={4} xl={4}>
					<h1>Welcome Back</h1>

					<p className="login-information pt-2">
						Please enter your email and password to get access your account.
					</p>

					<div className="login-form">
						<Form onSubmit={handleSubmit}>
							<Box mt={2} mb={4}>
								<Input
									label="Email"
									name="email"
									value={values.email}
									required={true}
									onChange={handleInputChange}
									error={errors.email}
								/>
							</Box>

							<Box mt={2} mb={4}>
								<InputPassword
									label="Password"
									name="password"
									value={values.password}
									required={true}
									onChange={handleInputChange}
									error={errors.password}
								/>
							</Box>

							<Button
								variant="contained"
								size="large"
								type="submit"
								className="login-button"
							>
								Login
							</Button>
						</Form>
					</div>
				</Grid>
			</Grid>
		</Fade>
	)
}
