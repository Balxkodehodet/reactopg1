export default function KortComponent(props) {
  const propMeny = props.meny[0];
  return (
    <>
      <section className="matrett">
        <h2>Matrett: </h2>

        {propMeny.tittel}
        <br />
        <h3>Pris:</h3>
        {propMeny.pris}
        <br />
        <h3>Ingredienser:</h3>
        {propMeny.ingredienser}
        <br />
        <h3>Kategori:</h3>
        {propMeny.kategori}
        <br />
      </section>
    </>
  );
}
