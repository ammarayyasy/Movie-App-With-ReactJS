import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 2rem;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }
  
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledMovie;