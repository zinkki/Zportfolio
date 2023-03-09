import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BookCard() {
  
	const [bestBookInfo, setBestBookInfo] = useState([{
		author:'',
		categoryName:'',
		coverLargeUrl:'',
		coverSmallUrl:'',
		customerReviewRank:'',
		description:'',
		discountRate: 10,
		link:'',
		priceSales:'',
		priceStandard:'',
		pubDate:'',
		publisher:'',
		rank:'',
		saleStatus:'',
		title:'',
	}])

	useEffect(() => {
		// axios.get('/api/list')
		//  .then((res) => {
		// 		console.log(res.data);
        // console.log('axios test success...');
		// 	})
		// 	.catch(() => {
		// 		console.log('failed......');
		// 	})

		const book_key = process.env.REACT_APP_BOOK_KEY
		const apiurl = `api/bestSeller.api?key=${book_key}&categoryId=100&output=json`

		axios.get(apiurl)
			.then((res) => {
				console.log('-------------res.data-------------');
				console.log(res.data);
				console.log('-------------res.data.item-------------');
				console.log(res.data.item);
				setBestBookInfo(res.data.item);
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
				{ bestBookInfo.length > 0 ? (
					bestBookInfo.map((bestBookInfo,idx) => (
						<div className="col-md-3" key={idx}>
						<img alt='' src={bestBookInfo.coverLargeUrl} /> 
						<h6>제목 :{bestBookInfo.title}</h6>
						<p>{bestBookInfo.description}</p>
					</div>
					))
				) : null }
			</div>
		</div>
	</>
	) 
}
