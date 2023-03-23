import { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookCard() {
	
	const book_key = process.env.REACT_APP_BOOK_KEY;
	const url = `api/bestSeller.api?key=${book_key}&categoryId=100&output=json`;
	const [bookInfo, setBookInfo] = useState([
		{
			author: "",
      categoryName: "",
      coverLargeUrl: "",
      coverSmallUrl: "",
      customerReviewRank: "",
      description: "",
      discountRate: 10,
      link: "",
      priceSales: 0,
      priceStandard: 0,
      pubDate: "",
      publisher: "",
      rank: "",
      saleStatus: "",
      title: "",
		}
	]);

	useEffect(() => {
		axios
			.get(url)
			.then((res) => {
				setBookInfo(res.data.item);
				console.log('axios success!');
			})
			.catch(() => console.log('failed....'));
	}, []);

	return (
    <>
		<section>
			<header className='major'>
				<h2>BookCard.jsx</h2>
			</header>
			<div className='major'>
			<ul>
				{bookInfo.length > 0 ? bookInfo.map((bookInfo, idx) => (
					<li key={idx}> {bookInfo.title} </li>
				)) : null}
			</ul>
			</div>
		</section>
    </>
  );
}


