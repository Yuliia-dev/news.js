import {
  NewsItem,
  NewsImg,
  NewsTitle,
  NewsDiscr,
  NewsWrap,
} from './AllNews.styled';

export default function AllNews({ news }) {
  return (
    <>
      {news?.map(item => (
        <NewsItem key={item.id}>
          <NewsImg
            src={
              item.image.url ||
              `https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=675%2Cmetadata=none%2Conerror=redirect%2Cq=85%2Cwidth=1200/wp-content/uploads/no-news-is-good-news-day1.jpg`
            }
            alt={item.provider.name}
          />
          <NewsWrap>
            <NewsTitle>{item.title}</NewsTitle>
            <NewsDiscr>{item.description}</NewsDiscr>
          </NewsWrap>
        </NewsItem>
      ))}
    </>
  );
}
