export default function Technologies(props) {
  return (
    <div className="container" style={{"padding-top": "2em;", "padding-bottom": "2em;"}}>
      <h3 className="mg-md float-title">Technologies</h3>
      <ul className="list-unstyled list-tech list-bloc-39-style" id="techno">
        {props.technologies?.map((technologie) => (
          <li className="tag-techno">
            <p className="mg-clear mx-auto d-block">{technologie}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
