import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addMaterial } from '../utils/materialSlice';

const InsertMaterial = () => {

  const[materialName, setMaterialName] = useState("");
  const[materialPrice, setMaterialPrice] = useState("");
  const [done, setDone] = useState("");
  const dispatch = useDispatch();

  const handleInsertMaterial = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/material/add",
        {
          materialName,
          materialPrice,
        },
      );
      console.log(res.data.data);
      dispatch(addMaterial(res.data.data));
      setMaterialName("");
      setMaterialPrice("");
      setDone("Added Successfully");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='flex justify-center items-center'>
    <div className='flex flex-col gap-4 my-10 shadow-lg w-1/3 p-5'>
      <h1 className='text-center font-bold text-2xl mb-5'>Add Material Details</h1>
      <div className='flex flex-col gap-2'>
        <label>Material Name</label>
        <input type='text' placeholder='' value={materialName}
        onChange={(e) => setMaterialName(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='flex flex-col gap-2'>
        <label>Material Price</label>
        <input type='text' placeholder='' value={materialPrice}
        onChange={(e) => setMaterialPrice(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='text-green-400'>{done}</div>
      <button className='bg-blue-400 px-2 py-1 rounded-xl cursor-pointer' 
      onClick={handleInsertMaterial}>Add Details</button>
    </div>
    </div>
  )
}

export default InsertMaterial