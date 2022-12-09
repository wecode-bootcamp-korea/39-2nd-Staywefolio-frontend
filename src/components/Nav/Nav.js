import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import WhereTo from './WhereTo';
import WhenTo from './WhenTo';

export default function Nav() {
  const isLoginCheck = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <Header>
      <Link to="/">
        <Logo src="/images/NavImages/logo.jpg" />
      </Link>
      <ButtonWrap>
        <WhereTo />
        <WhenTo />
      </ButtonWrap>

      {/* <Box>
        <Menu to="/room-list">FIND STAY</Menu>
      </Box> */}
      {isLoginCheck ? (
        <LoginContainer>
          <LoginBox>
            <Menu to="/room-list">FIND STAY</Menu>
          </LoginBox>
          <LoginBox to="/mypage">MYPAGE</LoginBox>
          <LoginBox to="/" onClick={handleLogout}>
            LOGOUT
          </LoginBox>
        </LoginContainer>
      ) : (
        <LoginContainer>
          <LoginBox>
            <Menu to="/room-list">FIND STAY</Menu>
          </LoginBox>
          <LoginBox to="/login">LOGIN</LoginBox>
        </LoginContainer>
      )}
    </Header>
  );
}

const Header = styled.div`
  height: 76px;
  position: relative;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 130px;
  height: 90px;
`;

const ButtonWrap = styled.div`
  /* position: absolute; */
  /* left: auto; */
  /* right: 545px; */
  /* margin-right: 140px; */
  /* margin-left: -160px; */
  text-align: center;
`;

const Box = styled.div`
  margin: 0 -1000px 0 150px;
`;
const LoginContainer = styled.div`
  text-decoration: none;
`;

const LoginBox = styled(Link)`
  height: 15px;
  margin-right: 20px;
  text-decoration: none;
  color: grey;
`;

const Menu = styled(Link)`
  text-decoration: none;
  color: black;
`;
