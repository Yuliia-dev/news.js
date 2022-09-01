export default function AllNews({ news }) {
  return (
    <>
      {news?.map(item => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <img
            src={
              item.image.url ||
              `https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-4.jpg`
            }
            alt="Images"
          />
          <p>{item.description}</p>
        </li>
      ))}
    </>
  );
}
