import React, {Component} from 'react';
import './FindRecipe.css';
import ModuleTitle from '../../Components/ModuleTitle/ModuleTitle';
import IngredientLine from '../../Components/IngredientLine/IngredientLine';
import ButtonSearch from '../../Components/ButtonSearch/ButtonSearch';
import {getRandomKey} from '../../utils/functions';

class FindRecipe extends Component {

    state = {
        'ingredientTags': null
    };

    componentDidMount() {
        console.log("componentDidMount");
    }

    ingredientsSubmitHandler = evt => {
        evt.preventDefault();
    }

    render() {
        return (
            <div className="modules findRecipeContainer">
                <ModuleTitle title="Trouvez une recette" />
                <form className="findRecipeContent" onSubmit={this.ingredientsSubmitHandler}>
                    <IngredientLine randomKey={getRandomKey('ingredientLine')} ingredientLineLabel="1er ingrédient" />
                    <IngredientLine randomKey={getRandomKey('ingredientLine')} ingredientLineLabel="2e ingrédient" />
                    <IngredientLine randomKey={getRandomKey('ingredientLine')} ingredientLineLabel="3e ingrédient" />
                    <ButtonSearch buttonText="ok" />
                </form>
            </div>
        );
    }

}

export default FindRecipe;
