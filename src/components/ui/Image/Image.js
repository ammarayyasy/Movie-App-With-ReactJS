import styled from "styled-components";

const Image = styled.img`
    max-width: 100%;

    height: auto;
    border-radius: 25px;

    ${(props) => {
        if (props.mb) {
            return `margin-bottom: ${props.theme.margin[props.mb]}`;
        } else {
            return `margin-bottom: ${props.theme.margin["1"]}`;
        }
    }};

    ${(props) => {
        if (props.mt) {
            return `margin-top: ${props.theme.margin[props.mt]}`;
        } else {
            return `margin-top: ${props.theme.margin["1"]}`;
        }
    }};
`

export default Image