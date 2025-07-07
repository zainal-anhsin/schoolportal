import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';


import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Add a wrapper for consistent content spacing
const ContentWrapper = styled.div`
  max-width: 1385px;
  margin-left: 34px;
  margin-right: 34px;
  margin-top: 34px;
  margin-bottom: 34px;
  width: 100%;
`;

const MainLayout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContent>
        <Navbar />
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </LayoutContainer>
  );
};

export default MainLayout; 