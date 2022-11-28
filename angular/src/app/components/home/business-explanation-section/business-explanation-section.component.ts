import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-business-explanation-section',
  templateUrl: './business-explanation-section.component.html',
  styleUrls: ['./business-explanation-section.component.scss']
})
export class BusinessExplanationSectionComponent {
  @Input() title!: string;
  @Input() description!: string;
}
