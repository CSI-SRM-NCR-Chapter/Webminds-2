import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: ${(props) => props.backgroundColor || '#E7F1F2'};
  color: white;
  z-index: ${(props) => props.zIndex || '100'};
  padding: 0 20px;
  backdrop-filter: ${(props) => (props.overlay ? 'blur(5px)' : 'none')};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
  }
`;

const LogoAndSearchContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Logo = styled.img`
  margin-right: 20px;
  width: 50px;
  height: auto;
  cursor: pointer;
`;

const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #333;
  background-color: white;
  margin-right: 10px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
  }

  ::placeholder {
    color: #bbb;
  }
`;

const SearchButton = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #E7F1F2;
  }
`;

const NavbarItemsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = ({
  children,
  backgroundColor = "#E7F1F2",
  zIndex = 100,
  onOutsideClick,
  overlay = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <NavbarContainer
      backgroundColor={backgroundColor}
      zIndex={zIndex}
      onClick={onOutsideClick}
      overlay={overlay}
    >
      <LogoAndSearchContainer>
        <Logo src={logo} alt="logo" />
        <form onSubmit={handleSearch}>
          <SearchInput
            type="text"
            placeholder="Search..."
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton type="submit">Search</SearchButton>
        </form>
      </LogoAndSearchContainer>

      <NavbarItemsContainer>
        {children}
      </NavbarItemsContainer>
    </NavbarContainer>
  );
};

export default Navbar;
