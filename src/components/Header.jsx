import React ,{useState}from 'react';
import { IoIosCart } from "react-icons/io";
function Header() {
  const [cartCount, setCartCount] = useState(0);
 

  // Function to add item to cart
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };


  
  return (

    <div className="flex justify-between">
    <div>
      <h1 className="text-2xl font-medium text-gray-500">UNI Resto Cafe</h1>
    </div>
    <div className="flex gap-x-4">
      <h1 className="text-gray-500">My Orders</h1>
      <div className="relative">
        <IoIosCart className="text-gray-600 w-10 h-6 cursor-pointer" onClick={addToCart} />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1  text-[10px]">
            {cartCount}
          </span>
        )}
      </div>
    </div>
  </div>
  )
}

export default Header