import styled from "styled-components";

export const NavbarContainer = styled.div`
    color: white;
    display:flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
        a { color: blue;
        font-size: 1rem;
        text-decoration: none;
        margin:2rem;
        color:white;
        transition: font-size 0.2s ;
        
    }
    a:hover{
        text-decoration: underline;
        font-size: 20px;
        
        
    }
        li{
            list-style:none;
        }
`


