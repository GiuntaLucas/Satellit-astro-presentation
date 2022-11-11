export default function NormalDay(props) {
  return (
    <div>
      <p>
        <strong>Typical day</strong>
      </p>
      <ul>
        {props.infos?.map((x) => (
          <li>
            <p>{x}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
