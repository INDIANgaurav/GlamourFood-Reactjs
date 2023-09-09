import React, { useState } from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  const handleToast = () => toast.success("item added to cart ");
  const filterFood = FoodData.filter((food) => {
    // console.log(" 1 category=",category)
    // console.log( " 2 food category=" , food.category)
    // console.log( " food name=" , food.name.toLowerCase().includes(search.toLowerCase()))
    if (category === "All") {
      return food.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return (
        category === food.category &&
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {filterFood.length === 0 ? (
          <h1 className=" text-center mt-10     text-5xl     font-bold ">
            not available right now
          </h1>
        ) : (
          filterFood.map((food) => (
            <FoodCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          ))
        )}
      </div>
    </>
  );
};

export default FoodItems;
