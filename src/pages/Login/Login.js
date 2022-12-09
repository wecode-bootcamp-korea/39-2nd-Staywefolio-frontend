import React from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './OAuth';

export default function Login() {
  return (
    <Contents>
      <ContainerSubTitle>
        <LoginTextEn>LOGIN</LoginTextEn>
        <LoginTextKr>로그인</LoginTextKr>
        <BlackLine />
      </ContainerSubTitle>
      <LinkBox>
        <LoginLink href={KAKAO_AUTH_URL}>
          <LoginButton src="./images/Login/kakao-login2.png" />
        </LoginLink>
      </LinkBox>
    </Contents>
  );
}

const Contents = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  font-size: 32px;
`;

const ContainerSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25vh;
  padding-top: 3vh;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
`;

const LoginTextEn = styled.div`
  font-size: 60%;
  letter-spacing: 12px;
  text-indent: 12px;
  color: #000;
`;

const LoginTextKr = styled.div`
  font-size: 60%;
  line-height: 5vh;
  margin: 4vh 0;
  color: #000;
`;

const BlackLine = styled.div`
  border-bottom: 1px solid black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10vw;
`;

const LinkBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
  margin-bottom: 380px;
`;

const LoginButton = styled.img`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10vw;

  cursor: pointer;
`;

const LoginLink = styled.a`
  justify-content: center;
  text-align: center;
  padding: auto;
  text-align: center;
`;
