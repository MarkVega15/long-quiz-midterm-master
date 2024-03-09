import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  newIngredientName: string = '';
  newIngredientAmount: number = 0;

  @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  @Output() clearItems = new EventEmitter<void>(); // Emit event to clear items

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.ingredientAdded.emit({name: this.newIngredientName, amount: this.newIngredientAmount});
    this.newIngredientName = '';
    this.newIngredientAmount = 0;
  }

  onDeleteItem() {
    // Your deleteItem method here
  }

  onClear() {
    this.ingredients = [];
    this.clearItems.emit(); // Emit clearItems event
  }
}
