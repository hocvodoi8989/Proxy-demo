"use client"

import Banner from "../banner/Banner";
import Header from "../header/Header";
import HeaderSticky from "../header/HeaderSticky";
import { useEffect, useState } from "react";


function WrapperHeader() {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
         };
    }, [])

    

    return ( 

        <div className="wrapper-header">
            <div className={scrollPosition > 0 ? "hide" : "show"}>
                <Header />
            </div>
            <div className={scrollPosition > 0 ? "show" : "hide"} style={{ display: "none" }}>
                <HeaderSticky />
            </div>
            <Banner />
        </div>
        

     );
}

export default WrapperHeader;