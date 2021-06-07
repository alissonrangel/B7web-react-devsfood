import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0, 0.16); 
  padding: 10px;
  color: #136713;
  display:flex;  
  align-items:center;
  margin-right: 10px;
  cursor: pointer;
  transition: all ease .5s;
  &:hover{
    background-color: #ddd;
  }
`;

export const ProductPhotoArea = styled.div`
  width: 100px;
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