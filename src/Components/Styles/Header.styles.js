import styled from "styled-components";

export const HeaderContainer = styled.div`
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    line-height:0;
    img{
        width: 250px;
        border-radius: 50px;
    }
    @media only screen and (max-width: 768px){
            flex-direction: column-reverse;
            align-items: center;
                img{
                    margin-top: 2rem;
                }
        }
`

export const TitleContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
    gap: 2rem;
        h6{
            font-size:40px;
            color:violet;
            margin:1rem;
            animation-name: h6;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }
        @keyframes h6{
            from { color:#440be4}
            to {color: #6f58b0;}
        }

        @media only screen and (max-width: 768px){
            gap:2rem;
            margin: auto;
        }

`