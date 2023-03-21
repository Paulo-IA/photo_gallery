import styled from "styled-components";

export const AlbumsGrid = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3 , 1fr);
    
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`;