import SpecialCard from '../components/SpecialCard';

export default function Special() {
  const cards = [
    {
      link: "https://www.satellit.be/img/noun-satelite-3849084.png",
      title: "Active founders",
      cssclassName: "col-md-4 wmus-boxes col-lg-4",
      description:
        "Our founders still get their hands dirty : following the project and training new recruits.",
    },
    {
      link: "https://www.satellit.be/img/noun-satelite-3851812.png",
      title: "Mentors",
      cssclassName: "col-md-4 wmus-boxes col-lg-4 wmus2",
      description:
        "A team of mentors meet the squads every week. To provide support on the personal and technical level.",
    },
    {
      link: "https://www.satellit.be/img/noun-astronomy-1275042.png",
      title: "Connected",
      cssclassName: "col-md-4 wmus-boxes col-lg-4",
      description:
        "Our squads are always connected to the base, never lost in space.",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className="mg-md h2-style text-lg-center tc-dark-jungle-green text-sm-center">
            What makes
            <br />
            us special.
            <br />
          </h2>
          <div className="green-line">
            <svg
              width="200"
              height="44"
              viewBox="0 0 212 14"
              version="1.1"
              fill="#2DCE94"
              stroke="rgba(0,0,0,0.0)"
              strokeLinecap="round"
              strokeWidth="0"
            >
              <defs>
                <linearGradient
                  x1="91.2099154%"
                  y1="52.4730393%"
                  x2="16.4955172%"
                  y2="49.1639271%"
                  id="linearGradient-3k851zev7c-1"
                >
                  <stop stopColor="#D9CF7D" offset="0%"></stop>
                  <stop stopColor="#CACD7D" offset="6.86964459%"></stop>
                  <stop stopColor="#00BA82" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  transform="translate(-668.000000, -744.000000)"
                  fill="url(#linearGradient-3k851zev7c-1)"
                >
                  <path
                    d="M841.549535,752.054288 C741.951859,748.433027 693.07392,756.50086 670.952735,757.995852 C668.248925,758.178431 667.989667,752.280659 667.999717,750.90559 C668.066545,742.22669 878.582564,742.367498 879.85432,747.7876 C880.337668,749.848519 879.651493,752.843891 877.296087,752.612804 C869.324511,751.830612 855.555202,752.054288 841.549535,752.054288 L982,806.957031"
                    id="Fill-1"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <p className="big-p text-lg-center mx-auto d-block small-center">
            We have a company with a special culture that makes people happy–our
            employees, our clients, and the people who use our solutions.
          </p>
          <p className="text-lg-center text-sm-center">
            <a
              className="ltc-dark-jungle-green black-link"
              href="training-center.html"
            >
              Discover our training center
            </a>
          </p>
        </div>
      </div>
      <div className="row">
        {cards.map((card) => (
          <SpecialCard
            cssClass={card.cssclassName}
            description={card.description}
            link={card.link}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
}
