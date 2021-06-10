import React from 'react';
import styled from '@emotion/styled';
import logo from '../icons/logo.png';
import explore from '../icons/explore.png';
import pokeball from '../icons/pokeball.png';
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

const Row = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

const Flex = styled.div`
  display: none;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  text-decoration: none;
  color: #888888;
  filter: grayscale(100%);
  transition: all .3s;

  &:hover, &.active {
    color: black;
    filter: grayscale(0);
  }

  img {
    width: 32px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Header: React.FC = () => (
  <Wrapper>
    <Nav>
      <Container>
        <Row>
          <Logo src={logo} alt="Pokedex" />
          <Flex>
            <Menu href="#" className="active">
              <img src={explore} alt="Explore" />
              <p>Explore</p>
            </Menu>
            <Menu href="#">
              <img src={pokeball} alt="My Pokemon" />
              <p>My Pokemon</p>
            </Menu>
          </Flex>
        </Row>
      </Container>
    </Nav>
  </Wrapper>
);

export default React.memo(Header);
