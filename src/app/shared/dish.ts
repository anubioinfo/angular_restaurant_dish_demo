import { Comments } from './comment';

export class Dish {
    id: string = '';
    name: string = '';
    image: string = '';
    category: string = '';
    featured: boolean = false;
    label: string = '';
    price: string = '';
    description: string = '';
    comments: Comments[] = [];
}