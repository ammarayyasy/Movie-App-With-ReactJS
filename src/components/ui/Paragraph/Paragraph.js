import styled from "styled-components";

const Paragraph = styled.p`
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

    ${(props) => {
        if (props.color) {
            return `color: ${props.theme.colors[props.color]}`;
        } else {
            return `color: ${props.theme.colors["webku"]}`;
        }
    }};
`

export default Paragraph;