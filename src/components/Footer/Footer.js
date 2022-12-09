import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  const notionURL = 'https://www.notion.so/04eef3a312024a05bb1bb7742b7afe21';
  const githubURL =
    'https://github.com/wecode-bootcamp-korea/39-2nd-stawefolio-frontend';

  const FE_KOO = 'https://github.com/sujeong-dev';
  const FE_KIM = 'https://github.com/Sing-DongKi';
  const FE_AHN = 'https://github.com/Dave-ahn';
  const BE_LEE_F = 'https://github.com/exnyxxng';
  const BE_LEE_M = 'https://github.com/myeongseoklee';

  return (
    <Container>
      <TeamInfoBox>
        <AboutTeam>About Team</AboutTeam>
        <MemberInfoBox>
          <Position>
            Front-End Developer :
            <MemberInfo onClick={() => window.open(FE_KOO)}>구수정</MemberInfo>
            <MemberInfo onClick={() => window.open(FE_KIM)}>김동기</MemberInfo>
            <MemberInfo onClick={() => window.open(FE_AHN)}>안상준</MemberInfo>
          </Position>
          <Position>
            Back-End Developer :
            <MemberInfo onClick={() => window.open(BE_LEE_F)}>
              이은영
            </MemberInfo>
            <MemberInfo onClick={() => window.open(BE_LEE_M)}>
              이명석
            </MemberInfo>
          </Position>
        </MemberInfoBox>
      </TeamInfoBox>
      <LogoBox>
        <TeamLogoImg src="/images/footer/TeamLogo.png" alt="teamlogo" />
        <SocialEmojis>
          <LogoImg
            src="/images/footer/NotionLogo.png"
            alt="notion"
            onClick={() => window.open(notionURL)}
          />
          <LogoImg
            src="/images/footer/GithubLogo.png"
            alt="github"
            onClick={() => window.open(githubURL)}
          />
        </SocialEmojis>
      </LogoBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3vh 5vw;
  background-color: #f5f5f5;
  /* height: 250px; */

  @media screen and (min-width: 700px) {
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    height: 40%;
  }
`;

const TeamInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  margin-left: 5vw;

  @media screen and (min-width: 300px) {
    display: flex;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const AboutTeam = styled.div`
  width: 300px;
  color: #222222;
  font-weight: 700;
  font-size: 50px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const MemberInfoBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 300px) {
    display: flex;
    width: 100%;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Position = styled.div`
  display: flex;
  text-align: start;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  width: 90%;
  margin-right: 3vw;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  color: #ffffff;
  background-color: #222222;
  min-width: 80px;
  font-weight: 500;
  border-radius: 3px;
  width: 6vw;
  height: 5vh;
  margin: 5vh 0.3vw;
  outline: 0;

  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: white;
    transition: 0.2s;
    color: #000000;
    background-color: #ffffff;
    border: 1px #345816 solid;
    font-size: 130%;
    width: 8vw;
    height: 7vh;
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 200px;

  @media screen and (min-width: 300px) {
    display: flex;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

const TeamLogoImg = styled.img`
  cursor: pointer;
  transition: 1sec;
  width: 200px;
  height: 150px;
`;

const SocialEmojis = styled.div`
  display: flex;
  padding-bottom: 5vh;
  cursor: pointer;
`;

const LogoImg = styled.img`
  display: flex;
  align-items: center;
  width: 4vw;
  margin: 0 2vw;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: white;
    transition: 0.2s;
    width: 10vw;
  }
`;
