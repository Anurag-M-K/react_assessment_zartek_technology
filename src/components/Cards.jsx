import React, { useState } from "react";

function Cards({ dishes }) {
  const [counts, setCounts] = useState(
    dishes?.length ? Array(dishes.length).fill(0) : []
  );

  //adding to cartcount functions
  const handleIncrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  //removing from cart  functions
  const handleDecrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 0) {
        newCounts[index] -= 1;
      }
      const totalCount = newCounts.reduce((acc, cur) => acc + cur, 0);
      return newCounts;
    });
  };

  return (
    <>
      {dishes?.map((dish, index) => {
        return (
          <>
            <div key={index} className="grid grid-cols-2 grid-flow-col    ">
              <div className="flex  ">
                <div
                  className={`border mt-2 ${
                    dish?.dish_Type === 1
                      ? "border-red-400"
                      : "border-green-400"
                  } h-4 w-4 flex items-center justify-center`}
                >
                  <div
                    className={`h-3 w-3 ${
                      dish?.dish_Type === 1 ? "bg-red-600" : "bg-green-600"
                    } rounded-full`}
                  ></div>
                </div>

                <div className="ms-2">
                  <h1 className="font-bold   tracking-wider py-1">
                    {dish?.dish_name}
                  </h1>
                  <h2 className="font-medium text-sm py-1">
                    {dish?.dish_currency + " " + dish?.dish_price}
                  </h2>
                  <p className="text-gray-400   py-1">
                    {dish?.dish_description}
                  </p>
                  {dish?.dish_Availability ? (
                    <div className="bg-green-600  sm:mt-3 mt-3 hover:bg-green-500 ease-in-out duration-300  w-28 rounded-full flex justify-around text-white">
                      <button onClick={() => handleDecrement(index)}>-</button>

                      <h2> {counts[index]}</h2>
                      <button onClick={() => handleIncrement(index)}>+</button>
                    </div>
                  ) : (
                    <p className="text-red-500 font-medium">Not available</p>
                  )}
                  {dish?.addonCat.length > 0 && (
                    <p className="text-red-500 font-medium">
                      Customization available
                    </p>
                  )}
                </div>
              </div>

              <div className="flex sm:items-start justify-end items-start sm:gap-x-20  md:col-span-2 ">
                <div className="  pb-4 sm:pe-2 flex overflow-hidden  ">
                  <h2 className="font-bold text-sm   flex justify-center items-center sm:me-20 me-10 ">
                    {dish?.dish_calories} Calories
                  </h2>
                  {console.log(dish?.dish_image)}
                  <img
                    src={dish?.dish_image}
                    className="cursor-pointer hover:scale-105 ease-in-out sm:mt-1 mt-4 border duration-300 object-fit w-24 h-24 sm:rounded-xl rounded sm:w-28 sm:h-28"
                    alt="dishes"
                  />
                </div>
              </div>
            </div>
            <hr class="border-t-2 border-gray-400 border-opacity-50 my-1" />
          </>
        );
      })}
    </>
  );
}

export default Cards;
