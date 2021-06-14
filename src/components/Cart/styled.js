import styled from 'styled-components';

export const CartArea = styled.div`
  background-color: #136713;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: fixed;
  bottom: 0;
  right: 30px;
`;

export const CartHeader = styled.div`  
  height: 50px;
  width: 290px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 10px;
`;

export const CartText = styled.div`
  flex: 1;
  font-size: 17px;
  color: white;
`;

export const CartBody = styled.div`
  display: ${props=> props.show ? 'block' : 'none'};
  color: #fff;
`;

export const Link = styled.img`
  width: 23px;
  height: 23px;
`;

export const ProductsArea = styled.div`
  flex: 1;
  margin: 0 10px;
`; 
export const ProductItem = styled.div`
  display: flex;
  margin: 10px; 
`; 

export const ProductPhoto = styled.img`
  width: 64px;
  border-radius: 10px;
`;

export const ProductInfoArea = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: bold;
`; 
export const ProductPrice = styled.div`
  font-size: 13px;
`;

export const ProductQuantityArea = styled.div`
  display: flex;
  align-items: center;
`;
export const ProductQtImage = styled.img`
  width: 13px;
  height: 13px;
  cursor: pointer;
`;
export const ProductQtText = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin: 0 5px;
`;
