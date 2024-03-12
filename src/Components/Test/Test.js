function Item({ name }) {
  return <li className="item">{name}</li>;
}

export default function Test() {
  return (
    <section>
      <h1>Scakkt Ride's packing list</h1>
      <ul>
        <Cup guest={1} />
        <Item name={0} />
      </ul>
    </section>
  );
}
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}
