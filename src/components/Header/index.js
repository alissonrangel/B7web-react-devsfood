import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Container, Logo, SearchInput, CartBody, CartText } from './styled';

export default ({search, onSearch}) => {

  const [inputActive, setInputActive] = useState(search == ''? false : true);
  const [inputText, setInputText] = useState('');

  const handleInputFocus = () => {
    setInputActive(true);
  }
  const handleInputBlur = () => {
    if ( search.length == 0 ){
      setInputActive(false);
    } else {
      setInputActive(true);
    }
  }

  useEffect(()=>{
    if ( search.length == 0 ){
      setInputActive(false);
    }
  },[search])

  return (
    <Container>
      <Logo src="/assets/logo.png" />
      <SearchInput 
        type="text" 
        placeholder="Digite um produto..." 
        active={inputActive}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={search}
        onChange={(e)=>onSearch(e.target.value)}
      />
    </Container>
  )
}
