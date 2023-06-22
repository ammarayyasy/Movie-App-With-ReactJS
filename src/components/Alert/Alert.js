import styled from "styled-components";

function Alert(props) {
    const AlertStyled = styled.div`
        span{
            color: red;
        }
    `;
    return(
        <AlertStyled>
            <span>{props.children}</span>
        </AlertStyled>
    )
}

export default Alert;