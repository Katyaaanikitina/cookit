import { Pipe, PipeTransform } from '@angular/core';
import { CookingTime } from 'src/interfaces/recipe';

@Pipe({
  name: 'changeCookingTimeFormat'
})
export class ChangeCookingTimeFormatPipe implements PipeTransform {

  transform(cookingTime: CookingTime): string {
    const prefix = (cookingTime.hours > 1) ? 'hours' : 'hour';
    const hours = (cookingTime.hours === 0) ? '' : `${cookingTime.hours} ${prefix}`;
    return `${hours} ${cookingTime.minutes} min`
  }
}
