import React from 'react';
import AlertStyles from '../../../styles/Alert.module.css';

const Alert = ({
	color = 'white',
	message = 'Fake job successfully added',
	title = 'Successful',
	open = false,
	status = 'Successful',
}) => {
	return (
		<div
			style={{
				background: status === 'Successful' ? '#0440bd' : 'red',
				color,
				opacity: open ? '1' : '0',
                visibility: open ? 'visible' : 'hidden',
				transition: '1s all ease',
				overflow: 'hidden',
			}}
			className={AlertStyles.alert}>
			<h3 className={AlertStyles.title}>{title}</h3>
			<p className={AlertStyles.subtitle}>{message}</p>
		</div>
	);
};

export default Alert;
