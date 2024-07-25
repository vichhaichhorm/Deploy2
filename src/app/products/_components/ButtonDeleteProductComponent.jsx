"use client"
import { handleDeleteProductServer, handleEditProductServer } from '@/action/productAction';
import React  from 'react';

const ButtonDeleteProductComponent = ({ productId }) => {
  
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between'>
        <button onClick={() => handleDeleteProductServer(productId)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
        <button  className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-[10px]">Edit</button>
      </div>
    </div>
  );
};

export default ButtonDeleteProductComponent;
