import { Typography, Stack, CardMedia, CardContent, Rating } from "@mui/material";
import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import DynamicGrid from "./DynamicGrid";

function AllProducts() {
  const { products, loading, hasError } = useContext(ProductsContext);

  if (loading) return <Typography>Loading...</Typography>;
  if (hasError) return <Typography color="error">Failed to load products.</Typography>;

  return (
    <Stack mt={2}>


      <DynamicGrid
        data={products}
        spacing={2}
        md={2} 
        renderItem={(product) => (
          <div>
            <CardMedia
              component="img"
              height="140"
              image={product.thumbnail}
              alt={product.title}
              sx={{ objectFit: "contain", p: 1 }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{
                     minWidth:"120px",
                  maxWidth: "120px",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
                title={product.title}
              >
                {product.title}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                ${product.price}
              </Typography>

              <Rating value={product.rating} precision={0.5} readOnly size="small" />
            </CardContent>
          </div>
        )}
      />
    </Stack>
  );
}

export default AllProducts;
