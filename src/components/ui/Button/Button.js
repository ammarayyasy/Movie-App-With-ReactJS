import styled, {css} from "styled-components";

const Button = styled.button`
    border: none;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    background-color: ${function(props){
        if (props.variant) {
            return props.theme.colors[props.variant]; 
        } else {
            return props.theme.colors["webku"];
        }
    }};

    ${(props) => {
        if(props.full && css){
           return "display: block; width: 100%";
        } else if (props.half){
            return "width: 250px";
        }
    }};
    
    ${(props) => {
        if(props.size){
           return props.theme.size[props.size];
        } else {
            return props.theme.size["md"];
        }
    }};

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
`;

export default Button;