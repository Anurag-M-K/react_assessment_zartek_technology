import React ,{useState}from 'react';
import { IoIosCart } from "react-icons/io";
import { IoMdArrowBack } from "react-icons/io";
function Header({totalCartCount}) {
  // const [cartCount, setCartCount] = useState(0);
 
  console.log("hello hello ",totalCartCount)

  // Function to add item to cart
 

  
  return (

    <div className="flex sm:justify-between justify-around   sm:mt-0 pt-5 border-t   ">
    <div className='flex text-xl font-medium text-gray-500'>
     <IoMdArrowBack className='sm:hidden me-5 mt-1'/> <h1 className="">UNI Resto Cafe</h1>
    </div>
    <div className="flex gap-x-4">
      <h1 className="text-gray-500">My Orders</h1>
      <div className="relative">
        <IoIosCart className="text-gray-600 w-10 h-6 cursor-pointer"  />
        {totalCartCount > -1 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1  text-[10px]">
            {totalCartCount}
          </span>
        )}
      </div>
    </div>
  </div>
  )
}

export default Header