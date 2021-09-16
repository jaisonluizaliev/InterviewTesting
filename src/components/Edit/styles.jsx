import styled from "styled-components";

export const ContainerStyledForm = styled.div`
  background: #fff;
  padding: 30px 150px;
  width: 80%;
  margin: auto;
`;
export const StyledForm = styled.form`
  background: #022e67;
  padding: 30px;
  border: 1px solid #e93339;
`;

export const StyledLabelForm = styled.label`
  padding: 5px;
  display: block;
  

`

export const StyledParagraphForm = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 5px;
`
 
export const StyledInputForm = styled.input`
  width: 90%;
  height: 30px;
  border-radius: 4px;
  outline: unset;
  padding-left: 15px;
  font-weight: 500;

`

export const ContainerStyledButtonForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  width: 100%;
`


export const StyledButtonForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  border: 1px solid #fff;
  background: #e93339;
  width: 45%;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  :hover {
    background: #fff;
    border: 1px solid #e93339;
    color: #000;
  } 
`;