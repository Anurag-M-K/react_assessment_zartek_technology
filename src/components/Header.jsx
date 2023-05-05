import React, { useState } from 'react';
import { IoIosCart } from 'react-icons/io';
import { IoMdArrowBack } from 'react-icons/io';

function Header() {
  const [totalCartCount, setTotalCartCount] = useState(0);

  const incrementCartCount = () => {
    setTotalCartCount(totalCartCount + 1);
  };

  const decrementCartCount = () => {
    if (totalCartCount > 0) {
      setTotalCartCount(totalCartCount - 1);
    }
  };

  return (
    <div className="flex sm:justify-between justify-around sm:mt-0 pt-5 border-t">
      <div className="flex text-xl font-medium text-gray-500">
        <IoMdArrowBack className="sm:hidden me-5 mt-1 cursor-pointer" />{' '}
        <h1 className="">UNI Resto Cafe</h1>
      </div>
      <div className="flex gap-x-4">
        <h1 className="text-gray-500 cursor-pointer">My Orders</h1>
        <div className="relative">
          <IoIosCart className="text-gray-600 w-10 h-6 cursor-pointer" onClick={incrementCartCount} />
          {totalCartCount > -1 && (
            <span className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 bg-red-500 cursor-pointer text-white rounded-full px-1 text-[10px]" onClick={decrementCartCount}>
              {totalCartCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
