import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) groceryNameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) groceryAmountInput: ElementRef;
  @Output() shoppingListItemAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const inputName = this.groceryNameInput.nativeElement.value;
    const inputAmount = this.groceryAmountInput.nativeElement.value;
    const newIngredient = new Ingredient(inputName, inputAmount);
    this.shoppingListItemAdded.emit(newIngredient);
  }
}
