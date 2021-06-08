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

export default ({data}) => {
  return (
    <Container     
       
      id={data.id}
      onClick={()=>alert('clicou')}
      data-tip={data.name}
      data-for="tip-top"
    > 
      <ProductPhotoArea>
        <ProductPhoto src={data.image != "nullo" ? data.image : data.featured_image.url} />        
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
