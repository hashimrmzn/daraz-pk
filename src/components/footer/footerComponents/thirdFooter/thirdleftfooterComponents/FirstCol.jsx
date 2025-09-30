import React, { useContext } from "react";
import { Typography ,Stack } from "@mui/material";
import { MobileScreenConext } from "../../../../../context/MobileScreenContext";
function FirstCol() {
   const isMobile = useContext(MobileScreenConext);
  return (
   <>
   <Stack sx={{ paddingRight:isMobile ? "0": "25%" }}>
          <Typography variant='h2'>
            How Daraz Transformed Online Shopping in Pakistan
          </Typography>
          <Typography variant="h6" component="p">
            How Daraz Transformed Online Shopping in Pakistan
          </Typography>
          <Typography variant="h6" component="p">
            Daraz first made waves in Pakistan’s e-commerce market after its introduction in 2012. We have since grown to become Pakistan’s largest platform for online shopping with a network spread across Asia in Pakistan, Bangladesh, Sri Lanka, Myanmar, and Daraz.com.np. Our vision was to provide a safe, efficient online marketplace platform for vendors and customers across the country to come together. We started off exclusively as an online fashion retail platform and over the years expanded to become a complete one-stop solution for all your buying needs.  Daraz prides itself on not being just another ecommerce venture in Asia. We work tirelessly to make sure that we provide users with the best online online shopping experience and value for their purchases. Whether you shop online through our website or our online shopping mobile App, you can expect easy navigation, customized recommendations, and a smooth online shopping experience guaranteed.
          </Typography>
          <Typography variant='h2'>
            What Makes Us Different from Other Online Shopping Platforms?
          </Typography>
          <p><b>Select from the Largest Online Marketplace in Pakistan
          </b></p>
          <Typography variant="h6" component="p">
            With over 15 million products to select from, Daraz offers its customers the most comprehensive listing of products in the country. Whether you’re looking for electronics, apparel, appliances, or groceries – there is something for everyone
          </Typography>

          <p><b>Hassle Free Delivery
          </b></p>
          <Typography variant="h6" component="p">
            Online shopping is only as good as its execution and Daraz promises hassle free delivery right from the moment you order to when your package is dropped at your door. We cater to both major and smaller cities alike, and give you the choice to track your package as it makes its way to you so you always know your order status. If you are unsatisfied with any aspect of your order, we have a simple 7-day return or exchange policy.
          </Typography>
        </Stack>
   </>
  )
}

export default FirstCol