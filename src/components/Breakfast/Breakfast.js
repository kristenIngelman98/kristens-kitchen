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


// <div className="features__individual__parent">
// {FeatureData.map((featureDetail, index)=>{
//   return (
//     <div key={featureDetail.id} className="features__individual">
//       <img src={featureDetail.image} alt={featureDetail.alt}/>
//       <h2  className="features__name">{featureDetail.feature}</h2>
//       <p  className="features__description">{featureDetail.featureDescription}</p>
//   </div>
//   )}
// )}
// </div>