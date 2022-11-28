import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss'],
})
export class ScrollTopComponent implements OnInit {
  show: boolean = false;
  ngOnInit(): void {
    window.onscroll = () => {
      this.show = window.scrollY > 0;
    };
  }

  handleAnchorClick(event: any) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
