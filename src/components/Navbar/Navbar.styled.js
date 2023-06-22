import styled from "styled-components";

const NavbarStyled = styled.div`
    background-color: #086375;
    padding: 1rem;
    color: white;
    
    nav{
        display: flex;
        justify-content: space-between;
    }

    ul {
        list-style: none;
        margin-top: 1rem;
        display: none;
    }

    li {
        margin-bottom: 1rem;
    }

    .show {
        display: block; 
    }

    @media (min-width: 768px) {
        nav {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }

        h1 {
            margin: 0;
        }

        ul {
            display: flex;
            flex-direction: row;
            margin-bottom: 1rem;
        }

        li {
            margin: 0 1rem;
        }

        h2{
            display: none;
        }
    }
`;

export default NavbarStyled;