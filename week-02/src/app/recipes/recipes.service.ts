import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: '1',
      title: "Nasi Goreng",
      imageUrl: "https://mk0foodfornetcoviwv0.kinstacdn.com/wp-content/uploads/Nasi-Goreng-Final-1.jpg",
      ingredients: ['Nasi', 'Minyak']
    },
    {
      id: '2',
      title: "Bihun Goreng",
      imageUrl: "https://cdn.sindonews.net/dyn/620/content/2018/06/23/185/1315663/sajian-praktis-bihun-goreng-yang-lezat-untuk-keluarga-eFb.jpg",
      ingredients: ['Bihun']
    }
  ];

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: String) {
    return {
      ...this.recipes.find(recipe => recipe.id === recipeId)
    };
  }

  deleteRecipe(recipeId: String) {
    for(var i=0; i < this.recipes.length; i++) {
      if(this.recipes[i].id == recipeId){
        this.recipes.splice(i, 1);
      }
    }
  }
}
