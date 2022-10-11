import styled from "styled-components"

export const ContactContainer = styled.div `
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        color: white;
        margin: auto;
        width: 84%;
        height: 150px;
        margin-bottom: 5rem;
        background-color:  rgb(145 70 255);
        border-radius: 0.5rem;
        min-width: fit-content;

        
    ` 
export const ImgContainer = styled.div `
    img {
    @media and all (max-width: 425px){
        width: 10px;
    }
}

    `
export const DataContainer = styled.div `
@media and all (max-width: 425px){
    width: 8vh;
}
    `