import React from 'react';
import styled from '@emotion/styled';
import logo from '../icons/logo.png';
import Container from './Container';

const Wrapper = styled.div`
  position: relative;
  height: 50px;
  z-index: 3;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    height: 80px;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: white;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  padding: 0.5rem;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Logo = styled.img`
  height: 40px;

  @media (min-width: 768px) {
    height: 60px;
  }
`;

const Header: React.FC = () => (
  <Wrapper>
    <Nav>
      <Container>
        <Logo src={logo} alt="Pokedex" />
      </Container>
    </Nav>
  </Wrapper>
);

export default React.memo(Header);
