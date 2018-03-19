import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './FindRecipe.css';
import ModuleTitle from '../../ModuleTitle/ModuleTitle';
import IngredientLine from '../../IngredientLine/IngredientLine';
import ButtonSearch from '../../ButtonSearch/ButtonSearch';
import {getRandomKey} from '../../../utils/functions';

class FindRecipe extends Component {

    constructor() {
        super();
        this.ingredient1 = '';
        this.ingredient2 = '';
        this.ingredient3 = '';
        this.state = {
            'urlParameters': null
        };
    }

    ingredientsSubmitHandler = evt => {
        evt.preventDefault();
        // Construction des paramètres de l'URL
        if(this.ingredient1.length > 2 || this.ingredient2.length > 2 || this.ingredient3.length > 2)
        {
            let ingredientUrlParams = [], paramsCounter = 1;
            if(this.ingredient1.length > 2) {
                ingredientUrlParams.push(`ingredient${paramsCounter}=${encodeURI(this.ingredient1)}`); paramsCounter++;
            }
            if(this.ingredient2.length > 2) {
                ingredientUrlParams.push(`ingredient${paramsCounter}=${encodeURI(this.ingredient2)}`); paramsCounter++;
            }
            if(this.ingredient3.length > 2) {
                ingredientUrlParams.push(`ingredient${paramsCounter}=${encodeURI(this.ingredient3)}`); paramsCounter++;
            }
            // Redirection vers la page des résultats de la recherche
            this.props.history.push({
                pathname: '/search',
                search: ingredientUrlParams.join('&')
            });
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

export default withRouter(FindRecipe);
