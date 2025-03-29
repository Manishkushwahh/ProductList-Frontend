import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFinalGrade } from '../utils/finalgradeSlice';

const GradeCard = ({grades}) => {
   const [clickedIndex, setClickedIndex] = useState(null);
   const dispatch = useDispatch();
          
      const handleClick = (index, grade) => {
          setClickedIndex(index);
          dispatch(addFinalGrade(grade));
      }
  
    return (
      <div className="w-1/4 border border-gray-400 rounded-sm">
              <h1 className='text-2xl font-bold border border-gray-400 rounded-sm  px-2'>Grade</h1>
              <ul className='m-2'>
                  {grades.map((grade, index)=> {
                       return (
                          <div  key={grade._id}
                          onClick={() => handleClick(index, grade)}
                          className={`cursor-pointer hover:bg-blue-300 p-1 rounded-sm ${clickedIndex === index ? 'bg-blue-300' : ''}`}>
                              <li>{grade.gradeNumber}</li>
                          </div>
                      )
                  })}
              </ul>
          </div>
    )
}

export default GradeCard