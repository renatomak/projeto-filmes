import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  background-color: rgba(205, 55, 0, 0.2);
`;
/**fixar o menu no topo https://www.eversondaluz.com.br/fixar-menu-no-topo-css */
export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  color: #fff;
  background-color: #cd3700;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 0 0 10px 10px;
  opacity: 0.95;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  strong {
    font-size: 30px;
    margin: auto;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 25px;
    background-color: #cd3700;
    width: 100%;
    height: 40px;
    margin-top: -30px;
    text-align: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  strong {
    padding-bottom: 15px;
    font-size: 20px;
  }
`;
