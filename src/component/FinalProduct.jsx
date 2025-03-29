import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { BASE_URL } from '../utils/constant';
import EditFinalProduct from './EditFinalProduct';

const FinalProduct = () => {

  const finalProduct = useSelector((store)=> store.final);
  const [productIdForEdit, setProductIdForEdit] = useState("");

  const handleEdit = (id) => {
    setProductIdForEdit(id);
  }

  if(!finalProduct) return;
  // console.log(finalProduct);
  return (
    <div className='m-5 border-r border-l rounded-sm'>
      <div className='flex justify-center items-center p-2 border-t border-b rounded-sm bg-blue-200'>
        <div className='w-1/4'>Products</div>
        <div className='w-1/4'>Actions</div>
        <div className='w-1/4'>Product Details</div>
        <div className='w-1/4'>Price in Unit</div>
      </div>

      {finalProduct.map((final) => {
        return (
          <>
          <div key={final._id}>
            { !(productIdForEdit === final._id) ? 
            <div className='flex justify-between items-center p-2 text-sm'>
            <div className='flex gap-1 w-1/4'>
            <h1>{final.materialId.materialName}</h1>
            <h1>{final.gradeId.gradeNumber}</h1>
            <h1>{final.productId.productName}</h1>
            </div>

            <div 
            className='text-blue-400 w-1/4 cursor-pointer'
            onClick={()=> handleEdit(final._id)}>
              <p>Quick Edit | Add Product Details</p>
            </div>

            <div className='w-1/4 text-xs'>
              <h1>Material: {final.materialId.materialName}</h1>
              <h1>Unit Length: {final.productId.productLength}</h1>
              <h1>Shape: {final.productId.productShape}</h1>
            </div>

            <div className='w-1/4'>
              <h1>{final.productId.productPrice + final.materialId.materialPrice}/Rs</h1>
            </div>
            </div>
            : 
            <EditFinalProduct final={final} productIdForEdit={productIdForEdit}/>}
          </div>
          <hr></hr>
          </>
        )
      })}
    </div>
  )
}

export default FinalProduct