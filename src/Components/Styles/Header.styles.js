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
    @media all and (max-width: 768px){
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
    margin-left: 7rem;
    gap: 7rem;

        span{
            font-size:40px;
            color:violet;
            margin:0rem;
            animation-name: h6;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: alternate;

            @media all and (max-width: 425px){
                font-size: 30px;
            }

        }
        @keyframes h6{
            from { color:#440be4}
            to {color: #6f58b0;}
        }

        @media all and (max-width: 768px){
            gap:5rem;
            margin: auto;
        }

`