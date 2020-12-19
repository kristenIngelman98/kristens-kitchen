import React from 'react';
import { DinnerData } from './data/DinnerData';

const Lunch = (props) => {
  return (
    <div className="">
    <h1>Dinner</h1>
    {DinnerData.map((recipeDetail, index)=>{
      return (
        <div>
          <img className="" src={recipeDetail.image} alt="member"/>
          <p className="">{recipeDetail.title}</p>
          <p className="">{recipeDetail.description}</p>
          <p className="">{recipeDetail.date}</p>
        </div>
      )
    })}
    </div>
  )
}
export default Lunch;