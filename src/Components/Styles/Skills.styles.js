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
        img{
            padding: 1rem;
            width: 10%;
            opacity:0.5;

        }
        img:hover{
            opacity:1;
        }
`