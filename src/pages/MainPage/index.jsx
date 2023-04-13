import React from "react";
import "./mainpage.scss" ;
import Header from "../../components/Header";
import {Wrapper} from "../../components/Wrapper";

export const MainPage = () => {
    return (
        <div className="div-mainPage">
            <Header/>
            <Wrapper/>
        </div>
    );
};