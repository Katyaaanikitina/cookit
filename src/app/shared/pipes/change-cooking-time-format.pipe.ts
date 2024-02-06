import { Pipe, PipeTransform } from '@angular/core';
import { CookingTime } from 'src/interfaces/recipe';

@Pipe({
  name: 'changeCookingTimeFormat'
})
export class ChangeCookingTimeFormatPipe implements PipeTransform {

  transform(cookingTime: CookingTime): string {
    const hourOrHours = (cookingTime.hours > 1) ? 'hours' : 'hour';
    const isHours = (cookingTime.hours === 0) ? '' : `${cookingTime.hours} ${hourOrHours}`;
    return `${isHours} ${cookingTime.minutes} min`
  }
}
