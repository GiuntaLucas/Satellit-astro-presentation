export default function TalkHeader() {
    return (
        <div className="container bloc-lg bloc-no-padding-lg no-margin">
            <div className="row green-box-about">
                <div className="align-self-center talk-content col-sm-11 col-lg-5">
                    <h4 className="mg-md h4-style tc-white white-script">
                        Next event to meet the troops
                    </h4>
                    <h2 className="mg-md h2-style h2-bloc-8-style text-left">
                        #Talk : Micro Frontend with module federation
                    </h2>
                    <p className="p-bloc-6-style mg-lg">
                        Module Federation allows loading Micro Frontends at runtime. Common dependencies like Angular or any library can be shared and hence don't need to be loaded several times. This is also the key for sharing data like the application state.
                    </p>
                </div>
                <div className="offset-lg-0 col-lg-7 col-sm-10 align-self-end">
                    <img src="https://www.satellit.be/img/satellit-peope-office-03.png" className="img-fluid mx-auto d-block img-bloc-6-style lazyloaded" alt="shutterstock_610931219"/>
                </div>
            </div>
        </div>
    )
}