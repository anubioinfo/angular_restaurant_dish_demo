import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  dishes = DISHES;

  @Input()
  selectedDish: Dish | undefined;
  
  constructor() { 
    console.log(this.selectedDish);
  }

  ngOnInit(): void {
  }

}
