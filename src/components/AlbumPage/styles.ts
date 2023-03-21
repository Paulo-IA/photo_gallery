import styled from "styled-components";

export const GridPhotos = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(5, 1fr);
    /* gap: 10px; */
`;

export const AlbumName = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: -10px 0 30px;
    font-size: 25px;
`;