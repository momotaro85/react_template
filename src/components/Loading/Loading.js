import React, {useState} from 'react';
import HashLoader from 'react-spinners/HashLoader';
import {css} from '@emotion/react';

const override = css`
    min-height: 100vh;
    max-height: 100vh;
    display: flex;
    margin: auto auto;
`;

export default function Loading() {
	const [loading, setLoading] = useState(true);

	return (
		<div className="loading-container">
			<div className="sweet-loading">
				<HashLoader
					css={override}
					size={100}
					color={"#fff"}
					loading={loading}
				/>
			</div>
		</div>
	)
}
