import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { addFinalProduct } from '../utils/finalProductSlice';

const ProductCard = ({products}) => {

    const [clickedIndex, setClickedIndex] = useState(null);
    const dispatch = useDispatch();
    
    const handleClick = async (index, product) => {
        setClickedIndex(index);
        dispatch(addFinalProduct(product));
    }


  return (
        <div className="w-1/4 border border-gray-400 rounded-sm">
            <h1 className='text-2xl font-bold border border-gray-400 rounded-sm  px-2'>Product</h1>
            <ul className='m-2'>
                 {products.map((product, index)=> {
                     return (
                        <div key={product._id}
                        onClick={() => handleClick(index, product)}
                        className={`cursor-pointer hover:bg-blue-300 p-1 rounded-sm ${clickedIndex === index ? 'bg-blue-300' : ''}`}>
                            <li >{product.productName}</li>
                        </div>
                    )
                })} 
                    
            </ul>
        </div>
  )
}

export default ProductCard