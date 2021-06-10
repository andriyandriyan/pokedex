import React from 'react';
import styled from '@emotion/styled';
import explore from '../icons/explore.png';
import pokeball from '../icons/pokeball.png';

const Wrapper = styled.div`
  position: relative;
  height: 64px;
  z-index: 3;
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: white;
  box-shadow: rgb(49 53 59 / 12%) 0px 1px 6px 0px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
    width: 28px;
  }

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const Footer: React.FC = () => (
  <Wrapper>
    <Nav>
      <Menu href="#" className="active">
        <img src={explore} alt="Explore" />
        <p>Explore</p>
      </Menu>
      <Menu href="#">
        <img src={pokeball} alt="My Pokemon" />
        <p>My Pokemon</p>
      </Menu>
    </Nav>
  </Wrapper>
);

export default React.memo(Footer);
