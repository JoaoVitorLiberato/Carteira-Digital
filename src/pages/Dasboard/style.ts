import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const ContentWalletBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        width: 100%;

    }
`;

export const ContentMessageBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

    }
`;

export const ContentHistoryBox = styled.div`
    width: 100%;
    height: auto;
    flex: 1;

`;

export const ContentComponentsFinals = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 780px){
        flex-direction: column;
    }
`;