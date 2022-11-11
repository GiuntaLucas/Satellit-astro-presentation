import { query, collection, getDocs, getDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase";

import ApplyLayout from "../../layouts/ApplyLayout";
import Details from "../../components/Details";
import Responsabilities from "../../components/Responsabilities";
import NormalDay from "../../components/NormalDay";
import RightBanner from "../../components/RightBanner";
import Technologies from "../../components/Technologies";
export async function getStaticPaths() {
  const q = query(collection(firestore, "opportunities"));
  const opportunities = await getDocs(q);
  const data = opportunities.docs.map((x) => {
    return { id: x.id, ...x.data() };
  });
  return {
    paths: data.map((e) => {
      return { params: { id: e.id } };
    }),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const q = query(collection(firestore, "opportunities"));
  const opportunities = await getDocs(q);
  const data = opportunities.docs.map((x) => {
    return { id: x.id, ...x.data() };
  });

  return {
    props: { opportunity: data.find(x => x.id === context.params.id), opportunities: data },
  };
}

export default function Apply(props) {
  return (
    <ApplyLayout opportunities={props.opportunities} opportunity={props.opportunity}>
      <div className="container" style={{"display": "flex"}}>
        <div style={{"flex-grow": "99"}}>
            <Details description={props.opportunity.description}/>
            <Responsabilities responsabilities={props.opportunity.responsabilities}/>
            <NormalDay infos={props.opportunity.normalDay}/>
        </div>
        <div style={{"padding-top": "4.5em;", "padding-left": "5em;"}}>
            <RightBanner duration={props.opportunity.duration} experience={props.opportunity.experience} sector={props.opportunity.sector} startingFrom={props.opportunity.startingFrom}/>
        </div>
    </div>
    <Technologies technologies={props.opportunity.skills}/>
    </ApplyLayout>
  );
}
