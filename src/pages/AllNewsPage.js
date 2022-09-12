import { useEffect, useState } from 'react';
import fetchNews from '../API/news-api';
import { Loader, AllNews } from '../component';
import { NewsList } from './AllNewsPage.styled';
import SelectQuantityPage from '../component/SelectQuantityPage/SelectQuantityPage';

const newsApi = new fetchNews();

function AllNewsPage() {
  const [news, setNews] = useState(null);
  const [pageSize, setPageSize] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (pageSize) {
      newsApi.pageSize = pageSize;
    }
    newsApi
      .allNews()
      .then(({ value }) => {
        setLoading(true);
        setNews(value);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [pageSize]);
  return (
    <>
      <SelectQuantityPage pageSize={setPageSize} />
      {loading && !news && <Loader />}

      <NewsList>{news && <AllNews news={news} />}</NewsList>

      {error && <p>You have some problem, pleas try letter</p>}
    </>
  );
}

export default AllNewsPage;
