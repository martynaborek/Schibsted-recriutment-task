import React from 'react';
import Header from "../components/molecules/Header/Header";
import Footer from "../components/molecules/Footer/Footer";
import Articles from '../components/organisms/Articles/Articles';

// @ts-ignore
const Home = (): any => {
    return (
        <>
            <Header/>
             <Articles/>
            <Footer/>
        </>
    );
};

export default Home;