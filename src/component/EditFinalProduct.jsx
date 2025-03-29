import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constant';
import { addFinal } from '../utils/finalSlice';
import { useDispatch, useSelector } from 'react-redux';

const EditFinalProduct = ({final}) => {

    const [materialname, setMaterialname] = useState("");
    const [productshape, setProductshape] = useState("");
    const [productlength, setproductlength] = useState("");
    const [materialprice, setmaterialprice] = useState("");
    const [productprice, setProductprice] = useState("");
    const productDetailField = "border-1 rounded-full w-50 px-2 py-0.5 bg-white";
    const dispatch = useDispatch();

    
      const handleUpdate = async (id) => {
        try {
          const res = await axios.patch(
            BASE_URL + "/finalproduct/edit/" + id,
            {
              materialname,
              productshape,
              productlength,
              materialprice,
              productprice
            }
          );
        //   console.log(res.data.data);
        //   dispatch(addFinal(res.data.data));
        } catch (error) {
          console.log(error);
        }
      }
      
  return (
    <div className='text-sm bg-gray-100'>
              <div className='p-2'>
                <h1 className='font-bold mb-2'>Quick Edit</h1>
                <div className='flex'>
                  <h1 className='mr-2'>Title</h1>
                  <div className='flex gap-1 w-1/4'>
                  <h1>{final.materialId.materialName}</h1>
                  <h1>{final.gradeId.gradeNumber}</h1>
                  <h1>{final.productId.productName}</h1>
                  </div>
                  <div className='flex justify-center items-center'>
                    <h1 className='mr-2'>Price *</h1>
                    <div >
                      <select id='price' name='price'
                      className='border-1 rounded-l-full outline-none'>
                        <option>INR</option>
                        <option>USD</option>
                        <option>Euro</option>
                      </select>
                    </div>
                    <div className='border-t-1 border-b-1 px-3'>
                      {final.productId.productPrice + final.materialId.materialPrice}</div>
                    <div>  
                      <select id='weight' name='weight'
                      className='border-1 rounded-r-full outline-none'>
                        <option>KG</option>
                        <option>Meter</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr className='mx-5 mt-1 border border-black-600'></hr>
              <div className='p-2'>
                <h1 className='font-bold mb-2'>Product Details - {final.productId.productName}</h1>
                <div className='flex gap-5 justify-self-start items-center flex-wrap'>
                  <div className='flex gap-15'>
                    <h1>Material</h1>
                    <input 
                    className={productDetailField} 
                    type='text'
                    placeholder={final.materialId.materialName}
                    value={materialname}
                    onChange={(e)=> setMaterialname(e.target.value)} />
                  </div>
                  <div className='flex gap-15'>
                    <h1>Product Shape</h1>
                    <input 
                    className={productDetailField} 
                    type='text'
                    placeholder={final.productId.productShape}
                    value={productshape} 
                    onChange={(e) => setProductshape(e.target.value)}/>
                  </div>
                  <div className='flex gap-15'>
                    <h1>Product Length</h1>
                    <input 
                    className={productDetailField} 
                    type='text'
                    placeholder={final.productId.productLength}
                    value={productlength} 
                    onChange={(e) => setproductlength(e.target.value)}/>
                  </div>
                  <div className='flex gap-15'>
                    <h1>Material Price</h1>
                    <input 
                    className={productDetailField} 
                    type='text'
                    placeholder={final.materialId.materialPrice}
                    value={materialprice} 
                    onChange={(e) => setmaterialprice(e.target.value)}/>
                  </div>
                  <div className='flex gap-15'>
                    <h1>Product Price</h1>
                    <input 
                    className={productDetailField} 
                    type='text'
                    placeholder={final.productId.productPrice}
                    value={productprice} 
                    onChange={(e) => setProductprice(e.target.value)}/>
                  </div>
                  
                </div>
              </div>
              <div className='flex gap-5 p-2'>
                <button 
                className='border-1 py-1.5 px-3 rounded-full bg-blue-300 cursor-pointer'
                onClick={() => handleUpdate(final._id)}>Update</button>
                <button 
                className='border-1 py-1.5 px-3 rounded-full cursor-pointer'>Cancel</button>
              </div>
            </div>
  )
}

export default EditFinalProduct