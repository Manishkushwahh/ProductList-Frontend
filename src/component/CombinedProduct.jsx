import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import MaterialCard from './MaterialCard';
import GradeCard from './GradeCard';
import { BASE_URL } from '../utils/constant';
import axios from 'axios';
import { addFinal } from '../utils/finalSlice';
const CombinedProduct = () => {

    const products = useSelector((store) => store.product);
    const materials = useSelector((store) => store.material);
    const grades = useSelector((store) => store.grade);

    const finalproduct = useSelector((store) => store.finalproduct);
    // console.log(finalproduct);
    const finalmaterial = useSelector((store) => store.finalmaterial);
    const finalgrade = useSelector((store) => store.finalgrade);


    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {
            const res = await axios.post(
                BASE_URL + "/finalproduct",
                {
                    productId: finalproduct._id,
                    materialId: finalmaterial._id,
                    gradeId: finalgrade._id,
                }
            );
            console.log(res.data.data);
            dispatch(addFinal(res.data.data));
            
        } catch (error) {
            console.log(error.response.message);
        }
    }
    

    if(!products) return;
    if(!materials) return;
    if(!grades) return;

    

    return (
        <div>
        <div className='font-bold text-2xl py-2 px-40'>
            <h1>Add Products</h1>
            <hr></hr>
        </div>
        <div className='flex justify-center gap-3 m-5'>
            <ProductCard products={products} />
            <MaterialCard materials={materials} />
            <GradeCard grades={grades} />
        </div>
        <div className='flex justify-center'>
            <button 
            onClick={handleSubmit}
            className='bg-green-400 py-1 px-2 text-xl font-bold rounded-sm cursor-pointer'>Submit</button>
        </div>
        </div>
    )
}

export default CombinedProduct