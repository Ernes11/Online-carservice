import React from 'react';
import Header from '../Sections/Header';
import Footer from "../Components/Footer";
import GetQuote from '../Sections/GetQuote';
import Offer from '../Sections/Offer';
import GetInfo from '../Sections/GetInfo';
import Stat from '../Sections/Stat';
import BrandServe from '../Sections/BrandServe';
import InfoSection from '../Sections/InfoSection';
import AccordionMain from '../Sections/AccordionMain';
import Slider from '../Components/FeedbackSlider';
import {headerObjOne} from '../const/Data';

function Home() {
    return (
        <>
        <div className="home">
        <Header {...headerObjOne}></Header>
            <GetQuote/>                     
            <InfoSection/>
            <Offer />
            <GetInfo/>
            <Stat/>
            <BrandServe/>
            <Slider/>
            <AccordionMain/>
            <Footer/>
        </div>         
        </>
    )
}

export default Home
