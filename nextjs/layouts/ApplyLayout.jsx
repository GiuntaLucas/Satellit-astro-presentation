import Navbar from "../components/Navbar";
import Head from "next/head";
import ScrollTop from "../components/ScrollTop";
import Opportunities from "../components/Opportunities";
import Header from "../components/ApplyLayout/Header";
export default function Layout({ children, opportunity, opportunities }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=swap&subset=latin,latin-ext"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <Navbar />
      <Header name={opportunity.name} location={opportunity.location} />
      <div className="applyLayout">
        {children}
        <div className="container">
          <h3 className="mg-md float-title">Contact details</h3>
          <ul className="list-style">
            <li>
              <p className="p-90-style" id="contact">
                <strong>
                  Lara Safi
                  <br />
                </strong>
                <a href="mailto:Jean.duterme@satellit.be">
                  lara.safi@satellit.be
                </a>
                <br />
              </p>
            </li>
            <li>
              <p className="p-90-style">
                <strong>
                  Mohamed Elakkari
                  <br />
                </strong>
                <a href="mailto:mohamed.elakkari@satellit.be">
                  mohamed.elakkari@satellit.be
                </a>
                <br />
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Opportunities opportunities={opportunities} />
      </div>
      <ScrollTop />
    </>
  );
}
