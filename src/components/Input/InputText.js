import React from 'react';
import TextField from "@material-ui/core/TextField";

const styles = {
	helper: {
		bottom: '-40%',
		position: 'absolute'
	},
}

export default function InputText(props) {
	const {name, label, value, required, error = null, onChange} = props;

	return (
		<TextField
			fullWidth
			label={label}
			name={name}
			value={value}
			required={required ? required : false}
			onChange={onChange}
			FormHelperTextProps={{style: styles.helper}}
			variant="outlined"
			{...(error && {error: true, helperText: error})}
		/>
	)
}
