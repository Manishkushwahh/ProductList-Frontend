import axios from 'axios';
import React, { useState } from 'react';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addProduct } from '../utils/productSlice';

const InsertProduct = () => {

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productShape, setProductShape] = useState("");
  const [productLength, setProducLength] = useState("");
  const [done, setDone] = useState("");

  const dispatch = useDispatch();

  const handleInsertProduct = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/product/add",
        {
          productName,
          productPrice,
          productShape,
          productLength
        },
      );
      console.log(res.data.data);
      dispatch(addProduct(res?.data?.data));
      setProductName("");
      setProductPrice("");
      setProductShape("");
      setProducLength("");
      setDone("Added Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex justify-center items-center'>
    <div className='flex flex-col gap-4 my-10 shadow-lg w-1/3 p-5'>
      <h1 className='text-center font-bold text-2xl mb-5'>Add Product Details</h1>
      <div className='flex flex-col gap-2'>
        <label>Product Name</label>
        <input type='text' placeholder='' value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='flex flex-col gap-2'>
        <label>Product Price</label>
        <input type='text' placeholder='' value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='flex flex-col gap-2'>
        <label>Product Shape</label>
        <input type='text' placeholder='' value={productShape}
        onChange={(e) => setProductShape(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='flex flex-col gap-2'>
        <label>Product Length</label>
        <input type='text' placeholder='' value={productLength}
        onChange={(e) => setProducLength(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='text-green-400'>{done}</div>
      <button className='bg-blue-400 px-2 py-1 rounded-xl cursor-pointer' 
      onClick={handleInsertProduct}>Add Details</button>
    </div>
    </div>
  )
}

export default InsertProduct