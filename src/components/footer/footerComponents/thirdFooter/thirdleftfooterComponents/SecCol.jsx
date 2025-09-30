import React, { useContext } from "react";
import { Typography, Stack } from "@mui/material";
import { MobileScreenConext } from "../../../../../context/MobileScreenContext";
function SecCol() {
    const isMobile = useContext(MobileScreenConext);
    return (
        <>
            <Stack sx={{ paddingRight: isMobile ? "0": "25%" }}>

                <p><b>Shop from Verified Vendors
                </b></p>
                <Typography variant="h6" component="p">
                    Daraz understands that online shopping in Pakistan comes with its fair share of risks. This is why with Daraz Marketplace and Daraz Mall customers have the security of choosing from verified vendors and brands from Karachi, Lahore, Islamabad and all across Pakistan. Now you’ll never have to second guess authenticity because Daraz makes sure to do it for you!
                </Typography>

                <p><b>Shop Around the World with Daraz Global Collection
                </b></p>
                <Typography variant="h6" component="p">
                    International sellers and local convenience come together with Daraz Global collection. Get the chance to shop online from vendors around the world without leaving the Daraz website. Featuring thousands of novelty gadgets and accessories, Daraz Global Collection offers you a selection of products that you won’t find anywhere else when you’re online shopping in Pakistan.
                </Typography>

                <p><b>Avail Exclusive Discounts, Offers, and Promotions
                </b></p>
                <Typography variant="h6" component="p">
                    Online shopping with Daraz means you get the chance to avail exclusive online-only promotional packages as well as discount vouchers from our vendors when you shop from their pages. Our flash sales give you customized product offers all curated with the help of our advanced AI technology so you always have deals you’ll actually be interested in!
                </Typography>

                <p><b>Buy Value, not Just Goods with Daraz Care
                </b></p>
                <Typography variant="h6" component="p">
                    Daraz does not just cater online shopping in Pakistan but also aims to simplify the way you give back to society. With charities spanning across sectors of education, health care, environmental preservation, and shelters, you can choose to make a big difference with a few, simple clicks.
                </Typography>

                <p><b>
                    Simplify Corporate Purchases
                </b></p>
                <Typography variant="h6" component="p">
                    Who says corporate purchases need to be a complicated affair? When you opt for Daraz Corporate, you get an efficient and transparent solution for your business’ bulk purchasing needs. We’re proud to be working with some of the most prestigious organizations in Pakistan across a number of different industries.
                </Typography>
            </Stack>
        </>
    )
}

export default SecCol