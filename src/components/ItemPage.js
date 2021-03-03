import React from 'react'
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import styled from "styled-components"
import templates from "../designTemplate/template"

const ItemPageBlock = styled.div`
    background-color: #C3E5E4
`
const ItemImageBlock = styled.div`
    display: flex;
    justify-content: center;
    padding: 2.5rem
`
const ItemDescriptionBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem 2rem 2.5rem;
    h2 {
        font-family: 'Rubik', sans-serif;
        padding: .4rem;
        font-size: 18px;
        font-weight: semi-bold;
        line-spacing: 47
    };

    div.bottom-description {
        display: flex;
        align-items: center;
    };
    h4 {
        padding: 0 .4rem;
        font-family: 'Rubik', sans-serif;
        font-weight: lighter;
        font-size: 14px;
    }
    h5 {
        padding-left: .4rem;
        font-family: 'Rubik', sans-serif;
        font-weight: lighter;
        font-size: 12px
    }
`

function ItemPage() {

    return (
        templates.map(template => {
            const {count, image, price, color, itemName} = template
            return (
                <ItemPageBlock style={{backgroundColor: color}}>
                    <ItemImageBlock>
                        <img src={image} alt="hgvugk"/>
                    </ItemImageBlock>
                    <ItemDescriptionBlock>
                        <div className="Item-description">
                            <h2>{itemName}</h2>
                            <div className="bottom-description">
                                <h4>{price}</h4>
                                <h5>Unisex Pack of {count}</h5>
                            </div>
                        </div>
                        <div className="heart-icon">
                            <FavoriteBorderRoundedIcon />
                        </div>
                </ItemDescriptionBlock>
            </ItemPageBlock>
            )
        })
    )
}

export default ItemPage
