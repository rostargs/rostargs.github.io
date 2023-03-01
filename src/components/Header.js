import React from "react";
import logo from '../logo.svg'

export default function Header(){
    return (
        <header className="header">
            <div className="container">
                <div className="nav">
                    <img src={logo} alt="logo" className="nav__logo" />
                    <h1 className="nav__title">my travel journal.</h1>  
                </div>
            </div>
        </header>
    )
}