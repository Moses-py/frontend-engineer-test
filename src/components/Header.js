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
        <div>
            <HeaderDiv>
                <div className="hamburger">
                    <MenuOpenIcon />
                </div>
                <div className="logo-image">
                    <img src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4;version=0?component_id=0ea5ac78-e204-4121-8cd2-bdcd7f0a0d8c&api_key=CometServer1&access_token=1614897174_urn%3Aaaid%3Asc%3AUS%3A7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4%3Bpublic_bf7670bb6e01dcd5f01eafc88055b110ae7a6976" style={{paddingLeft: "2.5rem"}} alt="logo-icon"/>
                </div>
                <SearchIconAndCart>
                    <SearchIcon style={{marginRight: ".7rem"}} />
                    <img src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4;version=0?component_id=384acded-8e7e-4476-8593-8cc93e25a986&api_key=CometServer1&access_token=1614897174_urn%3Aaaid%3Asc%3AUS%3A7f1f20c8-80ed-4e5c-9c72-9cc87bb0e5a4%3Bpublic_bf7670bb6e01dcd5f01eafc88055b110ae7a6976" alt="shoppingCartIcon"/>
                </SearchIconAndCart>
            </HeaderDiv> 
        </div>

    )
}

export default Header
