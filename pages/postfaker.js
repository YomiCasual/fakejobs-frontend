import { useState } from 'react';
import api from '../api/api';
import { usePost } from '../api/Hooks';
import Meta from '../components/Meta/Meta';
import Alert from '../components/Reusable/StatusAlert/Alert';

import PostStyles from '../styles/PostFaker.module.css';
const Postfaker = () => {
	const [name, setName] = useState('');
	const [address, setAddress] = useState('');
	const [bulk, setBulk] = useState(false);
	const [file, setFile] = useState('');
	const { data, loading, exec } = usePost(api.UPLOAD_BULK_FAKE_JOBS);
	const [openAlert, setOpenAlert] = useState(false);
	const [alertStatus, setAlertStatus] = useState(null);

	const onChange = e => {
		setFile(e.target.files[0]);
	};

	const toggleMode = e => {
		if (e.target.value === 'single') {
			setBulk(false);
		} else {
			setBulk(true);
		}
	};

	const onSubmit = e => {
		e.preventDefault();
		if (bulk) {
			let formData = new FormData();
			formData.append('file', file);
			exec(formData, api.UPLOAD_BULK_FAKE_JOBS, file)
				.then(res => {
					setOpenAlert(true);
					setAlertStatus('Successful');
				})
				.catch(err => {
					setOpenAlert(true);
					setAlertStatus('Error');
				});
		} else {
			if (!name.trim() || !address.trim()) return;
			let data = {
				companyName: name,
				companyAddress: address,
			};
			exec(JSON.stringify(data), api.POST_FAKE_JOBS)
				.then(res => {
					setOpenAlert(true);
					setAlertStatus('Successful');
				})
				.catch(err => {
					setOpenAlert(true);
					setAlertStatus('Error');
				});
		}

		setTimeout(() => {
			setOpenAlert(false);
		}, 4000);

		setName('');
		setAddress('');
		setFile('');
	};
	return (
		<section>
			<Meta />
			<Alert
				open={openAlert}
				status={alertStatus}
				message={
					alertStatus === 'Successful'
						? 'Fake job successfully added'
						: 'Error posting fake job'
				}
				title={alertStatus}
			/>
			<form onChange={toggleMode} className={PostStyles.radio}>
				<span className={PostStyles.singleRadio}>
					<input
						className={PostStyles.input}
						type='radio'
						id='single'
						name='mode'
						value='single'
					/>
					<label className={PostStyles.label}>Single</label>
				</span>

				<span className={PostStyles.singleRadio}>
					<input
						className={PostStyles.input}
						type='radio'
						id='bulk'
						name='mode'
						value='bulk'
					/>
					<label className={PostStyles.label}>Bulk</label>
				</span>
			</form>
			<form onSubmit={onSubmit} className={PostStyles.formClass}>
				{bulk ? (
					<div className='input-group'>
						<label>Bulk Upload</label>
						<input
							className='file'
							type='file'
							className='custom-file-input'
							placeholder='Enter company address'
							onChange={onChange}
							// value={file.filename}
						/>
					</div>
				) : (
					<>
						<div className='input-group'>
							<label className={PostStyles.inputGroupLabel}>Company Name</label>
							<input
								className='text-field'
								type='text'
								placeholder='Enter company name'
								onChange={e => setName(e.target.value)}
								value={name}
							/>
						</div>
						<div className='input-group'>
							<label>Company Address</label>
							<textarea
								id='txtArea'
								rows='10'
								className='text-field'
								type='textarea'
								resize='none'
								row='6'
								placeholder='Enter company address'
								onChange={e => setAddress(e.target.value)}
								value={address}
							/>
						</div>
					</>
				)}

				<button className='button'>Add Fake Job</button>
			</form>
		</section>
	);
};

export default Postfaker;
