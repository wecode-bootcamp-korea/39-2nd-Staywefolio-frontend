import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Roomcard from './Components/Roomcard';
import BeforeAfter from './Components/BeforeAfter';
import { BASE_URL } from '../../config';

export default function Mypage() {
  const [searchParams] = useSearchParams();
  const [isData, setIsData] = useState({});

  useEffect(() => {
    fetch(
      searchParams.toString() === ''
        ? `${BASE_URL}/booking/list?orderStatus=3`
        : `${BASE_URL}/booking/list?${searchParams.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwia2FrYW9JZCI6IjI1NjU3NzkyNTgiLCJpYXQiOjE2NzA0ODAzNTksImV4cCI6MTY3MTY4OTk1OSwiaXNzIjoic3Rhd2Vmb2xpbyJ9.4ucDsy09iwKfsWc2rD6-pleAuEQarvih0NhitoGNb9s',
        },
      }
    )
      .then(response => response.json())
      .then(result => setIsData(result));
  }, [searchParams]);

  return (
    <Container>
      <SubTitle>
        <TextBox>
          <MypageTextEn>MY PAGE</MypageTextEn>
          <MypageTextKo>마이 페이지</MypageTextKo>
        </TextBox>
        <MyInfo>
          <AboutMe>{isData.name}님 반가워요!</AboutMe>
          <TravelCount>
            스테위폴리오와 함께 {Object.keys(isData).length} 번의 여행을 했어요.
          </TravelCount>
        </MyInfo>
      </SubTitle>

      <MainTitle>
        <ReservedList>
          <AboutAcount>예약 정보</AboutAcount>
          <AboutAcount>취소 내역</AboutAcount>
          <AboutAcount>회원 정보 수정</AboutAcount>
        </ReservedList>

        <Reserved>
          <ComponentBox>
            <MyBooking>
              {/* 다가올 예약 & 이용 완료 */}
              <BeforeAfter />
            </MyBooking>
          </ComponentBox>

          {/* 룸 카드 */}
          <Roomcard isData={isData} />
          <RoomButton>FIND STAY</RoomButton>
        </Reserved>
        {Object.keys(isData).length === 0 && (
          <Empty src="./images/Mypage/traveler.png" alt="image" />
        )}
      </MainTitle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid black;
  padding: 0 2%;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: solid 3px black;
  padding: 5vh 0;
  margin: 5vh 5vw;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const TextBox = styled.div`
  text-align: center;
  margin-bottom: 10%;
`;

const MypageTextEn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 14px;
`;

const MypageTextKo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutMe = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const TravelCount = styled.div`
  font-size: 18px;
  color: #999;
  margin: 20px;
`;

// ---

const MainTitle = styled.div`
  flex-direction: column;
`;

const ReservedList = styled.div`
  font-weight: 700;
  float: left;
  font-size: 20px;
`;

const AboutAcount = styled.div`
  font-weight: 700;
  padding: 5% 0;
  margin: 5vh 5vw;

  &:hover {
    color: aquamarine;
  }
`;

const Reserved = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
`;

const ComponentBox = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const MyBooking = styled.div`
  display: flex;
  color: #1a1a1a;
  font-weight: 700;
`;

const Empty = styled.img`
  width: 400px;
  height: 250px;
`;

const RoomButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
  color: #fff;
  background-color: #000;
  border: 1px solid #000;
  margin-top: 30vh;

  &:hover {
    color: aquamarine;
  }
`;
