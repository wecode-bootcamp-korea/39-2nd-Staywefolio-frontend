import React from 'react';
import styled from 'styled-components';

export default function Dropdown() {
  return (
    <Container>
      <DropdownSubTitle>
        <TitleTextEn>FIND STAY</TitleTextEn>
        <TitleTextKo>머무는 것 자체로 여행이 되는 공간</TitleTextKo>
      </DropdownSubTitle>
      <DropdownBox>
        <FilterPlaceDate>
          <Keyword>
            <KeywordText>여행지/숙소</KeywordText>
            <InputButton />
          </Keyword>
          <Area>
            <AreaText>국내전체</AreaText>
          </Area>
          <Checkinout>
            <CheckinInfo>
              <CheckinList>
                <CheckInText>체크인</CheckInText>
                <CheckInButton>aa</CheckInButton>
              </CheckinList>
            </CheckinInfo>
            <CheckOutInfo>
              <CheckOutList>
                <CheckOutText>체크아웃</CheckOutText>
                <CheckOutButton>bb</CheckOutButton>
              </CheckOutList>
            </CheckOutInfo>
          </Checkinout>
        </FilterPlaceDate>
        <FilterStayType>
          <NumberOfPeople>인원</NumberOfPeople>
          <Price>가격 범위</Price>
          <StayType>스테이 유형</StayType>
          <Theme>테마</Theme>
        </FilterStayType>
        <SortingBox>
          <SortingList>
            <Recommend>최신순</Recommend>
            <NewRoom>추천순</NewRoom>
            <Popularity>인기순</Popularity>
          </SortingList>
        </SortingBox>
      </DropdownBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 20px 0 20px;
  display: block;
`;
const DropdownSubTitle = styled.div`
  text-align: center;
  height: 206px;
  width: 100%;
  padding-top: 70px;
`;

const TitleTextEn = styled.div`
  font-size: 18px;
  letter-spacing: 14px;
  font-family: Lato-Bold;
  color: #000;
  text-indent: 14px;
`;

const TitleTextKo = styled.div`
  font-size: 15px;
  color: #000;
  font-weight: 500;
  line-height: 28px;
  margin: 10px 0 0;
`;

// ---

const DropdownBox = styled.div`
  display: flex;
  margin: 0 auto;
  border-top: 3px solid #000;
  align-items: center;
  flex-direction: column;
`;

const FilterPlaceDate = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
`;

const Keyword = styled.div`
  display: block;
`;

const KeywordText = styled.span`
  font-size: 14px;
  color: #000;
  font-weight: 700;
  margin-right: 10px;
  line-height: 36px;
`;

const InputButton = styled.input`
  border: 1px solid #e4e4e4;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  font-size: 14px;
  color: #000;
  font-weight: 500;
  padding: 0 10px;
`;

const Area = styled.div`
  margin-left: 12px;
  border: none;
`;

const AreaText = styled.button`
  background-color: white;
  border: 1px solid #f1f1f1;
  font-weight: 500;
  text-align: left;
  padding: 0 15px;
  margin: 0 5px 0 0;
  border-radius: 5px;
  width: 100px;
  height: 30px;
`;

const Checkinout = styled.div`
  display: flex;
  justify-content: center;
`;

const CheckinInfo = styled.ul`
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const CheckinList = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const CheckInText = styled.span`
  z-index: 10;
  bottom: 10px;
  left: 48px;
  font-weight: 700;
  font-size: 14px;
`;

const CheckInButton = styled.button`
  background-color: white;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin-left: 10px;
  width: 60px;
  height: 30px;
`;

const CheckOutInfo = styled.ul`
  display: flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 30px;
`;

const CheckOutList = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  list-style: none;
`;

const CheckOutText = styled.span`
  z-index: 10;
  bottom: 10px;
  right: 175px;
  font-weight: 700;
  font-size: 14px;
`;

const CheckOutButton = styled.button`
  background-color: white;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin-left: 10px;
  width: 60px;
  height: 30px;
`;

// ---
const FilterStayType = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
`;
const NumberOfPeople = styled.button`
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 1px solid #f1f1f1;
  background-size: 20px 20px;
  border-radius: 5px;
  width: 150px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  padding: 0 23px 0 12px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;

const Price = styled.button`
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 1px solid #f1f1f1;
  background-size: 20px 20px;
  border-radius: 5px;
  width: 150px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  padding: 0 23px 0 12px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;
const StayType = styled.button`
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 1px solid #f1f1f1;
  background-size: 20px 20px;
  border-radius: 5px;
  width: 150px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  padding: 0 23px 0 12px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;
const Theme = styled.button`
  position: relative;
  cursor: pointer;
  background-color: white;
  border: 1px solid #f1f1f1;
  background-size: 20px 20px;
  border-radius: 5px;
  width: 150px;
  line-height: 30px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  padding: 0 23px 0 12px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;

// ---

const SortingBox = styled.div`
  margin-top: 100px;
  border-bottom: 2px solid #000;
  font-size: 14px;
  line-height: 2px;
`;
const SortingList = styled.ul`
  display: flex;
  padding: 0 14px 14px;
`;
const Recommend = styled.li`
  display: flex;
  padding: 0 10px 0 10px;
  cursor: pointer;
`;
const NewRoom = styled.li`
  display: flex;
  padding: 0 10px 0 10px;
  cursor: pointer;
`;
const Popularity = styled.li`
  display: flex;
  padding: 0 10px 0 10px;
  cursor: pointer;
`;
