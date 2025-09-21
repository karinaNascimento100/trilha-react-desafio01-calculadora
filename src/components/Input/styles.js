import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 88px;
    background-color: #222831;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
    border-radius: 8px;
    padding: 4px 8px;

    .expression {
        height: 24px;
        color: #9aa0a6;
        font-size: 14px;
        text-align: right;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    input {
        width: 100%;
        height: 56px;
        background-color: transparent;
        border: 0;
        display: block;
        padding: 0;
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        text-align: right;
    }
`