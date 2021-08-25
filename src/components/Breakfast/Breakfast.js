import React from 'react';
import {Link} from 'react-router-dom';
import { BreakfastData } from './data/BreakfastData';

const Breakfast = (props) => {
  return (
      <div className="recipe-wrapper">
        <h1 className="h1-title">Breakfast</h1>
        {BreakfastData.map((recipeDetail, index)=>{
          return (
            <div className="">
              <p className="recipe-title">{recipeDetail.title}</p>
              <img className="recipe-image" src={recipeDetail.image} alt="member"/>
              <p className="recipe-date">{recipeDetail.date}</p>
              <p className="recipe-description">{recipeDetail.description}</p>
              <Link to={`/recipe-individual/${recipeDetail.id}`}><p>{recipeDetail.readMore}</p></Link>
              <Link to= {{
                pathname:`/recipe-individual/${recipeDetail.id}`,
                aboutProps: {
                  title: recipeDetail.title,
                  img: recipeDetail.image,
                  date: recipeDetail.date,
                  description: recipeDetail.description
                }

              }}><p>{recipeDetail.readMore}</p></Link>
            </div>
          )
        })}
      </div>
  )
}
export default Breakfast;