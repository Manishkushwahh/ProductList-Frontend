import React, { useState } from 'react'
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addGrade } from '../utils/gradeSlice';
import axios from 'axios';

const InsertGrade = () => {

  const [gradeNumber, setGradeNumber] = useState("");
  const [done, setDone] = useState("");
  const dispatch = useDispatch();

  const handleInsertGrade = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/grade/add",
        {
          gradeNumber,
        }
      );
      // console.log(res.data.data);
      dispatch(addGrade(res.data.data));
      setGradeNumber("");
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
        <label>Grade</label>
        <input type='text' placeholder='' value={gradeNumber}
        onChange={(e) => setGradeNumber(e.target.value)}
        className='border border-gray-400 rounded-sm px-2 py-1' />
      </div>
      <div className='text-green-400'>{done}</div>
      <button className='bg-blue-400 px-2 py-1 rounded-xl cursor-pointer' 
      onClick={handleInsertGrade}>Add Details</button>
    </div>
    </div>
  )
}

export default InsertGrade