import styled from 'styled-components';

export const Container = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props=>props.active == props.id? '#fff':'#aae09a'};
  display:flex;
  justify-content: center;
  align-items:center;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease .5s;
  &:hover{
    background-color: #eee;
  }
`;

export const CategoryImage = styled.img`
  width: 55px;
  height: 55px;
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

export const CartText = styled.div`
  font-size: 17px;
  color: white;
`;

export const CartBody = styled.div`
  
`;

export const Link = styled.img`
  width: 23px;
  height: 23px;
`;