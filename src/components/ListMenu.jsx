export default function ListMenu(props) {
  return (
    <>
      <h2>Middags retter</h2>
      <ul className="listMenu">
        {props.meny.map((rett) => (
          <li key={rett.id}>
            {rett.tittel} pris: {rett.pris}
          </li>
        ))}
      </ul>
    </>
  );
}
