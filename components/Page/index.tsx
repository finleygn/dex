import React, { FC } from 'react';
import Menu from '../Menu';
import { Container, ContentContainer, MenuContainer } from './style';

const Page: FC = ({ children }) => {
  return (
    <Container>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Page;
