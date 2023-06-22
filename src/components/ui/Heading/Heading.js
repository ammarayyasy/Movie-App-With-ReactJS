import styled, {css} from "styled-components";

const Heading = styled.h2`
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
        if (props.size === "sm") {
            return "font-size: 1.953rem";
        } else if (props.size === "md") {
            return "font-size: 2.441rem";
        } else if (props.size === "lg") {
            return "font-size: 3.052rem";
        }
    }};

    ${(props) => {
        if (props.color) {
            return `color: ${props.theme.colors[props.color]}`;
        } else {
            return `color: ${props.theme.colors["webku"]}`;
        }
    }};

    ${(props) => {
        if(props.center && css){
           return "text-align: center";
        } else if (props.left){
            return "text-align: left";
        } else if (props.right){
            return "text-align: right";
        } else if (props.justify){
            return "text-align: justify";
        }
    }};

`

export default Heading;