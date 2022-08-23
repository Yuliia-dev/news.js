import fetchNews from '../API/news-api';

const newsApi = new fetchNews();

function NewsPage() {
  //   newsApi.appleNews().then(data => console.log(data.articles));
  return <div>Hello NewPage</div>;
}

export default NewsPage;
