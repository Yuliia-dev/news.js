import { NewsItem, NewsImg, NewsTitle, NewsDiscr } from './AllNews.styled';

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
          <NewsTitle>{item.title}</NewsTitle>
          <NewsDiscr>{item.description}</NewsDiscr>
        </NewsItem>
      ))}
    </>
  );
}
