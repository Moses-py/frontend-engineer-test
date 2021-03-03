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
                <img src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4;version=0?component_id=0ea5ac78-e204-4121-8cd2-bdcd7f0a0d8c&api_key=CometServer1&access_token=1614804605_urn%3Aaaid%3Asc%3AUS%3A7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4%3Bpublic_fa656353e45f63ba757b6646f25d2c5dbd903f3b" style={{paddingLeft: "2.5rem"}} alt="logo-icon"/>
            </div>
            <SearchIconAndCart>
                <SearchIcon style={{marginRight: ".7rem"}} />
                <ShoppingCartRoundedIcon style={{marginLeft: ".7rem"}}  />
            </SearchIconAndCart>
        </HeaderDiv>
    )
}

export default Header
