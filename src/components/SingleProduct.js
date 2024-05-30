import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
const SingleProduct = () => {
  const { name } = useParams;
  const singleCocktail = async () => {
    try {
      const data = await fetch(`${url}${name}`);
      const response = await data.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleCocktail();
  }, []);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
