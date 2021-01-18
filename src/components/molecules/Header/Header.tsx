import React from 'react';
// styles
import { HeaderStyled, LogoStyled } from './HeaderStyled';
// assets
// @ts-ignore
import logo from '../../../assets/images/schibsted-logo-dark.png'

const Header = () => {
    return (
        <HeaderStyled>
            <a href="https://www.schibsted.pl/" target="_blank">
                <LogoStyled src={logo} alt="schibsted"/>
            </a>
            <div>Toogle theme</div>
        </HeaderStyled>
    );
};

export default Header;