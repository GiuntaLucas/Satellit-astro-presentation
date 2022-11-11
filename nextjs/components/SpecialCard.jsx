export default function SpecialCard(props) {
  return (
    <div className={props.cssClass}>
      <img
        src={props.link}
        className="img-fluid mx-auto d-block ls-is-cached"
        alt="placeholder image"
      />
      <h5 className="mg-md text-lg-center tc-dark-jungle-green h5-style">
        {props.title}
      </h5>
      <p className="text-lg-center big-p p-style mx-auto d-block">{props.description}</p>
    </div>
  );
}
