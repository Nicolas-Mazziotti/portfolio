import styled from "styled-components";

export const CardsContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
`
export const Cards = styled.div `
    justify-content: center;
    heigth: 120px;
    
    @media only screen and (max-width: 1440px) {
        width: 100vh;
        heigth: 100vh;
        }
    @media only screen and (max-width: 768px) {
        width: 70vh;
        }
        @media only screen and (max-width: 425px) {
            width: 45vh;
            }
`

export const CardsTitle = styled.h6 `
    font-size: 50px;
    margin-bottom: auto;
`
export const CardsItem = styled.div`
    justify-content:center;
    text-align:center;
    margin: 4rem;
    padding: 0;
    background-color: rgb(145 70 255);
    
    
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