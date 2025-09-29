import React, { useContext } from "react";
import { CardMedia, CardContent, Typography, Stack } from "@mui/material";
import { CategoriesContext } from "../context/CategoriesContext";
import DynamicGrid from "./DynamicGrid";

function CategoriesWithProducts() {
  const { categories, categoryProducts, loading } = useContext(CategoriesContext);

  if (loading) return <Typography>Loading categories...</Typography>;


  const dataWithProducts = categories
    .map((cat) => ({
      ...cat,
      product: categoryProducts[cat.slug],
    }))
    .filter((cat) => cat.product);

  return (
    <Stack mt={2}>


      <DynamicGrid
        data={dataWithProducts}
        spacing={0}
        xs={12}
        sm={6}
        md={1}
        border={true}
        renderItem={(item) => (
          <div> 
            <CardMedia
              component="img"
              height="80"
              image={item.product.thumbnail}
              alt={item.product.title}
              sx={{ objectFit: "contain", p: 1 }}
            />
            <CardContent>
              <Typography
                variant="subtitle2"
                noWrap
                title={item.name}
                sx={{
                  minWidth:"120px",
                  maxWidth: "120px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {item.name}
              </Typography>
            </CardContent>
        </div>
        )}
      />


    </Stack>
  );
}

export default CategoriesWithProducts;
