import { NewsItem, NewsImg, NewsTitle, NewsDiscr } from './AllNews.styled';

export default function AllNews({ news }) {
  return (
    <>
      {news?.map(item => (
        <NewsItem key={item.id}>
          <NewsTitle>{item.title}</NewsTitle>
          <NewsImg
            src={
              item.image.url ||
              `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-4.jpg`
            }
            alt="Images"
          />
          <NewsDiscr>{item.description}</NewsDiscr>
        </NewsItem>
      ))}
    </>
  );
}
