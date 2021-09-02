import React from 'react';
import HeaderMenu from './HeaderMenu';
import { Container, LogoWrapper, MenuWrapper, MenuButton } from './styles';

const Header = () => {
  return (
    <Container>
      <LogoWrapper></LogoWrapper>
      <MenuWrapper>
        <MenuButton>회사소개</MenuButton>
        <MenuButton>음원</MenuButton>
        <MenuButton>투자전략</MenuButton>
      </MenuWrapper>
      <HeaderMenu />
    </Container>
  );
};

export default Header;
