import styled from "styled-components";


export const SkillsContainer = styled.div `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
        h6{
            font-size: 50px;
            color: white;
            letter-spacing: 0.2rem;
            margin:auto;
            margin-top: 5rem;
        }
    
`
export const IconsContainer = styled.div `
        display:flex;
        flex-direction:row;
        flex-wrap: wrap;
        div{
            text-align:center;
            margin:1rem;
        }
        img{
            padding: 1rem;
            width: 10%;
        }
        p{
            color:white;
        }
        img:hover{
            opacity:0.5;
        }

        @media only screen and (max-width:768px) {
            display:grid;
            grid-template-columns: repeat(1, 2fr);
        }
`