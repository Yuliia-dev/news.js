import { useEffect, useState } from 'react';
import fetchNews from '../API/news-api';
import { Loader, AllNews } from '../component';

const newsApi = new fetchNews();

function AllNewsPage() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    newsApi
      .allNews()
      .then(({ value }) => {
        console.log(value);
        setLoading(true);
        setNews(value);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && !news && <Loader />}
      <ul>
        {news && <AllNews news={news} />}
        {/* {news && news?.map(item => <AllNews news={item} />)} */}
      </ul>
      {error && <p>You have some problem, pleas try letter</p>}
    </>
  );
}

export default AllNewsPage;
