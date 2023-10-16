import { useState, useEffect } from "react";
import axios from "axios";

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
    },
  ]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setBookInfo(res.data.item);
        console.log(res.data.item);
        console.log("axios success!");
      })
      .catch(() => console.log("failed...."));
  }, []);

  const alertList = (e, type) => {
    console.log(type);
    alert(type);
  };

  return (
    <>
      <section>
        <header className="major">
          <h2>
            BookCard.jsx(2023.03.23-페이징 하다말음 일있어서 잠깐
            미뤄둔다...2023-10-16 그렇게 영원히 미뤄짐..)
          </h2>
        </header>
        <div className="major">
          <ul>
            {bookInfo.length > 0
              ? bookInfo.map((bookInfo, idx) => (
                  <li
                    key={idx}
                    id="list_id"
                    onClick={(e) => {
                      alertList(e, bookInfo.title);
                    }}
                  >
                    {" "}
                    {bookInfo.title}{" "}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </section>
    </>
  );
}
