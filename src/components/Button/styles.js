import styled from 'styled-components';

export const ButtonContainer = styled.button`
    flex: 1;
    height: 64px;
    min-width: 0; /* prevent flex overflow */
    border: 1px solid #CDCDCD;
    background-color: #00AAF0;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        opacity: 0.85;
    }
`