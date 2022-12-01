import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function RoomCard() {
  return (
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
              <Thumbnail src="./images/kimdongki/kit.jpg" />
            </RoomImage>
          </LinkTo>
        </FirstBox>
      </FirstWrap>
    </FindstayList>
  );
}

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
