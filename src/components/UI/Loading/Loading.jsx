import React from 'react'
import { StyledLoading } from './styles';

function Loading({children}) {
  return (
    <StyledLoading>
      {children}
    </StyledLoading>
  );
}

export default Loading;