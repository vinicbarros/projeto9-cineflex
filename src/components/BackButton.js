import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackButton({urlBack}) {
    let navigate = useNavigate();


    function GoBack(url) {
        navigate(`${url}`);
    }

    return (
        <Button onClick={ ()=> {GoBack(urlBack)}}>
            <ion-icon name="arrow-back-outline"></ion-icon>
        </Button>
    );
}

const Button = styled.div`
    position:fixed;
    top: 14px;
    left: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #8C999C;
    display: flex;
    align-items: center;
    justify-content: center;

    ion-icon {
        font-size: 30px;
        color: white;
    }
`;