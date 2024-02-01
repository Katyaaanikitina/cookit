import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-h2',
  templateUrl: './title-h2.component.html',
  styleUrls: ['./title-h2.component.scss']
})
export class TitleH2Component {
  @Input() titleText!: string;
}
