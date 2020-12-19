import React from 'react';
import { LunchData } from './data/LunchData';

const Lunch = (props) => {
  return (
    <div className="">
    <h1 className="h1-title">Lunch</h1>
    {LunchData.map((recipeDetail, index)=>{
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