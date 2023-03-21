import styled from "styled-components";

export const Container = styled.div`
    width: 230px;
    height: 300px;
    padding: 10px;
    border: 1px solid #CCC;
    box-shadow: 0 0 10px #CCC;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    cursor: pointer;
    transition: all ease .2s;

    &:hover {
        box-shadow: 0 0 10px greenyellow;
    }

    &:last-child {
        margin-bottom: 50px;
    }
`;

export const Photo = styled.img`
    
`;

export const PhotoTitle = styled.div`
    font-size: 15px;
    height: 50px;
`;