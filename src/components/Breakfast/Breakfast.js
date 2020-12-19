import React from 'react';
import { BreakfastData } from './data/BreakfastData';

const Breakfast = (props) => {
  return (
    <div className="">
    <h1>Breakfast</h1>
    {BreakfastData.map((recipeDetail, index)=>{
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
export default Breakfast;