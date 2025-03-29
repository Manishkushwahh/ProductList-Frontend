import React, { useEffect } from 'react';
import Header from './Header';
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import { BASE_URL } from '../utils/constant';
import { useDispatch} from 'react-redux';
import { addProduct } from '../utils/productSlice';
import { addMaterial} from "../utils/materialSlice";
import axios from 'axios';
import { addGrade } from '../utils/gradeSlice';
import { addFinal } from '../utils/finalSlice';

const Body = () => {

  const dispatch = useDispatch();

  const getProducts = async () => {
   
    try {
      const products = await axios.get(
        BASE_URL + "/product/view",
      );

      // console.log(products.data);
      dispatch(addProduct(products.data));
    } catch (error) {
      console.log(error);
    }
  }

  const getMaterials = async () => {
   
    try {
      const materials = await axios.get(
        BASE_URL + "/material/view",
      );

      // console.log(materials.data);
      dispatch(addMaterial(materials.data));
    } catch (error) {
      console.log(error);
    }
  }

  const getGrades = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/grade/view"
      );
      // console.log(res.data);
      dispatch(addGrade(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  const getFinalProduct = async () => {
    try {
        const res = await axios.get(
        BASE_URL + "/finalproduct/view"
      );
      // console.log(res.data);
      dispatch(addFinal(res.data));
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    getProducts();
    getMaterials();
    getGrades();
    getFinalProduct();
  }, []);


  
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Body