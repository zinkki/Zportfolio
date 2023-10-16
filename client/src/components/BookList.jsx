import { useState, useEffect } from "react";
import axios from "axios";
import BookModal from "./BookModal";

export default function BookList() {
  const [modalShow, setModalShow] = useState(false);
  const [bookId, setBookId] = useState(0);
  const book_key = process.env.REACT_APP_BOOK_KEY;
  const URL = `api/bestSeller.api?key=${book_key}&categoryId=100&output=json`;
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
    },
  ]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setBookInfo(res.data.item);
        console.log(res.data.item);
        console.log("axios success!");
      })
      .catch(() => {
        console.log("failed....!");
      });
  }, []);

  return (
    <>
      {/* <!-- Section --> */}
      <section>
        <header className="">
          <h2>실시간 인터파크 베스트셀러</h2>
        </header>
        <div className="posts">
          {bookInfo.length > 0
            ? bookInfo.map((bookInfo, idx) => (
                <article key={idx}>
                  <a
                    onClick={() => {
                      setModalShow(true);
                      setBookId(idx);
                    }}
                    style={{ cursor: "pointer" }}
                    className="image"
                  >
                    <img src={bookInfo.coverLargeUrl} alt="" />
                  </a>
                  <h4>{bookInfo.title}</h4>
                  <p>{bookInfo.author}</p>
                  <ul className="actions">
                    <li>
                      <div
                        onClick={() => {
                          setModalShow(true);
                          setBookId(idx);
                        }}
                        className="button"
                      >
                        More
                      </div>
                    </li>
                  </ul>
                </article>
              ))
            : null}
          {modalShow === true ? (
            <BookModal
              bookId={bookId}
              bookinfo={bookInfo}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}
