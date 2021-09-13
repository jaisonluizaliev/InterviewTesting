import styled from 'styled-components';


export const StyledUlDetails = styled.ul`
  width: 90%;
  margin: auto;
`;

export const StyledListDetails = styled.li`
  background: #fff;
  padding: 15px;
`;

export const StyledTitleDetails = styled.h1`
  font-size: 20px;
  margin: 15px;
  text-align: center;
  font-weight: 600;
  border-bottom: 1px solid #e93339;
`;

export const StyledDivDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  margin: auto;
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  
  `

export const StyledImgDetails = styled.img`
  width: 90%;
  max-width: 400px;
  padding: 15px;
  border-radius: 15px;
  background: #022e67;
`;

export const StyledUlSeriesDetails = styled.ul`
  background: #022e67;
  width: 90%;
  margin: auto;
  padding: 15px;
  min-height: 395px;
  border-radius: 15px;
`;

export const StyledListSeriesDetails = styled.li`
  background: #fff;
  padding-left: 15px;
  :nth-child(2) {
    padding-top: 15px;
  }
  :last-child {
    padding-bottom: 15px;
  }
`;

export const StyledDivLinkDetails = styled.div`
  height: 155px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  a {
    border: 1px solid #022e67;
    color: #022e67;
    font-size: 16px;
    border-radius: 5px;
    height: 35px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a:hover {
    background: #022e67;
    color: #fff;
  }
`;

export const StyledSeriesTitleDetails = styled.h4`
  width: 100%;
  background: #e93339;
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
`;












