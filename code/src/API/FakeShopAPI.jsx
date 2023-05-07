import React, { useState, useEffect } from 'react'

function FakeShopAPI() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch('https://fakestoreapi.com/products');
        const data = await result.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.category}</h2>
          {/* <p>{item.description}</p> */}
        </div>
      ))}
    </div>
  )
}

export default FakeShopAPI;
