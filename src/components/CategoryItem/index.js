import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, CategoryImage, CartIcon, CartBody, CartText } from './styled';

export default ({data, activeCategory, setActiveCategory}) => {
  return (
    <Container 
      active={activeCategory} 
      id={data.id}
      onClick={()=>setActiveCategory(data.id)}
      data-tip={data.name}
      data-for="tip-top"
    >
      <CategoryImage src={data.image} />
    </Container>
  )
}
