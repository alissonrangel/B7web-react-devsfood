import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { 
  Container,
  ModalBody, 
  ProductPhotoArea, 
  ProductInfoArea, 
  ProductButtonArea, 
  ProductPhoto, 
  ProductName, 
  ProductPrice, 
  ProductIngredients,
  ProductButton 
} from './styled';

export default ({status, setStatus, children}) => {

  const handleModalClick = (e) =>{
    const element = e.target;
    if ( element.classList.contains('modalBg')){
      setStatus(false)
    }    
  }

  return (
    <Container 
      className="modalBg"
      status={status} 
      onClick={(e)=>handleModalClick(e)} > 
      <ModalBody>
        {children}
      </ModalBody>            
    </Container>
  )
}
