import { useEffect } from 'react';
import axios from 'axios';

export default function Main() {
	
	useEffect(() => {
		axios.get('/api/list')
			.then((res) => {
				console.log(res.data);
			})
			.catch(() => {
				console.log('failed......');
			})
	},[])
	
	return (
		<>
		<h2>MainPage</h2>
		</>
	)
}