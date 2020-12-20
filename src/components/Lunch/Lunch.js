import React from 'react';
import { LunchData } from './data/LunchData';

const Lunch = (props) => {
  return (
    <div className="">
    <h1 className="h1-title">Lunch</h1>
    {LunchData.map((recipeDetail, index)=>{
      return (
        <div className="recipe-wrapper">
          <p className="recipe-title">{recipeDetail.title}</p>
          <img className="recipe-image" src={recipeDetail.image} alt="member"/>
          <p className="recipe-date">{recipeDetail.date}</p>
          <p className="recipe-description">{recipeDetail.description}</p>
          
        </div>
      )
    })}
    </div>
  )
}
export default Lunch;