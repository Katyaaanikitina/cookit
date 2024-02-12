import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rate',
  templateUrl: './stars-rate.component.html',
  styleUrls: ['./stars-rate.component.scss']
})
export class StarsRateComponent {
  @Input() rating!: number;
  starsArray!: string[];

  ngOnInit() {
    this.starsArray = this.createStarsArray(this.rating);
  }

  createStarsArray(rating: number) {
    const ratingVal = Math.min(Math.max(rating, 0), 5);

    const fullStarsNumber = Math.floor(ratingVal);
    const halfStarsNumber = Number.isInteger(ratingVal) ? 0 : 1;
    const emptyStarsNumber = 5 - fullStarsNumber - halfStarsNumber;
    return  [...Array(fullStarsNumber).fill('icon-star-full'),
             ...Array(halfStarsNumber).fill('icon-star-half'),
             ...Array(emptyStarsNumber).fill('icon-star-empty')];
  }
}
