<script>
  const cards = [
    {
      link: "https://www.satellit.be/img/noun-satelite-3849084.png",
      title: "Active founders",
      cssClass: "col-md-4 col-lg-4 wmus-boxes",
      description:
        "Our founders still get their hands dirty : following the project and training new recruits.",
    },
    {
      link: "https://www.satellit.be/img/noun-satelite-3851812.png",
      title: "Mentors",
      cssClass: "col-md-4 col-lg-4 wmus-boxes wmus2",
      description:
        "A team of mentors meet the squads every week. To provide support on the personal and technical level.",
    },
    {
      link: "https://www.satellit.be/img/noun-astronomy-1275042.png",
      title: "Connected",
      cssClass: "col-md-4 col-lg-4 wmus-boxes",
      description:
        "Our squads are always connected to the base, never lost in space.",
    },
  ];
</script>

<div class="container">
  <div class="row">
    <div class="col">
      <h2
        class="mg-md h2-style text-lg-center tc-dark-jungle-green text-sm-center"
      >
        What makes<br />us special.<br />
      </h2>
      <div class="green-line">
        <svg
          width="200"
          height="44"
          viewBox="0 0 212 14"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#2DCE94"
          stroke="rgba(0,0,0,0.0)"
          stroke-linecap="round"
          stroke-width="0"
        >
          <defs>
            <linearGradient
              x1="91.2099154%"
              y1="52.4730393%"
              x2="16.4955172%"
              y2="49.1639271%"
              id="linearGradient-3k851zev7c-1"
            >
              <stop stop-color="#D9CF7D" offset="0%" />
              <stop stop-color="#CACD7D" offset="6.86964459%" />
              <stop stop-color="#00BA82" offset="100%" />
            </linearGradient>
          </defs>
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              transform="translate(-668.000000, -744.000000)"
              fill="url(#linearGradient-3k851zev7c-1)"
            >
              <path
                d="M841.549535,752.054288 C741.951859,748.433027 693.07392,756.50086 670.952735,757.995852 C668.248925,758.178431 667.989667,752.280659 667.999717,750.90559 C668.066545,742.22669 878.582564,742.367498 879.85432,747.7876 C880.337668,749.848519 879.651493,752.843891 877.296087,752.612804 C869.324511,751.830612 855.555202,752.054288 841.549535,752.054288 L982,806.957031"
                id="Fill-1"
              />
            </g>
          </g>
        </svg>
      </div>
      <p class="big-p text-lg-center mx-auto d-block small-center">
        We have a company with a special culture that makes people happy–our
        employees, our clients, and the people who use our solutions.
      </p>
      <p class="text-lg-center text-sm-center">
        <a class="ltc-dark-jungle-green black-link" href="training-center.html"
          >Discover our training center</a
        >
      </p>
    </div>
  </div>
  <div class="row">
    {#each cards as card}
      <div class={card.cssClass}>
        <img
          src={card.link}
          class="img-fluid mx-auto d-block ls-is-cached"
          alt="placeholder image"
        />
        <h5 class="mg-md text-lg-center tc-dark-jungle-green h5-style">
          {card.title}
        </h5>
        <p class="text-lg-center big-p p-style mx-auto d-block">
          {card.description}
        </p>
      </div>
    {/each}
  </div>
</div>

<style>
  .black-link {
    color: #1a191d !important;
    font-weight: 700;
    font-size: 21px;
    line-height: 75px;
    background-repeat: no-repeat;
    background-position: right center;
    z-index: 30;
    padding-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
  }
  .small-center {
    width: 45%;
    text-align: center;
  }
  .big-p {
    font-size: 21px;
    line-height: 30px;
    margin-top: 25px;
  }
  .tc-dark-jungle-green {
    color: #1a191d !important;
  }
  .mg-md {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .wmus2 {
    margin-top: 40px!important;
  }
  .wmus-boxes {
    height: fit-content;
    box-shadow: 5px 4px 25px #c5c5c5;
    display: block;
    position: relative;
    max-width: 30%;
    background-color: #ffffff;
    margin: 0px 1% 0px 1%;
    padding: 60px 2px 60px 2px;
    border-radius: 10px 10px 10px 10px;
  }
  .wmus-boxes::before {
    background-clip: padding-box;
    box-sizing: content-box;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    content: "";
    background-image: linear-gradient(to left, #00ba82, #6f7cff);
    padding: 2px;
    border: 2px;
    top: -2px;
    left: -2px;
    position: absolute;
    z-index: -1;
  }
  .tc-dark-jungle-green {
    color: #1a191d !important;
  }
  .h5-style {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    padding: 20px 10px 20px 10px;
  }
  .mg-md {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .p-style {
    width: 91.67%;
    padding-right: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-left: 0px;
  }
  .big-p {
    font-size: 21px;
    line-height: 30px;
    width: 80.23%;
    margin-top: 25px;
  }
</style>
