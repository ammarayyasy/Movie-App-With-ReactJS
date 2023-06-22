import styled from "styled-components";

const DetailMovieStyled = styled.div`
    margin-bottom: 5rem;
    padding: 1rem;

    section {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .hero__left {
        margin-bottom: 1rem;
    }

    @media (min-width: 992px) {
    max-width: 1200px;

    section {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    .hero__left {
        
    }

    .hero__right {
        flex-basis: 60%;
    }
    }
`;

export default DetailMovieStyled;