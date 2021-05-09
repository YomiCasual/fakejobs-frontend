import React from 'react';
import CardStyles from '../../../styles/Card.module.css';

const Card = ({ fakeJob }) => {
	return (
		<section className={CardStyles.card}>
			<h2 className={CardStyles.name}>{fakeJob.companyName}</h2>
			<p className={CardStyles.address}>
				{fakeJob.companyAddress}
			</p>
		</section>
	);
};

export default Card;
