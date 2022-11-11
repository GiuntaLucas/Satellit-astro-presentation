export default function RightBanner(props) {
  return (
    <div style={{"width": "200px"}}>
      <ul>
        {props.sector && (
          <li>
            <p id="sector">
              <strong>
                SECTOR
                <br />
              </strong>
              {props.sector}
            </p>
          </li>
        )}

        {props.experience && (
          <li>
            <p id="experience">
              <strong>
                EXPERIENCE
                <br />
              </strong>
              {props.experience}
            </p>
          </li>
        )}

        {props.startingFrom && (
          <li>
            <p id="fromto">
              <strong>
                STARTING FROM
                <br />
              </strong>
              {props.startingFrom}
            </p>
          </li>
        )}

        {props.duration && (
          <li>
            <p id="fromto">
              <strong>
                DURATION
                <br />
              </strong>
              {props.duration}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
