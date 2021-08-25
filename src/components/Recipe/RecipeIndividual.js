import React from 'react';
// import { LunchData } from '../Lunch/data/LunchData';

function RecipeIndividual(props) {
  const {id} = props.match.params;
  
  const recipeDetail = props.location.aboutProps;
  // console.log(props.match.params);
  console.log(props.location.aboutProps)

  return (
    <div>
    <h1>{id}</h1>
    <p className="recipe-title">{recipeDetail.title}</p>
    <img className="recipe-image" src={recipeDetail.image} alt="member"/>
    <p className="recipe-date">{recipeDetail.date}</p>
    <p className="recipe-description">{recipeDetail.description}</p>
    </div>
    
  )

}


export default RecipeIndividual;