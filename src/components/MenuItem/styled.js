import styled from 'styled-components';

export const LinkArea = styled.a`
  display: flex;
  justify-content: center;
  align-items:center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: ${props=> props.active ? '#004700':'transparent'};
  margin-bottom: 10px;
  &.active{
    
  }
`;

export const LinkIcon = styled.img`
  width: 34px;
  height: 34px;
`;