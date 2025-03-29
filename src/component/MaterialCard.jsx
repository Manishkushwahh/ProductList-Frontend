import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFinalMaterial } from '../utils/finalmaterialSlice';

const MaterialCard = ({materials}) => {
    
    const [clickedIndex, setClickedIndex] = useState(null);
    const dispatch = useDispatch();
        
    const handleClick = (index, material) => {
        setClickedIndex(index);
        dispatch(addFinalMaterial(material));
    }

  return (
    <div className="w-1/4 border border-gray-400 rounded-sm">
            <h1 className='text-2xl font-bold border border-gray-400 rounded-sm  px-2'>Material</h1>
            <ul className='m-2'>
                {materials.map((material, index)=> {
                     return (
                        <div  key={material._id}
                        onClick={() => handleClick(index, material)}
                        className={`cursor-pointer hover:bg-blue-300 p-1 rounded-sm ${clickedIndex === index ? 'bg-blue-300' : ''}`}>
                            <li>{material.materialName}</li>
                        </div>
                    )
                })}
            </ul>
        </div>
  )
}

export default MaterialCard