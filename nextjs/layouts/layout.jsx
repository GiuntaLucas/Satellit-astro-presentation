import Navbar from "../components/Navbar";
import Head from "next/head";
import ScrollTop from "../components/ScrollTop";
export default function Layout({ children, props }) {
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
      {children}
      <ScrollTop/>
    </>
  );
}
