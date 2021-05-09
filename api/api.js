class API {
	BASE_URL = 'https://fakejobsapi.herokuapp.com/api/v1';

	GET_FAKE_JOBS = 'https://fakejobsapi.herokuapp.com/api/v1/get';
	POST_FAKE_JOBS = 'https://fakejobsapi.herokuapp.com/api/v1/create';
	UPLOAD_BULK_FAKE_JOBS = 'https://fakejobsapi.herokuapp.com/api/v1/uploadFile';
}

const api = new API();

export default api;
