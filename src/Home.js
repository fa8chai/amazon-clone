import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=''></img>
            <div className='home__row'>
                <Product 
                    id='597841365'
                    title='TurnWay Waterproof Lightweight 16” Laptop Backpack/School Daypack for Travel, College, School, Sport, Men and Women, Youth'
                    price={29.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81uxabgc8hL._AC_UY218_.jpg'
                />
                <Product 
                    id='125496853'
                    title='AmazonBasics Blue, White, and Yellow Microfiber Cleaning Cloths- Pack of 144'
                    price={53.29}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/91W3meJ95qL._AC_UY218_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='598716523'
                    title='Acer Aspire 5 Slim Laptop'
                    price={980.99}
                    rating={4}
                    image='https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg'
                />
                <Product 
                    id='895123579'
                    title='Lenovo Flex 5 14" 2-in-1 Laptop'
                    price={599.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81x+9uFY1QL._AC_UL320_.jpg'
                />
                 <Product 
                    id='987563154'
                    title='WILDREAM Teddy Bear Stuffed Animal,11 Inches Plush Bear'
                    price={11.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/61j27lB-UwL._AC_UL320_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='895612548'
                    title='Midnight Sun'
                    price={14.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81j8pE4PWXL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg'
                />
            </div>
        </div>

    )
}

export default Home
