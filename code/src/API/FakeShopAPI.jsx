import React, { useState, useEffect } from 'react';

function FakeShopAPI({ setData }) {
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch('https://fakestoreapi.com/products');
        const data = await result.json();
        setData(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, [setData]);

  return null;
}

export default FakeShopAPI;