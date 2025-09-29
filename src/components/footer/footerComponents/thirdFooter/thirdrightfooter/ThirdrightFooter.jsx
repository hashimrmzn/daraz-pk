import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";

function ThirdrightFooter() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategoriesWithProducts() {
      try {
   
        const res = await fetch("https://dummyjson.com/products/categories");
        const categoryObjects = await res.json();


        const categoryData = await Promise.all(
          categoryObjects.map(async (cat) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${cat.slug}?limit=5`
            );
            const data = await res.json();
            return {
              name: cat.name,
              slug: cat.slug,
              items: data.products.slice(0, 5).map((p) => p.title), 
            };
          })
        );

        setCategories(categoryData);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoriesWithProducts();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ width: "50%" }}>
      <div className="container">
        <Typography variant="h2" gutterBottom>
          Top Categories & Brands
        </Typography>

        <Grid container columns={12}>
          {categories.map((category) => (
            <Grid item xs={12} sm={6} size={6} key={category.slug}>
              <Stack className="all-categories-items">
                <Typography variant="h6">{category.name}</Typography>

                <Stack
                pr={"20%"}
                  direction="row"
                  flexWrap="wrap"
                  className="all-categories-items"
                >
                  {category.items.map((item, i) => (
                    <a
                      href="#."
                      key={`${category.slug}-${i}`}
                      style={{
                        display: "inline-block", 
                        textDecoration: "none",
                      }}
                    >
                      {item}
                      <span>,</span>
                    </a>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </div>
    </Box>
  );
}

export default ThirdrightFooter;
