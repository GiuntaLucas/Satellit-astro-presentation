<script>
  import { collection, where, query } from "firebase/firestore";
  import { firestore } from "../../firebase";
  import { collectionData } from "rxfire/firestore";
  import { startWith, tap } from "rxjs/operators";
import OpportunityCard from "./OpportunityCard.svelte";

  const opportunitiesQuery = query(collection(firestore, "opportunities"));

  const opportunities = collectionData(opportunitiesQuery, {idField: "id"}).pipe(
    tap(x => console.log(x)),
    startWith([])
  );
</script>

<div class="container bloc-lg bloc-sm-lg no-margin">
  <div class="row job-bloc">
    <div class="align-self-center col-lg-5 col-sm-12">
      <img
        src="https://www.satellit.be/img/shutterstock_1sat.png"
        class="img-fluid mx-auto d-block img-style ls-is-cached lazyloaded"
        alt="shutterstock_1470615119"
      />
    </div>
    <div class="col offset-lg-0">
      <h2 class="mg-md h2-style">Job offers</h2>
      <div class="white-line-smalll">
        <svg
          width="200"
          height="44"
          viewBox="0 0 236 31"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#2DCE94"
          stroke="rgba(0,0,0,0.0)"
          stroke-linecap="round"
          stroke-width="0"
        >
          <defs>
            <polygon
              id="path-bk7i-51qv3-1"
              points="-1.8189894e-12 0 235 0 235 22 -1.8189894e-12 22"
            />
            <linearGradient
              x1="125.828461%"
              y1="51.9318311%"
              x2="16.4955172%"
              y2="49.8177257%"
              id="linearGradient-bk7i-51qv3-3"
            >
              <stop stop-color="#D9CF7D" offset="0%" />
              <stop stop-color="#00BA82" offset="100%" />
            </linearGradient>
            <linearGradient
              x1="125.828461%"
              y1="51.9318311%"
              x2="16.4955172%"
              y2="49.8177257%"
              id="linearGradient-bk7i-51qv3-4"
            >
              <stop stop-color="#FFFFFF" offset="0%" />
              <stop stop-color="#FFFFFF" offset="100%" />
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
              id="Satellit---HP-V2---C-Copy-15"
              transform="translate(-550.000000, -393.000000)"
            >
              <g
                id="Group-3"
                transform="translate(668.003959, 408.114181) rotate(2.000000) translate(-668.003959, -408.114181) translate(550.503959, 397.114181)"
              >
                <mask id="mask-bk7i-51qv3-2" fill="white">
                  <use xlink:href="#path-bk7i-51qv3-1" />
                </mask>
                <g id="Clip-2" />
                <path
                  d="M3.58426166,21.959049 C20.9544821,16.3499066 38.7431713,13.9804678 56.3930881,12.0262648 C78.2287686,9.60924689 100.116623,8.40506332 121.998023,7.74674171 C142.624555,7.12561829 163.260769,7.05295204 183.888914,7.56853638 C197.788748,7.91629629 211.735915,8.2977941 225.6024,10.0115065 C227.387616,10.2321005 229.172832,10.4855673 230.948904,10.8575492 C231.547562,10.982985 232.145682,11.1291826 232.738423,11.3177688 C232.087591,11.111016 233.104718,11.4804028 233.34246,11.6508225 C234.418753,12.4224688 235.180925,10.9899056 234.962547,9.33328815 C234.682851,7.21039558 233.619467,5.61260316 232.43506,4.7631001 C230.108201,3.09350651 226.923428,3.20337096 224.439509,2.87377761 C218.846119,2.13154377 213.232828,1.74399044 207.625454,1.39623053 C189.887863,0.294990823 172.127681,0 154.378257,0 C111.98059,-0.000864621847 69.2999999,1.23792192 27.117484,8.61181611 C18.2860711,10.1551088 9.45949909,12.040971 0.746419247,14.854193 C-1.41262159,15.5514429 1.60272045,22.598339 3.58426166,21.959049"
                  id="Fill-1"
                  fill="url(#linearGradient-bk7i-51qv3-4)"
                  mask="url(#mask-bk7i-51qv3-2)"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <p
        class="big-p job-intro scroll-fx-in-fade scroll-fx-in-range"
        style="opacity: 2.16284;"
      >
        Discover our job opportunities. We are always looking for new profiles.
        Feel free to contact us spontaneously.
      </p>
      <div class="jobs-container">

            {#each $opportunities as opportunity}
                <OpportunityCard {...opportunity}/>
            {/each}

      </div>
    </div>
  </div>
</div>


<style>
  .mg-md {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .job-bloc {
    color: #ffffff !important;
    background-color: #000000;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 50px;
    margin-bottom: 0px;
    border-radius: 10px 10px 10px 10px;
  }
</style>
