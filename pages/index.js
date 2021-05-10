import { useState } from 'react';
import api from '../api/api';
import { usePost } from '../api/Hooks';
import Body from '../components/Body/Body';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Meta from '../components/Meta/Meta';
import styles from '../styles/Home.module.css';

export default function Home({ data }) {
	const [searchData, setSearchData] = useState(data.data);
	const { exec, loading, error } = usePost(api.GET_FAKE_JOBS);
	const [page, setPage ] = useState(0);
	const [currentData, setCurrentData] = useState(data.data)
	const [searchValue, setSearchValue ] = useState("")

	const findFakeJob = (value = '') => {
		let query = {
			query: value,
		};
		setSearchValue(value)
		exec(JSON.stringify(query))
			.then(data => {
				setCurrentData(data.data)
				setSearchData(data.data);
			})
		.catch(err => {});
	};

	const loadMoreJobs = (value = '') => {
		setPage(prev => prev + 1)
		let newQuery = {
			query: searchValue,
			page: page + 1,
		};
	
		exec(JSON.stringify(newQuery))
			.then(data => {
				setCurrentData(data.data)
				let newData = [...searchData, ...data.data]
				setSearchData(newData);
			})
			.catch(err => {});
	};

	

	return (
		<div className={styles.container}>
			<Meta />
			<main>
				<Hero findFakeJob={findFakeJob} />
				{error ? (
					<div>
						<p>Cannot Fetch Data</p>
						<button className='button'>Refresh</button>
					</div>
				) : (
					<Body 
					fakeJobs={searchData}
					 loadMore={loadMoreJobs}
					 currentData={currentData}
					  />
				)}
			</main>
		</div>
	);
}

export async function getStaticProps() {
	let data
	try {
		const res = await fetch(api.GET_FAKE_JOBS, {
			method: 'POST',
		});
		data = await res.json();
	
	
	} catch (error) {
		data = {
			data: []
		}
	}
	return {
		props: {
			data,
		},
		revalidate: 1,
	};
}
