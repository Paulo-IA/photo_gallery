import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #CCC;
    box-shadow: 0 0 4px #CCC;
    border-radius: 5px;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.div`
    height: 20px;
    display: flex;
    align-items: center;
    opacity: .5;
`;

export const Icon = styled.img``;

export const AlbumNumber = styled.p`
    height: 20px;
    margin-left: 8px;
    font-size: 15px;
`;

export const AlbumTitle = styled.div`
    margin-top: 15px;
    font-size: 18px;
    font-weight: 500;
`;