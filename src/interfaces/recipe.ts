export type Categories = 'dinner' | 'breakfast' | 'lunch' | 'dessert' | 'snack'
                        | 'drinks' | 'soup' | 'mainCourse';

export interface CookingTime {
  hours: number;
  minutes: number;
}

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: string;
  author: string;
  categories: Categories[];
  cookingTime: CookingTime;
  date: string;
  description: string;
  ingredients: Ingredient[];
  isVegan: boolean;
  picture: string;
  portionsNumber: number;
  rating: number;
  steps: string[];
  title: string;
}
