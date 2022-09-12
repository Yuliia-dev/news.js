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
              `https://cdn.create.vista.com/api/media/small/233897000/stock-photo-top-view-wooden-cubes-word`
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
