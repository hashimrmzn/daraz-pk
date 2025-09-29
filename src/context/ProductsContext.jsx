import React, { createContext, useState, useEffect } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
 const [hasError,sethasError]= useState(false)
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      
      .then((data) => {
        console.log("data is fetched succesfully" + data.products)
        setProducts(data.products); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
        sethasError(true)
      });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading,hasError }}>
      {children}
    </ProductsContext.Provider>
  );
}
