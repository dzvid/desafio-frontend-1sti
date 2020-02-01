import React from 'react';

import { IoMdSync } from 'react-icons/io';

import { LoadingContent } from './styles';

function Loading() {
  return (
    <LoadingContent>
      <IoMdSync />
      Carregando
    </LoadingContent>
  );
}

export default Loading;
