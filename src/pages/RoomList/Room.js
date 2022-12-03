import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function Room({ imgurl, name, type, region, guest, price, id }) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <LinkTo to={`/booking/${id}?${searchParams.toString()}`}>
      <Container>
        <InfoWrap>
          <Name>
            {name}
            <Category>{type}</Category>
          </Name>
          <ClearFix />
          <Info>
            <AddressInfo>
              <Address>{region}</Address>
              <br />
              기준 {guest}명 &nbsp; (최대 {guest + 2}명)
              <br />₩ {price}
            </AddressInfo>
            <Reservation>예약하기</Reservation>
          </Info>
        </InfoWrap>
        <RoomImage>
          <Thumbnail src={imgurl} alt="images" />
        </RoomImage>
      </Container>
    </LinkTo>
  );
}

const Container = styled.div`
  position: relative;
`;
const LinkTo = styled(Link)`
  display: block;
  padding: 30px;
  width: 50%;
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

const Category = styled.p`
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

const AddressInfo = styled.h1`
  font-size: 14px;
  color: #333;
  line-height: 2;
  margin-top: 30px;
  cursor: pointer;
`;

const Reservation = styled.h1`
  font-size: 14px;
  color: ${props => props.theme.black};
  line-height: 30px;
  border-bottom: 1px solid #000;
  display: inline-block;
  font-weight: 700;
  margin-top: 20px;
`;

const RoomImage = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 230px;
  width: 400px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const InfoWrap = styled.div``;
const Address = styled.div``;
