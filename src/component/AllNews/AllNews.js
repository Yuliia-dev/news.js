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
              `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-4.jpg`
            }
            alt="Images"
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
