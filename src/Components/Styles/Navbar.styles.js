import styled from "styled-components";

export const NavbarContainer = styled.div`
    color: white;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin-top: 2rem;
        a { color: blue;
        font-size: 20px;
        text-decoration: none;
        margin:2rem;
        color:white;
        transition: font-size 0.2s ;
        font-family: 'Poppins', sans-serif;
        
    }
    a:hover{
        font-weight: bold;
        font-size: 20px;
    }
        li{
            list-style:none;
        }

        @media only screen and (max-width: 425px) {
            justify-content:end;
                li{
                    font-size: 15px;
                }
          }
`

// export const SocialContainer = styled.div `
//         display:flex;
//         flex-direction: column;
//         position: fixed;
//         left: 5%;
//             a{
//                 margin:auto;
//                 padding: 0.5rem
//             }
   
// `

export const NavbarItems = styled.div `
            display:flex;
            flex-direction: row;
`


