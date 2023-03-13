import { useEffect, useState } from 'react';
import axios from 'axios';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import BookCard from '../components/BookCard';

export default function SideBar() {

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
	
	const [categoryId, setCategoryId] = useState('100');
  const [openAPI, setOpenAPI] = useState('bestSeller'); //베스트셀러(bestSeller),추천도서(recommend),신간도서(newBook)
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
	const URL = `api/${openAPI}.api?key=${book_key}&categoryId=${categoryId}&output=json`;

	axios.get(URL)
		.then((res) => {
			//console.log('-------------res.data-------------');
			//console.log(res.data);
			//console.log('-------------res.data.item-------------');
			console.log(res.data.item);
			setBestBookInfo(res.data.item);
			console.log('axios success');
		})
		.catch(() => {
			console.log('failed....');
		})

		console.log(categoryId);
		console.log(openAPI);
	},[openAPI,categoryId])


  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link onClick={()=> { setOpenAPI('bestSeller'); setCategoryId('100'); }}>국내 Best30</Nav.Link>
            </Nav.Item>
			<Nav.Item>
              <Nav.Link onClick={()=> { setOpenAPI('recommend'); setCategoryId('100'); }}>국내 추천</Nav.Link>
            </Nav.Item>
			<Nav.Item>
              <Nav.Link onClick={()=> { setOpenAPI('newBook'); setCategoryId('100'); }}>국내 신작</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=> { setOpenAPI('bestSeller'); setCategoryId('200') }}>해외 Best30</Nav.Link>
            </Nav.Item>
			<Nav.Item>
              <Nav.Link onClick={()=> { setOpenAPI('recommend'); setCategoryId('200'); }}>해외 추천</Nav.Link>
            </Nav.Item>
			<Nav.Item>
              <Nav.Link onClick={()=> { setOpenAPI('newBook'); setCategoryId('200'); }}>해외 신작</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="container">
								<h2>hey</h2>
                <div className="row">
                  {bestBookInfo.length > 0
                    ? bestBookInfo.map((bestBookInfo, idx) => (
                        <div className="col-md-2" key={idx}>
                          <img alt="" src={bestBookInfo.coverLargeUrl} style={{ borderRadius:'10px' }}/>
                          <h6>제목 :{bestBookInfo.title}</h6>
                          <p>{bestBookInfo.author}</p>
                        </div>
                      ))
                    : null}
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

