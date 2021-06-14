import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { 
  Container, 
  ProductPhotoArea, 
  ProductInfoArea, 
  ProductButtonArea, 
  ProductPhoto, 
  ProductName, 
  ProductPrice, 
  ProductIngredients,
  ProductButton 
} from './styled';

export default ({data, onClick}) => {


  const handleClick = () => {
    onClick(data);
  }

  return (
    <Container     
       
      id={data.id}
      onClick={handleClick}
      data-tip={data.name}
      data-for="tip-top"
    > 
      <ProductPhotoArea>
        <ProductPhoto src={data.image != "null" ? data.image : data.featured_image} />        
      </ProductPhotoArea>
      <ProductInfoArea>
        <ProductName>
            {data.name}
        </ProductName>
        <ProductPrice>
           R$ {data.price}
        </ProductPrice>
        <ProductIngredients>
            {data.ingredients}
        </ProductIngredients>
      </ProductInfoArea>
      <ProductButtonArea>
        <ProductButton src="/assets/next.png" />
      </ProductButtonArea>
      
    </Container>
  )
}
