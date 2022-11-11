export default function Header(props) {
    
  return (
    <div class="container bloc-lg bloc-no-padding-lg no-bottom">
        <div class="row header-box-jobs">
            <div class="align-self-center col-lg-5 col-sm-11 header-content">
                <h4 class="mg-md h4-style breadcrumb-light">
                    Jobs
                </h4>
                <p class="location" id="location">
                {props.location}</p>
                <h1 class="mg-md h1-style" id="job-title">{props.name}</h1>
                <p class="mg-lg big-p p-bloc-3-style" id="short-descr">
                    If you are the right combination of curious and smart feel free to reach to us. Also check our other open position or send us you CV spontaneously.<br/>
                </p><a href="#"><img src="https://www.satellit.be/img/Group-18.png"  class="img-fluid float-lg-none d-sm-block d-none ls-is-cached lazyloaded" alt="Group%2018"/></a>
            </div>
            <div class="offset-lg-0 col-lg-7 col-sm-10 d-sm-block d-none align-self-start">
                <img src="https://www.satellit.be/img/satellit-header-5.png "  class="img-fluid mx-auto d-block img-header-top ls-is-cached lazyloaded" alt="shutterstock_610931219"/>
                <img src="img/lazyload-ph.png" data-src="img/satellit-header-5-2.png" class="img-fluid mx-auto img-header-top d-lg-none d-xl-none d-block lazyload" alt="satellit header-5-2"/>
            </div>
        </div>
    </div>
  )
}