export default function Responsabilities(props) {
  return (
    <div>
      <p>
        <strong>Responsabilities</strong>
      </p>
      <ul>
        {props.responsabilities?.map((x) => (
          <li>
            <p>{x}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
