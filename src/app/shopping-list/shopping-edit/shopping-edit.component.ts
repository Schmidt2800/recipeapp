import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) groceryNameInput: ElementRef;
  @ViewChild('amountInput', { static: true }) groceryAmountInput: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void { }
  onAddItem() {
    const inputName = this.groceryNameInput.nativeElement.value;
    const inputAmount = this.groceryAmountInput.nativeElement.value;
    const newIngredient = new Ingredient(inputName, inputAmount);
    this.slService.addIngredient(newIngredient);
  }
}
