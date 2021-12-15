import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
            [
                new Ingredient('Mel', 10),
                new Ingredient('Mælk', 1),
                new Ingredient('Æg', 5),
                new Ingredient('Oksekød', 500),
            ]
        ),
        new Recipe(
            'Pølsehorn',
            'Pølsehorn i butterdej',
            'https://cdn.pixabay.com/photo/2020/08/31/12/15/meal-5532302_960_720.jpg',
            [
                new Ingredient('Pølser', 10),
                new Ingredient('Butterdej', 1),
                new Ingredient('Ketchup', 1),
            ]
        ),
    ];
    constructor(private slService: ShoppingListService) { }
    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number): Recipe {
        return this.recipes.slice()[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}