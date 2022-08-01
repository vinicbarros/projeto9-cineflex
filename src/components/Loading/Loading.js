import Load from './spin.gif';
import styled from 'styled-components';

export default function Loading() {
    return (
        <LoadPage>
            <img src={Load} alt=''/>
            <h1>Loading...</h1>
        </LoadPage>
    );
}

const LoadPage = styled.div`
    font-family: 'Roboto';
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-inline: auto;

    h1{
    margin-top: 20px;
    font-size: 30px;
    font-weight: 400;
    color: #293845;
}
`;