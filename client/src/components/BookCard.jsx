import { useEffect } from 'react';
import axios from 'axios';

export default function BookCard() {
  
	useEffect(() => {
		axios.get('/api/list')
		 .then((res) => {
				console.log(res.data);
        console.log('axios test success...');
			})
			.catch(() => {
				console.log('failed......');
			})
		const book_key = process.env.REACT_APP_BOOK_KEY
		const apiurl = `interpark/api/bestSeller.api?key=${book_key}&categoryId=100`
		axios.get(apiurl, { 
			headers: { 'Access-Control-Allow-Origin' : '*',
			'Access-Control-Allow-Methods' : 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
			'Access-Control-Allow-Headers' : 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
			'Access-Control-Allow-Credentials' : 'true'
		}})
			.then((res) => {
				console.log(res.data);
				console.log('axios success');
			})
			.catch(() => {
				console.log('failed....');
			})

	},[])
	
	return(
	<>
		<h2>bookCard</h2>
		<div className="container">
			<div className="row">
				<div className="col-md-3">
					<img alt='' src='https://bimage.interpark.com/partner/goods_image/2/5/3/1/356522531h.jpg' /> 
					<h6>제목 :</h6>
					<p>dd</p>
				</div>
				<div className="col-md-3">dd</div>
				<div className="col-md-3">dd</div>
				<div className="col-md-3">dd</div>
			</div>
		</div>
	</>
	) 
}
