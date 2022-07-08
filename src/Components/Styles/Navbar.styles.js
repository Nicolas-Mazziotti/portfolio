import styled from "styled-components";

export const NavbarContainer = styled.div`
    color: white;
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
        a { color: blue;
        font-size: 20px;
        text-decoration: none;
        margin:2rem;
        color:white;
        transition: font-size 0.2s ;
        font-family: 'Rubik', sans-serif;
        
    }
    a:hover{
        text-decoration: underline;
        font-size: 25px;
        
        
    }
        li{
            list-style:none;
        }
`


