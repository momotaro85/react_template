import React from 'react';
import TextField from "@material-ui/core/TextField";

const styles = {
	helper: {
		bottom: '-50%',
		position: 'absolute'
	},
}

export default function InputPassword(props) {
	const{ name, label, value, required, error = null, onChange } = props;

	return (
		<TextField
			fullWidth
			label={label}
			name={name}
			value={value}
			type="password"
			required={required ? required : false}
			onChange={onChange}
			FormHelperTextProps={{style: styles.helper}}
			variant="outlined"
			{...(error && { error: true, helperText: error })}
		/>
	)
}
