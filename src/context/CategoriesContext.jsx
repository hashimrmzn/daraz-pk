import React, { createContext, useState, useEffect } from "react";

export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
      
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);

       
        data.forEach(async (cat) => {
          const productRes = await fetch(
            `https://dummyjson.com/products/category/${cat.slug}?limit=1`
          );
          const productData = await productRes.json();
          setCategoryProducts((prev) => ({
            ...prev,
            [cat.slug]: productData.products[0],
          }));
        });

        setLoading(false);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <CategoriesContext.Provider
      value={{ categories, categoryProducts, loading }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
