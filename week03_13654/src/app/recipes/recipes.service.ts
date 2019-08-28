import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Nasi Goreng',
      imageUrl: "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg",
      ingredients: ['Lontong', 'Sawi', 'Bumbu kecap', 'Tauge']
    },
    {
      id: 'r2',
      title: 'Bihun Goreng',
      imageUrl: "https://cdn.sindonews.net/dyn/620/content/2018/06/23/185/1315663/sajian-praktis-bihun-goreng-yang-lezat-untuk-keluarga-eFb.jpg",
      ingredients: ['Beras', 'Air putih', 'Garam', 'Daun pandan']
    }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
