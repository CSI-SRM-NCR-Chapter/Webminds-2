import React from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import LastSearch from './components/LastSearch';
import Navbar from './components/Navbar';
import PromoCards from './components/Promocards'; // Ensure the file name matches this import exactly
import './App.css';
import backgroundImage from './assets/bgimg.jpg';
import offerImage1 from './assets/offer1.jpeg';
import offerImage2 from './assets/offer2.jpeg';
import offerImage3 from './assets/offer3.jpeg';
import offerImage4 from './assets/offer4.jpeg';

// Define a NavbarItem component using styled-components
const NavbarItem = styled.div`
  margin: 0 15px;
  cursor: pointer;
`;

// Define styles for the hero component
const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Full height of viewport */
  background-image: url(${backgroundImage}); 
  background-size: cover;
  background-position: center;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* 70% transparency black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchInput = styled.input`
  padding: 12px; /* Increase padding */
  border-radius: 8px; /* Rounder corners */
  border: none;
  background-color: white; /* Set background color to white */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow effect */
  margin: 10px; /* Add margin */
  font-size: 16px; /* Increase font size */
  color: #333; /* Set text color */
  flex: 1; /* Take up remaining space */
  max-width: 300px; /* Set max-width */
`;

const SearchButton = styled.button`
  padding: 12px 20px; /* Increase padding */
  border-radius: 8px; /* Rounder corners */
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px; /* Increase font size */
  margin: 10px; /* Add margin */

  &:hover {
    background-color: #0056b3;
  }
`;

const MainContainer = styled.div `
  background-color: #E8F0F0; /* Light blue color */
`;

// Define the SearchComponent function
const SearchComponent = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Departure Airport" />
      <SearchInput type="text" placeholder="Arrival Airport" />
      <SearchInput type="number" placeholder="Number of Travelers" />
      <SearchInput type="date" placeholder="Date" />
      <SearchButton>Search</SearchButton>
    </SearchContainer>
  );
};

const OfferContainer = styled.div `
  display: flex;
  justify-content: center;
  margin: 0 20px; /* Equal outer margin for both columns */

  @media screen and (max-width: 768px) {
    overflow-x: auto; /* Allow horizontal scrolling */
  }
`;

const OfferCardContainer = styled.div `
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 120px;

  @media screen and (max-width: 768px) {
    gap: 20px; /* Reduce gap for better spacing on mobile */
  }
`;

const OfferCard = styled.div `
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%; /* Each column takes up 100% of the width */
`;

const OfferImage = styled.img `
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

function App() {
  return (
    <div>
      <Navbar backgroundColor="darkblue">
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Contact</NavbarItem>
      </Navbar>
      {/* Hero Component */}
      <HeroContainer>
        <HeroOverlay>
          <SearchComponent />
        </HeroOverlay>
      </HeroContainer>
      <h1>Welcome to your One Stop Travel Partner</h1>
      {/* Offers Section */}
      <OfferContainer>
        <OfferCardContainer>
          <OfferCard>
            <OfferImage src={offerImage1} alt="Offer 1" />
            <p>Offer 1 Description Line 1</p>
            <p>Offer 1 Description Line 2</p>
          </OfferCard>
          <OfferCard>
            <OfferImage src={offerImage2} alt="Offer 2" />
            <p>Offer 2 Description Line 1</p>
            <p>Offer 2 Description Line 2</p>
          </OfferCard>
          <OfferCard>
            <OfferImage src={offerImage3} alt="Offer 3" />
            <p>Offer 3 Description Line 1</p>
            <p>Offer 3 Description Line 2</p>
          </OfferCard>
          <OfferCard>
            <OfferImage src={offerImage4} alt="Offer 4" />
            <p>Offer 4 Description Line 1</p>
            <p>Offer 4 Description Line 2</p>
          </OfferCard>
        </OfferCardContainer>
      </OfferContainer>
      <main className="main-content">
        <PromoCards />
        <LastSearch />
      </main>
      <Footer />
    </div>
  );
}


export default App;
