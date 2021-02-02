import React from 'react'
import "./Home.css";
import Product from './Product.js';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="home__image" alt="Amazon Prime Banner Image Here"/>
            <Product id="12345" title="Asus TUF A15" image="" price={62.999} rating={5} />
        </div>
    )
}

export default Home
