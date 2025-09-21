import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 360px; /* matches 4 buttons with gaps */
    padding: 12px;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    gap: 8px;
    width: 100%;
`;

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    gap: 8px;
`;

