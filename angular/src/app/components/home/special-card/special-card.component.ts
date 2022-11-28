import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-card',
  templateUrl: './special-card.component.html',
  styleUrls: ['./special-card.component.scss']
})
export class SpecialCardComponent {
  @Input() link!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() cssClass!: string;
}
