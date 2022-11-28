import { Component, OnInit } from '@angular/core';
import { query, collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {
  opportunities: any[] = [];
  async ngOnInit(): Promise<void> {
    const firebaseConfig = {
      apiKey: "AIzaSyAg2DPjsYav1HABzsyTIJhrknOx5vtVKQI",
      authDomain: "astro-satellit.firebaseapp.com",
      projectId: "astro-satellit",
      storageBucket: "astro-satellit.appspot.com",
      messagingSenderId: "370897019238",
      appId: "1:370897019238:web:754830793122176ad428a7",
      measurementId: "G-Q04D6HY1CX"
    };
    const app = initializeApp(firebaseConfig);

    const q = query(collection(getFirestore(app), "opportunities"));
    const docs = await getDocs(q);
    this.opportunities = docs.docs?.map((e) => {
      return { id: e.id, ...(e.data()) };
    });
  }

}
