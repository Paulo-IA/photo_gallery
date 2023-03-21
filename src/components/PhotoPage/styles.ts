import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const PhotoTitle = styled.div`
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -10px 0 30px;
    font-size: 25px;
    
    @media (max-width: 800px) {
        margin: 10px 0 30px;
        padding-left: 25px;
    }
`;

export const PhotoContainer = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const Photo = styled.img`
    padding: 25px;
    border: 1px solid #ccc;

    @media (max-width: 720px) {
        width: 90%;
    }
`;