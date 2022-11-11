import Layout from '../layouts/layout';
import Header from '../components/Header';
import Special from '../components/Special';
import Banner from '../components/Banner';
import BusinessExplanation from '../components/BusinessExplanation';
import Opportunities from '../components/Opportunities';
import TalkHeader from '../components/TalkHeader';
import LetsTalk from '../components/LetsTalk';

import { query, collection, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";

export async function getStaticProps(context) {
  const q = query(collection(firestore, "opportunities"));
  const docs = await getDocs(q);
  const opportunities = docs.docs?.map((e) => {
    return { id: e.id, ...e.data() };
  });
  return {
    props: {opportunities},
  }
}

export default function Home(props) {
  return (
    <Layout>
      <Header/>
      <Special/>
      <Banner/>
      <BusinessExplanation/>
      <Opportunities opportunities={props.opportunities}/>
      <TalkHeader/>
      <LetsTalk/>
    </Layout>
  )
}
