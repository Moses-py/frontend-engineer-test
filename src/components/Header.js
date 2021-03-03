import React from 'react'
import styled from "styled-components"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';

const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.5rem 2.5rem .8rem 2.5rem
`
const SearchIconAndCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center
`


function Header() {
    return (
        <HeaderDiv>
            <div className="hamburger">
                <MenuOpenIcon />
            </div>
            <div className="logo-image">
                <img src="/images/urn_aaid_sc_US_7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4 (5).png" style={{paddingLeft: "2.5rem"}} alt="logo-icon"/>
            </div>
            <SearchIconAndCart>
                <SearchIcon style={{marginRight: ".7rem"}} />
                <ShoppingCartRoundedIcon style={{marginLeft: ".7rem"}}  />
            </SearchIconAndCart>
        </HeaderDiv>
    )
}

export default Header
