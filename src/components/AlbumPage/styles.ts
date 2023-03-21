import styled from "styled-components";

export const GridPhotos = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5, 1fr);
    
    @media (max-width: 1244px) {
        grid-template-columns: repeat(4, 1fr);   
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);   
    }
    
    @media (max-width: 500px) {
        grid-template-columns: 1fr
    }
`;

export const AlbumName = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -10px 0 30px;
    font-size: 25px;

    @media (max-width: 750px) {
        
    }
`;