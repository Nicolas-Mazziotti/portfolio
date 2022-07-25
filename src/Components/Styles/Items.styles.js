import styled from "styled-components";

export const CardsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`
export const Cards = styled.div `
    display:flex;
    flex-direction:row;
    justify-content: center;
    heigth: 120px;
    min-width: 100%;
    
`

export const CardsTitle = styled.h6 `
    font-size: 50px;
    margin-bottom: auto;
`
export const CardsItem = styled.div`
    justify-content:center;
    text-align:center;
    margin: 4rem;
    
    
        &:hover{
            transition: box-shadow 0.2s;
            box-shadow: 0px 5px 10px grey;  
        }
`

export const CardMedia = styled.div `
    img{
        width:500px;
        max-height: 220px;
    }


`

export const LinkButton = styled.a `
    text-decoration: none;
    color: #1976d2;
`