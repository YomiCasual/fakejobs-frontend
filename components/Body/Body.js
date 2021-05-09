import React from 'react';
import NotFound from '../NotFound/NotFound';

import Card from '../Reusable/Card/Card';

const Body = ({ fakeJobs, loadMore, currentData }) => {
	return (
		<React.Fragment>
			{fakeJobs.length === 0 ? (
				<NotFound />
			) : (
				<>
					<section className='grid-list body'>
						{fakeJobs.map(fakeJob => (
							<React.Fragment key={fakeJob._id}>
								<Card fakeJob={fakeJob} />
							</React.Fragment>
						))}
					</section>
					{currentData.length >=
						8 && (
							<div className='load-more'>
								<button onClick={loadMore} className='button'>
									Load More
								</button>
							</div>
						)
					}
				</>
			)}
		</React.Fragment>
	);
};

export default Body;
