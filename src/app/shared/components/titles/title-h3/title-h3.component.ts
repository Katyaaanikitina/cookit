import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-h3',
  templateUrl: './title-h3.component.html',
  styleUrls: ['./title-h3.component.scss']
})
export class TitleH3Component {
  @Input() titleText!: string;
}
