  import React, { useState } from "react";

  function Cards({ dishes }) {
    const [counts, setCounts] = useState(dishes?.length ? Array(dishes.length).fill(0) : []);

    const handleIncrement = (index) => {
      console.log(index)
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        newCounts[index] += 1;
        return newCounts;
      });
    };

    const handleDecrement = (index) => {
      setCounts((prevCounts) => {
        const newCounts = [...prevCounts];
        if (newCounts[index] > 0) {
          newCounts[index] -= 1;
        }
        return newCounts;
      });
    };

    return (
      <>
        {dishes?.map((dish, index) => {
          return (
            <>
              <div key={index} className="flex justify-between">
                <div className="flex  ">
                  <div className=" border mt-2 border-red-400 h-5 w-5 flex items-center justify-center">
                    <div className="h-3 w-3 bg-red-600 rounded-full"></div>
                  </div>
                  <div className="ms-2">
                    <h1 className="font-bold   tracking-wider py-1">
                      {dish?.dish_name}
                    </h1>
                    <h2 className="font-medium text-sm py-1">
                      {dish?.dish_currency + " " + dish?.dish_price}
                    </h2>
                    <p className="text-gray-400 font-medium  py-1">
                      {dish?.dish_description}
                    </p>
                  {
                    dish?.dish_Availability  ? (
     
                    <div className="bg-green-600  sm:mt-3 mt-3  w-28 rounded-full flex justify-around text-white">
                      <button onClick={() => handleDecrement(index)}>-</button>
                      
                      <h2> {counts[index]}</h2>
                      <button onClick={() => handleIncrement(index)}>+</button>
                    </div>
                       ) : <p className="text-red-500 font-medium">Not available</p> }
                    {dish?.addonCat.length > 0 && (
                      <p className="text-red-500 font-medium">
                        Customization available
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex sm:items-center items-start sm:gap-x-20 ">
                  <div className="  pt-1 pb-4 sm:pe-2 flex overflow-hidden ">
                    <h2 className="font-bold text-sm  flex justify-center items-center sm:me-20  ">
                    {dish?.dish_calories} Calories
                    </h2>
                    {console.log(dish?.dish_image)}
                    <img
                    
                      src={dish?.dish_image}
                      className=" h-auto sm:rounded-xl rounded sm:w-28 sm:h-28 border border-green-600"
                      alt="dishes"
                    />
                    </div>
                </div>
              </div>
              <hr class="border-t-2 border-gray-400 border-opacity-50 my-4"/>

            </>
          );
        })}
      </>
    );
  }

  export default Cards;
