import styled from "styled-components";

export const HeaderContainer = styled.div`
    color:white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 5rem;
    font-family: 'Poppins', sans-serif;
    line-height:0;
    img{
        width: 250px;
        border-radius: 50px;
        transform: rotateY(360deg);
        animation-name: img;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-direction:alternate;
    }
    @keyframes img {
        from{ transform: rotateY(90deg)}
        to {transform: rotateY(180deg)}
    }

`

export const TitleContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 5rem;
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
`