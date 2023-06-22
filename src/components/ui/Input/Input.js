import styled from "styled-components";

const Input = styled.input`
    outline: none;
    padding: 1rem 0.5rem;
    border-radius: 10px;
    border: 1px solid #64748b;
    

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

export default Input;