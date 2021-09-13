import styled from 'styled-components';

export const StyledMain = styled.section`
  background-color: #e93339;
  padding: 90px 45px 90px  ;
  border-radius: 4px;
`;

export const StyledMainEmpty = styled.main`
  height: 200vh;
  white-space: nowrap;
  ::after {
    position: relative;
    left: 90%;
    content: "Limpe o Campo de busca ou atualize a pagina";
    
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  
`;

export const StyledParagraph = styled.p`
  color: #fff;
  font-size: 11px;
  margin-right: 1rem;
  @media (min-width: 993px) {
    font-size: 90%;
  }

`;




export const StyledInput = styled.input`
  padding-left: 14px ;
  height: 15px;
  width: 40%;
  max-width: 100px;
  border: 1px solid rgba(0,0,0,.12);
  outline: 0;
  border-radius: 4px;
  @media (min-width: 993px) {
    height: 30px;
    max-width: 200px;
  }
`;

export const StyledUl = styled.ul`
  width: 90%;
  margin: auto;
  background: #fff;
  padding: 19px 15px;
  display: grid;
  border-radius: 5px;
  grid-template-columns: 1fr 1fr ;
  gap: 15px .5rem;
  @media (min-width: 993px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  
`;

export const StyledLi = styled.li`
  width: 95%;
  margin: auto;
  background: #022e67;
  border-radius: 4px;
  box-shadow: 1px 3px rgba(0, 0, 0, 0.12);
`;

export const StyledImg = styled.img`
  width: 95%;
  margin: 5px auto;
  display: block;
  height: 200px;
  object-fit: cover;
`
export const StyledTitle = styled.h4`
  text-align: center;
  @media (max-width: 670px) {
    font-size: 80%;
  }
  @media (min-width: 993px) {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 199px;
    white-space: nowrap;
  }
`;

export const StyledDiv = styled.div`
  background: #e93339;
  width: 95%;
  padding: 5px;
  margin: 6px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-size: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;

    color: #fff;
    background:#022e67 ;
    border: 1px solid #022e67;
    margin: 5px;
    height: 30px;
    border-radius: 4px;
    box-shadow: 1px 3px rgba(0, 0, 0, 0.12);
  }
  a:hover {
    color: #022e67;
    background: #fff;
  }
`;

