import React from 'react';
import styled from 'styled-components';

export default function Roomcard({ isData }) {
  return (
    <Container>
      {isData.reservation?.map(room => (
        <RoomCardWrapper key={room.orderid}>
          <BookingInfo>
            <RoomName>{room.title}</RoomName>
            <BookingDate>
              예약 일자 : {room.checkInDate} - {room.checkOutDate}
            </BookingDate>
            <RoomInfo>
              <RoomType>{room.area}</RoomType>
              <AboutRoom>{room.type}</AboutRoom>
            </RoomInfo>
            <RoomImageBox>
              <RoomImage src={room.src} />
            </RoomImageBox>
          </BookingInfo>
        </RoomCardWrapper>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const RoomCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin-right: 50px;

  margin-bottom: 20px;
  width: 385px;
  height: 360px;
`;

const BookingInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const RoomName = styled.div`
  display: flex;
  font-size: 5rem;
  color: #363636;
  font-weight: 700;
  width: 60%;
`;

const BookingDate = styled.div`
  font-size: 15px;
  color: #363636;
  font-weight: 700;
  width: 50%;
  height: 20px;
`;

const RoomInfo = styled.div`
  flex-direction: column;
`;

const RoomType = styled.div`
  flex-direction: column;
  font-size: 2rem;
  color: #363636;
  font-weight: 700;
  height: 35px;
  width: 80px;
`;

const AboutRoom = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 0.5%;
`;

const RoomImageBox = styled.div`
  width: 477px;
  height: 250px;
`;

const RoomImage = styled.img`
  width: 80%;
  height: 80%;
`;
