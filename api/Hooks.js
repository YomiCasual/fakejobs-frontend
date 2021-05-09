import { useState } from 'react';

const usePost = (route)=> {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null)


	const get = async (body, altRoute, file) => {
        let params = {
            method: 'POST',
            body: body,
        }

		if (!route && !altRoute) {
			setData([]);
			return;
		}

        if (!file) {
            params.headers = {"Content-type": "application/json; charset=UTF-8"}
        }

		try {
			setLoading(true);
			const req = await fetch(altRoute || route, params);
			const response = req.json();
			setData(response);
			setLoading(false);
            return response
		} catch (error) {
			setError(error.message)
			setLoading(false);
		}
	};

	return {
		loading,
		data,
		error,
		exec: get,
	};
};

export {
    usePost
}
