class Recipe {
    constructor (name, meal){
        this.name = name; // recipe name
        this.meal = meal;// name of the recipes intended meal - not sure if this is the best wording.
    }

    describeRecipe() {
        console.log( `This recipe is called ${this.name} and is best served as an ${this.meal}`);
    }
}

class AllRecipes {
    constructor (name){
        this.name = name; // name of the recipe. using this.name for both classes kinda confused me.
        this.recipeBook = []; // empty array that will populate recipes 
    }
    addRecipe(recipe){
       if(recipe instanceof Recipe){// created a method that declares if a recipe is a instance of Recipe then add to the array.
           this.recipe.push(recipe);
        }else{ // otherwise throe an error
            throw new Error(`Sorry you can only add a instance of a recipe. Argument is not a recipe: ${recipe}`);
         }
     }
     describe(){
       return( `${this.name} has ${this.recipes.length} recipes.`)

    }
 }

class Menu {
    constructor(){
        this.allRecipes = []; // array of recipes that the user creates.
        this.selectedRecipe = null; // set selectedRecipe to null because there is nothing selected.
    }
    start(){
        let selection = this.showMainMenuOptions();// allows us to choose menu options.
        while (selection != 0){
            console.log(selection);
            switch(selection) {
                case '1':
                    this.createRecipe();
                    break;
                case '2':
                    this.viewRecipe();
                    break;
                case '3':
                    this.deleteRecipe();
                    break;
                case '4':
                    this.displayRecipes();
                    break;
                default:
                    selection = 0;
        }
        selection = this.showMainMenuOptions()
      }
      alert("See you next time!") // default alert for if the user picks 0
    }

    showMainMenuOptions(){ // this is the user prompts
        return prompt(`
        0) Exit
        1) Create new recipe
        2) View recipe
        3) Delete recipe
        4) Display all recipes
        `);
    }
    showRecipeMenuOptions(recipeInfo){ // this is what the user sees when they view recipe and want to add ingredient.
        return prompt (`
        0)back
        1)add ingredient
        2)delete ingredient
        ---------------
        ${recipeInfo}
        `);

    }
    displayRecipes(){  // display recipes method
        let recipeString = '';// blank string to allow user to build with inputs.
        for (let i = 0; i < this.allRecipes.length; i++) { // iterates through all of the recipes
            recipeString += i + ')' + this.allRecipes[i].name + '\n'; // show recipes created
        }
        alert(recipeString);
    }
    createRecipe() { // method for user to create recipe
        let name = prompt('Enter Recipe Name for new recipe:');// prompt to tell user to enter new recipe
        this.allRecipes.push(new AllRecipes(name)); // pushes new recipe to allRecipe array
        console.log(this.allRecipes);
    }

    viewRecipe() {
        let index = prompt('enter the index of the recipe you wish to view:');
        if (index > -1 && index < this.allRecipes.length){// if index is greater than -1 & index is less than number of recipes then do one of the prompts.
             this.selectedRecipe = this.allRecipes[index];// this allows the user to enter the index of the recipe they would like to see
             console.log(this.selectedRecipe.recipeBook);
            let description = "Recipe Name: " + this.selectedRecipe.name + '\n';
console.log(this.selectedRecipes);
            for (let i =0; i < this.selectedRecipe.recipeBook.length; i++){//lets users interact with ingredients in selected recipe
                description += i + ')' + this.selectedRecipe.recipeBook[i].name  + '\n'
            }
            let selection = this.showRecipeMenuOptions(description);// pass in above description to show recipe and all options for the recipe. ie. add ingredient
            switch(selection){// creates new submenu to add ingredient
                case '1':
                    this.createARecipe();
                    break;
                case '2':
                    this.deleteARecipe();
            }
    }
    }


    deleteRecipe (){// method to delete recipe
        let index = prompt('enter the index of the recipe you wish to delete');
        if (index > -1 && index < this.allRecipes.length){// iterates through the recipes
            this.allRecipes.splice(index, 1)// .splice allows the user to delete the recipe in their chosen index.
        }
    }

    createARecipe(){//method to create recipe
        let name = prompt('enter name for new ingredient');
        console.log(this.selectedRecipe);

        this.selectedRecipe.recipeBook.push(new Recipe(name));//this allows the user to add a recipe to the recipe book array
    
    }

    deleteARecipe(){// method to delete a recipe
        let index = prompt ('enter the index of the recipe you want to delete');
        if (index > -1 && index < this.selectedRecipe.recipeBook.length) {
            this.selectedRecipe.recipeBook.splice(index, 1);// allows the user to delete the recipe that they select with index
        }
    }
}


let menu = new Menu();
menu.start(); // calls on menu application
