import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function RoomList() {
  return (
    <Contents>
      <SubTitle>
        <Tit>FIND STAY</Tit>
        <Txt>머무는 것 자체로 여행이 되는 공간</Txt>
      </SubTitle>
      <RoomFiter>
        <Sorting>
          <DayFilter>
            <Keyword>
              <KeywordTit>여행지/숙소</KeywordTit>
              <KeywordInput type="text" />
            </Keyword>
            <FilterArea>
              <SelectBtn type="button">국내전체</SelectBtn>
            </FilterArea>
            <Check>
              <InOut>
                <li>
                  <CheckIn>체크인</CheckIn>
                </li>
                <li>
                  <CheckOut>체크아웃</CheckOut>
                </li>
              </InOut>
              <DatePick>
                <DatePicker>
                  <Date>
                    <DateInput
                      type="text"
                      placeholder="체크인"
                      //img태그의 alt와 같은 개념
                      aria-label="체크인"
                    />
                  </Date>
                  <Date>
                    <DateInput
                      type="text"
                      placeholder="체크아웃"
                      aria-label="체크아웃"
                    />
                  </Date>
                </DatePicker>
              </DatePick>
            </Check>
          </DayFilter>
          <OtherFilter>
            <DropDownBtn>
              <SelectBtn type="button">인원</SelectBtn>
            </DropDownBtn>
            <DropDownBtn>
              <SelectBtn type="button">가격 범위</SelectBtn>
            </DropDownBtn>
            <DropDownBtn>
              <SelectBtn type="button">스테이 유형</SelectBtn>
            </DropDownBtn>
            <DropDownBtn>
              <SelectBtn type="button">테마</SelectBtn>
            </DropDownBtn>
          </OtherFilter>
          <SearchBtnWrap>
            <SearchBtn type="button">SEARCH</SearchBtn>
          </SearchBtnWrap>
          <OrderWrap>
            <OrderMenu>
              <li>• 최신순</li>
              <li>• 높은 가격순</li>
              <li>• 낮은 가격순</li>
            </OrderMenu>
          </OrderWrap>
        </Sorting>
      </RoomFiter>
      <FindstayList>
        <FirstWrap>
          <FirstBox>
            <LinkTo to="/Booking">
              <InfoWrap>
                <Name>
                  스테이보다
                  <Category>민박</Category>
                </Name>
                <ClearFix></ClearFix>
                <Info>
                  <AddressInfo>
                    <Address>경기/남양주시</Address>
                    <br />
                    기준 2명 &nbsp; (최대 5명)
                    <br />
                    ₩300,000 ~ ₩500,000
                  </AddressInfo>
                  <Reservation>예약하기</Reservation>
                </Info>
              </InfoWrap>
              <RoomImage>
                <Thumbnail src="/images/kimdongki/kit.jpg" />
              </RoomImage>
            </LinkTo>
          </FirstBox>
        </FirstWrap>
      </FindstayList>
    </Contents>
  );
}

const Contents = styled.div`
  position: relative;
  min-height: 800px;
`;

const SubTitle = styled.div`
  width: 100%;
  max-width: 1330px;
  height: 206px;
  margin: 0 auto;
  padding: 70px 20px;
  text-align: center;
`;

const Tit = styled.div`
  color: ${props => props.theme.black};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 14px;
  text-indent: 14px;
`;

const Txt = styled.div`
  margin: 10px 0 0;
  color: ${props => props.theme.black};
  font-size: 15px;
  font-weight: 500;
  line-height: 28px;
`;

const RoomFiter = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  min-width: 1150px;
  max-width: 1330px;
`;

const Sorting = styled.div`
  position: relative;
  margin: 0 auto;
  border-top: 3px solid #000;
  z-index: 20;
`;

const DayFilter = styled.div`
  display: flex;
  position: relative;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
`;

const Keyword = styled.div``;

const KeywordTit = styled.span`
  margin-right: 10px;
  color: ${props => props.theme.black};
  font-size: 14px;
  font-weight: 700;
  line-height: 36px;
`;

const KeywordInput = styled.input`
  width: 200px;
  height: 36px;
  padding: 0 10px;
  color: ${props => props.theme.black};
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  vertical-align: middle;
`;

const FilterArea = styled.div`
  margin-left: 12px;
  border: none;

  button {
    width: 140px;
    margin: 0 5px 0 0;
    padding: 0 15px;
  }
`;

const SelectBtn = styled.button`
  display: block;
  width: 200px;
  margin-right: 8px;
  padding: 0 23px 0 12px;
  color: ${props => props.theme.black};
  background: ${props => props.theme.white}
    url(/images/kimdongki/arw_select.png) no-repeat 95% 50%;
  background-size: 20px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  line-height: 36px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;

const Check = styled.div`
  display: block;
  position: relative;
  width: 522px;
  height: 36px;
`;

const InOut = styled.ul`
  list-style: none;

  li {
    list-style: none;
  }
`;

const CheckIn = styled.span`
  position: absolute;
  bottom: 10px;
  left: 48px;
  font-size: 14px;
  font-weight: 700;
  z-index: 10;
`;

const CheckOut = styled.span`
  position: absolute;
  right: 175px;
  bottom: 10px;
  margin-right: 12px;
  font-size: 14px;
  font-weight: 700;
  z-index: 10;
`;

const DatePick = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
`;

const DatePicker = styled.div`
  display: inline-block;
  width: 100%;
  border: none;
  background-color: ${props => props.theme.white};
`;

const Date = styled.div`
  display: inline-block;
  position: relative;
  width: 46%;
  margin-right: 8px;
  padding-left: 100px;
  background: ${props => props.theme.white};
  vertical-align: middle;
`;

const DateInput = styled.input`
  width: 145px;
  height: 36px;
  cursor: pointer;
  border: 1px solid #e4e4e4;
  background: ${props => props.theme.white}
    url(/images/kimdongki/arw_select.png) no-repeat 95% 50%;
  background-size: 20px 20px;
  border-radius: 5px;
  line-height: 36px;
  text-align: left;
  font-size: 14px;
  color: ${props => props.theme.black};
  font-weight: 500;
  padding: 0 33px 0 12px;
  margin-right: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
`;

const OtherFilter = styled.div`
  display: flex;
  position: relative;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
`;

const DropDownBtn = styled.div`
  position: relative;
`;

const SearchBtnWrap = styled.div`
  display: flex;
  height: 36px;
  margin-top: 36px;
  justify-content: center;
`;

const SearchBtn = styled.button`
  display: block;
  padding: 0 45px 0 25px;
  color: ${props => props.theme.white};
  background: url(/images/kimdongki/arw-search.png) no-repeat;
  background-position: 103px 12px;
  background-color: ${props => props.theme.black};
  background-size: 14px 11px;
  border: 0;
  border-radius: 100px;
  font-size: 14px;
  text-align: center;
  letter-spacing: 2.5px;
  line-height: 36px;
  cursor: pointer;
`;

const OrderWrap = styled.div`
  margin-top: 109px;
  border-bottom: 2px solid #000;
  font-size: 14px;
  line-height: 2px;
`;

const OrderMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 14px;

  li {
    color: #999999;
    margin-left: 20px;
    cursor: pointer;
  }
`;

const FindstayList = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  min-width: 1150px;
  max-width: 1330px;
  position: relative;
`;

const FirstWrap = styled.div`
  clear: both;
  position: relative;
  margin: -70px 0 0 -90px;
  padding-top: 75px;
  min-width: 1150px;
`;

const FirstBox = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 50%;
  position: relative;
  font-size: 14px;
  padding: 70px 0 50px 90px;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;

const Name = styled.div`
  font-size: 32px;
  position: absolute;
  color: #181818;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 10;
  margin-top: 25px;
  cursor: pointer;
`;

const Category = styled.span`
  display: block;
  text-transform: uppercase;
  letter-spacing: 3.6px;
  font-size: 12px;
  margin-top: 7px;
`;

const ClearFix = styled.div`
  height: 115px;
`;

const Info = styled.div`
  width: 30%;
  position: relative;
`;

const AddressInfo = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 2;
  margin-top: 30px;
  cursor: pointer;
`;

const Reservation = styled.p`
  font-size: 14px;
  color: ${props => props.theme.black};
  line-height: 30px;
  border-bottom: 1px solid #000;
  display: inline-block;
  font-weight: 700;
  margin-top: 20px;
`;

const RoomImage = styled.div`
  clear: both;
  position: absolute;
  bottom: 48px;
  right: 0;
  padding: 70px 0 0;
  width: 59%;
`;

const Thumbnail = styled.img`
  height: 230px;
  width: 400px;
`;

const InfoWrap = styled.div``;
const Address = styled.div``;
