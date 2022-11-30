import React from 'react';
import Slider from 'react-slick';
import Vibes from './Vibes';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Main() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Title>
        TIME TO STAY
        <br />
        감성에 머무를 시간
      </Title>
      <Top {...settings}>
        <RoomImg src="/images/kimdongki/one-room.jpg" />
        <RoomImg src="/images/kimdongki/kitchen.jpg" />
        <RoomImg src="/images/kimdongki/camping.jpg" />
        <RoomImg src="/images/kimdongki/jeju.jpg" />
        <RoomImg src="/images/kimdongki/swimming.jpg" />
        <RoomImg src="/images/kimdongki/swim.jpg" />
      </Top>
      <Vibes />
    </>
  );
}

const Top = styled(Slider)`
  .slick-prev {
    left: 10px;
    z-index: 1;
    &::before {
      font-size: 35px;
    }
  }
  .slick-next {
    right: 20px;
    opacity: 1;
    &::before {
      font-size: 35px;
    }
  }
  .slick-dots {
    bottom: 10px;
  }
`;

const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  letter-spacing: 11px;
`;
const RoomImg = styled.img`
  max-width: 100%;
  max-height: 500px;
`;
