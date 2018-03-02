import React, {Component} from 'react';
import './FindRecipe.css';
import ModuleTitle from '../../ModuleTitle/ModuleTitle';
import IngredientLine from '../../IngredientLine/IngredientLine';
import ButtonSearch from '../../ButtonSearch/ButtonSearch';
import {getRandomKey} from '../../../utils/functions';

class FindRecipe extends Component {

    constructor() {
        super();
        this.ingredient1 = null;
        this.ingredient2 = null;
        this.ingredient3 = null;
    }

    ingredientsSubmitHandler = evt => {
        evt.preventDefault();
        // Construction des paramètres de l'URL
        if(this.ingredient1 !== null || this.ingredient2 !== null || this.ingredient3 !== null)
        {
            let ingredientUrlParams = '';
            if(this.ingredient1 !== null) ingredientUrlParams += '/'+encodeURI(this.ingredient1);
            if(this.ingredient2 !== null) ingredientUrlParams += '/'+encodeURI(this.ingredient2);
            if(this.ingredient3 !== null) ingredientUrlParams += '/'+encodeURI(this.ingredient3);
            console.log('URL parameters', ingredientUrlParams);
        }
    }

    render() {
        return (
            <div className="modules findRecipeContainer">
                <ModuleTitle title="Trouvez une recette" />
                <form className="findRecipeContent" onSubmit={this.ingredientsSubmitHandler}>
                    <IngredientLine randomKey={getRandomKey('ingredientLine')} getIngredient={ing => this.ingredient1 = ing} ingredientLineLabel="1er ingrédient" />
                    <IngredientLine randomKey={getRandomKey('ingredientLine')} getIngredient={ing => this.ingredient2 = ing} ingredientLineLabel="2e ingrédient" />
                    <IngredientLine randomKey={getRandomKey('ingredientLine')} getIngredient={ing => this.ingredient3 = ing} ingredientLineLabel="3e ingrédient" />
                    <ButtonSearch buttonText="ok" />
                </form>
            </div>
        );
    }

}

export default FindRecipe;
