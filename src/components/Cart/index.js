import React, {useState} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  CartArea,
  CartHeader, 
  CartIcon, 
  CartBody, 
  CartText,
  ProductsArea,
  ProductItem,
  ProductPhoto,
  ProductInfoArea,
  ProductName,
  ProductPrice,
  ProductQuantityArea,
  ProductQtImage,
  ProductQtText } from './styled';


export default () => {

  const dispatch = useDispatch();

  const products = useSelector(state=>state.cart.products);

  const [show, setShow] = useState(true);

  const handleCartClick = ()=>{
    setShow(!show);
  }

  const handleProductChange = (key, type)=>{    
      dispatch({
        type: 'CHANGE_PRODUCT',
        payload:{
          key,
          type
        }
    })
  }

  return (
    <CartArea>
      <CartHeader onClick={handleCartClick}>
        <CartIcon src="/assets/cart.png" />
        <CartText>Meu Carrinho ({products.length})</CartText>
        { show &&
          <CartIcon src="/assets/down.png" />
        }
      </CartHeader>
      <CartBody show={show}>
        {/* <div style={{width: 50, height: 300, backgroundColor: 'red'}}/> */}
        <ProductsArea>
          { products.length > 0 &&
          
            products.map((item, index)=> (
              <ProductItem key={item.id}>
                <ProductPhoto src={ item.featured_image == null ? item.image : item.featured_image}/>
                <ProductInfoArea>
                  <ProductName>
                    {item.name}
                  </ProductName>
                  <ProductPrice>
                    R$ {item.price.toFixed(2)}
                  </ProductPrice>
                </ProductInfoArea>
                <ProductQuantityArea>
                  <ProductQtImage 
                   onClick={()=>handleProductChange(index,'-')}
                   src="/assets/minus.png"  />
                  <ProductQtText>{item.qt}</ProductQtText>
                  <ProductQtImage 
                   onClick={()=>handleProductChange(index,'+')}
                   src="/assets/plus.png"  />                  
                </ProductQuantityArea>
              </ProductItem>
          ))}
        </ProductsArea>
      </CartBody>
    </CartArea>
  )
}
