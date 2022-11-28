import { Component } from '@angular/core';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.scss']
})
export class SpecialComponent {
  cards: any[] = [
    {
      link: "https://www.satellit.be/img/noun-satelite-3849084.png",
      title: "Active founders",
      cssClass: ' wmus-boxes',
      description: "Our founders still get their hands dirty : following the project and training new recruits.",
    },
    {
      link: "https://www.satellit.be/img/noun-satelite-3851812.png",
      title: "Mentors",
      cssClass: 'wmus-boxes wmus2',
      description: "A team of mentors meet the squads every week. To provide support on the personal and technical level.",
    },
    {
      link: "https://www.satellit.be/img/noun-astronomy-1275042.png",
      title: "Connected",
      cssClass: 'wmus-boxes',
      description: "Our squads are always connected to the base, never lost in space.",
    },
  ];
}
