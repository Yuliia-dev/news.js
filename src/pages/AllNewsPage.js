import { useEffect, useState } from 'react';
import fetchNews from '../API/news-api';

const newsApi = new fetchNews();

function AllNewsPage() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    newsApi
      .allNews()
      .then(({ articles }) => {
        console.log(articles);
        setNews(articles);
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  }, []);
  //   newsApi.appleNews().then(data => console.log(data.articles));
  return (
    <>
      <ul>
        {news && news.map(item => <li key={item.title}>{item.title}</li>)}
      </ul>
    </>
  );
}

export default AllNewsPage;
