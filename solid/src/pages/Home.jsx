import Header from '../components/Header';
import Special from '../components/Special';
import Banner from '../components/Banner';
import BusinessExplanation from '../components/BusinessExplanation';
import Opportunities from '../components/Opportunities';
import TalkHeader from '../components/TalkHeader';
import LetsTalk from '../components/LetsTalk';

export default function Home() {
  return (
    <>
      <Header />
      <Special />
      <Banner />
      <BusinessExplanation/>
      <Opportunities/>

      <TalkHeader/>
      <LetsTalk/>
    </>
  );
}
