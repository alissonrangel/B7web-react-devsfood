import styled from 'styled-components';

export const Container = styled.div` 
  position: fixed;
  left:0;
  top:0;
  right: 0;
  bottom:0;
  background-color: rgba(0,0,0, 0.7); 
  z-index: 900;
  display:${props=> props.status ? 'flex':'none'};
  justify-content: center;  
  align-items:center;
  
  padding: 10px;
  color: #136713;
  
  margin-right: 10px;
  cursor: pointer;
  transition: all ease .5s;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 50px #000;
  max-width: 100vw;
  max-height: 90vh; 
  overflow: auto;
`;
export const ProductInfoArea = styled.div`
  flex: 1;
  margin: 0 10px;
`; 
export const ProductButtonArea = styled.div``; 

export const ProductPhoto = styled.img`
  width: 100%;
`;
export const ProductName = styled.div`
  font-size: 20px;
  font-weight: bold;
`; 
export const ProductPrice = styled.div`
  font-size: 14px;
`; 
export const ProductIngredients = styled.div`
  font-size: 11px;
`;  

export const ProductButton = styled.img`
  width: 15px;
  height: 15px;
`;