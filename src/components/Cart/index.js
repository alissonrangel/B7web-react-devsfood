import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { CartArea, CartHeader, CartIcon, CartBody, CartText } from './styled';

export default () => {
  return (
    <CartArea>
      <CartHeader>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho (x)</CartText>
      </CartHeader>
      <CartBody>

      </CartBody>
    </CartArea>
  )
}
