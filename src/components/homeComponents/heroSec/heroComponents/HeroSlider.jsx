import React from 'react'
import "slick-carousel/slick/slick.css";
import { Link as RouterLink } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "@mui/material/Link";
import styles from "./HeroSlider.module.css";
import hero1 from "../../../../assets/images/hero-1.avif";
import hero2 from "../../../../assets/images/hero-2.avif";
import hero3 from "../../../../assets/images/hero-3.avif";
import hero4 from "../../../../assets/images/hero-4.avif";
import hero5 from "../../../../assets/images/hero-5.avif";
function HeroSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 5000,
         arrows: true,
    }
    return (
        <>
        <div className={styles.heroSlider}> 
            <Slider  {...settings}>
                <div>
                    <Link component={RouterLink} to="/">
                        <img src={hero1} className={styles.sliderImg} alt="Hero 1"  />
                    </Link>
                </div>

                <div>
                    <Link component={RouterLink} to="/">
                        <img src={hero2} className={styles.sliderImg} alt="Hero 2"  />
                    </Link>
                </div>
                <div>
                    <Link component={RouterLink} to="/">
                        <img src={hero3} className={styles.sliderImg} alt="Hero 3" />
                    </Link>
                </div>
              <div>
                    <Link component={RouterLink} to="/">
                        <img src={hero4} className={styles.sliderImg} alt="Hero 4" />
                    </Link>
                </div>

                 <div>
                    <Link component={RouterLink} to="/">
                        <img src={hero5} className={styles.sliderImg} alt="Hero 5" />
                    </Link>
                </div>

            </Slider>
            </div>
        </>
    )
}

export default HeroSlider