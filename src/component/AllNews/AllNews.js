export default function AllNews({ news }) {
  return (
    <>
      {news?.map(item => (
        <li key={item.title}>
          <h2>{item.title}</h2>
          <img src={item.urlToImage} alt="Images" />
          <p>{item.description}</p>
        </li>
      ))}
    </>
  );
}
