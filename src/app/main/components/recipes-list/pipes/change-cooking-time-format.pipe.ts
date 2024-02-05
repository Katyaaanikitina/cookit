import { Pipe, PipeTransform } from '@angular/core';
import { CookingTime } from 'src/interfaces/recipe';

@Pipe({
  name: 'changeCookingTimeFormat'
})
export class ChangeCookingTimeFormatPipe implements PipeTransform {

  transform(cookingTime: CookingTime): string {
    const hourOrHours = (cookingTime.hours > 1) ? 'Hours' : 'Hour';
    const isHours = (cookingTime.hours === 0) ? '' : `${cookingTime.hours} ${hourOrHours}`;
    return `${isHours} ${cookingTime.minutes} Minutes`
  }
}
