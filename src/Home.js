import React from 'react'
import "./Home.css";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="Amazon Prime Banner Image Here" />

            <div className="home__row">
                <Product id="111719104001" title="ASUS TUF Gaming A15 Laptop 15.6 FHD 144Hz Ryzen 5 4600H, GTX 1650 4GB Graphics (8GB RAM/1TB HDD + 256GB NVMe SSD/Windows 10/Bonfire Black/2.30 Kg), FA506IH-AL057T" image="https://www.reliancedigital.in/medias/Asus-BQ169T-Laptops-491894127-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1OTc3Njl8aW1hZ2UvanBlZ3xpbWFnZXMvaGRmL2hhMy85MzMwNDY4NDg3MTk4LmpwZ3xmZDZjYmMyNTFhYTgyNGYwM2RlYjc1ZGI0YTU5NjIxYmY4ODM2MzY0OGM3NzNkZDJkZGY0ZGRlMmEyZWYzN2Uy" price={62.999} rating={5} />

                <Product id="111719104002" title="Infinity (JBL) Zip 100 in-Ear Immersive Bass Tangle Free Flat Cable Headphones with Mic (Mystic Blue)" image="https://images-na.ssl-images-amazon.com/images/I/61dUEsT18EL._SL1500_.jpg" price={549.00} rating={4} />
            </div>

            <div className="home__row">
                <Product id="111719104003" title="Zebronics Zeb-Transformer-M Optical USB Gaming Mouse with LED Effect(Black)" image="https://images-na.ssl-images-amazon.com/images/I/81tioCUVf4L._SL1500_.jpg" price={525.00} rating={4} />

                <Product id="111719104004" title="Amicraft Men's Combo Pack Of Wallet & Belt" image="https://images-na.ssl-images-amazon.com/images/I/81mqBzDuuhL._SL1500_.jpg" price={585.00} rating={3} />

                <Product id="111719104005" title="K7 Total Security - 1 PC, 1 Year (CD or Voucher)" image="https://images-na.ssl-images-amazon.com/images/I/713px5YqOtL._SL1500_.jpg" price={389.00} rating={5} />
            </div>

            <div className="home__row">
                <Product id="111719104006" title="Cosmic Byte CB-GK-02 Corona Wired Gaming Keyboard, 7 Color RGB Backlit with Effects, Anti-Ghosting (Black)" image="https://images-na.ssl-images-amazon.com/images/I/71ftnIeMlTL._SL1500_.jpg" price={1299.00} rating={4} />
            </div>

        </div>
    )
}

export default Home
