import React, { useEffect, useState } from "react";
import { dishesData } from "../service/api";
import Cards from "./Cards";

function Tabs() {
  const [activeButton, setActiveButton] = useState(0);
  const [cards, setCards] = useState([]);
  const [categoryBaseData, setCategoryBaseData] = useState([]);

  const handleClick = (category, index) => {
    setActiveButton(index);
    const categoryData = cards[0]?.table_menu_list?.find(
      (categoryData) => categoryData.menu_category === category
    );
    setCategoryBaseData(categoryData.category_dishes);
  };

  // fetching data
  useEffect(() => {
    const fetchCardsData = async () => {
      const data = await dishesData();
      setCards(data);
    };
    fetchCardsData();
  }, []);

  return (
    <>
      <div className="flex pt-4 relative items-center ">
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth "
        >
          {cards[0]?.table_menu_list?.map((dishCategories, index) => {
            const isActive = activeButton === index;
            const buttonClasses = `text-gray-400 inline-block font-bold border-b ${
              isActive ? "border-red-600 text-red-600" : "border-b-2"
            } cursor-pointer hover:scale-105 ease-in-out duration-300 w-36 mx-2 sm:mx-0 md:w-1/4`;
            return (
              <button
                className={buttonClasses}
                onClick={() =>
                  handleClick(dishCategories?.menu_category, index)
                }
                key={index}
              >
                {dishCategories?.menu_category}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <Cards dishes={categoryBaseData} />
      </div>
    </>
  );
}

export default Tabs;
