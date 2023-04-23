import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const[filterBy,setFilterBy]=useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray=[...foods,newFood]
    setFoods(newFoodArray)
    // const newFoods=newFood.map((newFoo)=>
    // <li key={newFoo.id}>{newFoo.name}|Heat:{newFoo.heatLevel}|Cuisine: {newFoo.cuisine}</li>)
    // console.log(newFood);
    // setFoods(newFoods)
  }
  function handleClick(id){
    //const newFoodArray = foods.filter((food)=>food.id!==id)
    const newFoodArray=foods.map((food)=>{
    if(food.id===id){
      return{...food,heatLevel:food.heatLevel+1}
    }
    else{return food}
  })
  console.log(newFoodArray)
    setFoods(newFoodArray)
  }
  function handleFilterChange(e){
    setFilterBy(e.target.value)
  }
  const foodsToDisplay=foods.filter((food)=>{
  if(filterBy==="All"){
    return true;
  }else{return food.cuisine===filterBy} 
  })
  // const foodList = foods.map((food) => (
  //   <li onClick={()=>handleClick(food.id)} key={food.id}>
  //     {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
  //   </li>
  // )
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  



  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
  <option value="All">All</option>
  <option value="American">American</option>
  <option value="Sichuan">Sichuan</option>
  <option value="Thai">Thai</option>
  <option value="Mexican">Mexican</option>
</select>
    </div>
  );
}

export default SpicyFoodList;
