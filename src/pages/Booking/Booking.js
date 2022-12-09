import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import DayPicker from '../../components/DayPicker/DayPicker';
import CustomInput from '../../components/DayPicker/CustomInput';
import { BASE_URL } from '../../config';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Booking() {
  // fetch로 받아온 숙소 정보
  const [roomInfo, setRoomInfo] = useState({});
  //체크인, 체크아웃, nights 정보
  const [dateInfo, setDateInfo] = useState({
    checkIn: '',
    checkOut: '',
    nights: 0,
  });
  const { checkIn, checkOut, nights } = dateInfo;
  // datepicker
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // 숙소 리스트페이지에서 넘어온 숙소ID
  const params = useParams();
  const roomId = params.roomId;
  const navigate = useNavigate();

  // checkin, checkout, 연박일자 계산
  useEffect(() => {
    if (startDate !== null && endDate !== null) {
      const startYear = startDate.getFullYear();
      const startMonth = startDate.getMonth() + 1;
      const startDay = startDate.getDate();
      const endYear = endDate.getFullYear();
      const endMonth = endDate.getMonth() + 1;
      const endDay = endDate.getDate();

      const start = new Date(startYear, startMonth, startDay);
      const end = new Date(endYear, endMonth, endDay);
      const gapTime = end.getTime() - start.getTime();
      const days = gapTime / (1000 * 60 * 60 * 24);

      setDateInfo({
        ...dateInfo,
        checkIn:
          startYear.toString() +
          '.' +
          startMonth.toString() +
          '.' +
          (startDay < 9 ? '0' + startDay.toString() : startDay.toString()),
        checkOut:
          endYear.toString() +
          '.' +
          endMonth.toString() +
          '.' +
          (endDay < 9 ? '0' + endDay.toString() : endDay.toString()),
        nights: days,
      });
    }
  }, [dateRange]);

  // slick slide 옵션
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  // 네이버지도 옵션
  const mapElement = useRef(null);

  //TODO: 숙소 상세리스트 API fetch
  useEffect(() => {
    fetch(`${BASE_URL}/products/${roomId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(result => {
        setRoomInfo(result.data[0]);
      });
  }, []);

  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;
    // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어주기
    const location = new naver.maps.LatLng(
      roomInfo.latitude,
      roomInfo.longitude
    );
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_LEFT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, [roomInfo]);

  // //TODO: mock data 테스트
  // useEffect(() => {
  //   fetch('/data/roomData.json')
  //     .then(response => response.json())
  //     .then(result => {
  //       setRoomInfo(result.data);
  //     });
  // }, []);

  //TODO: 운영계 예약 create API fetch
  const handlePay = () => {
    fetch(`${BASE_URL}/booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        productOptionId: roomId,
        checkIn: checkIn,
        checkOut: checkOut,
        price: nights * Number(roomInfo.rooms[0].price),
        numberOfUser: roomInfo.rooms[0].numberOfGuests,
      }),
    });
    alert('떠날 준비가 완료되었습니다🎉');
    navigate('/');
  };

  if (Object.keys(roomInfo).length === 0) return null;

  return (
    <>
      <Title>BOOKING</Title>
      <RoomContainer>
        <Room>
          <SummaryContainer>
            <Name>{roomInfo.name}</Name>
            <DayPicker
              dateRange={dateRange}
              startDate={startDate}
              endDate={endDate}
              setDateRange={setDateRange}
              setDateInfo={setDateInfo}
              dateInfo={dateInfo}
              isHide={true}
              hasButton={true}
              customInput={<CustomInput />}
            />
            <GoPay onClick={handlePay}>
              {nights == 0
                ? '결제하기'
                : '₩ ' +
                  (nights * Number(roomInfo.rooms[0].price)).toLocaleString() +
                  ' 결제하기'}
            </GoPay>
          </SummaryContainer>
          <RoomInfo>
            <LeftInfo>
              <RoomTitle>ROOM INFORMATION</RoomTitle>
              <RoomName>{roomInfo.rooms[0].name}</RoomName>
              <RoomPrice>
                ₩ {Number(roomInfo.rooms[0].price).toLocaleString()} / 1박 기준
              </RoomPrice>
              <RoomText>{roomInfo.rooms[0].description}</RoomText>
              <RoomEtc>
                <RoomOption>
                  체크인 {roomInfo.rooms[0].checkInTime}시 / 체크아웃{' '}
                  {roomInfo.rooms[0].checkOutTime}시
                </RoomOption>
                <RoomOption>
                  기준 인원 {roomInfo.rooms[0].numberOfGuests}명 (최대 인원{' '}
                  {Number(roomInfo.rooms[0].numberOfGuests) + 2}명)
                </RoomOption>
                <RoomOption>객실면적 {roomInfo.rooms[0].size}㎡</RoomOption>
              </RoomEtc>
            </LeftInfo>
            <ImageSlide>
              <StyledSlider {...settings}>
                {roomInfo.rooms[0].productOptionImageUrl.map((url, idx) => {
                  return <RoomImage src={url} alt="방 이미지" key={idx} />;
                })}
              </StyledSlider>
            </ImageSlide>
          </RoomInfo>
          <RoomService>
            <Row>
              <RowTitle>FEATURE</RowTitle>
              <ServiceList>
                {roomInfo.rooms[0].features.map((feat, idx) => {
                  return (
                    <ServiceListContent key={idx}>{feat}</ServiceListContent>
                  );
                })}
              </ServiceList>
            </Row>
            <Row>
              <RowTitle>AMENITIES</RowTitle>
              <ServiceList>
                {roomInfo.rooms[0].amenities.map((amenity, idx) => {
                  return (
                    <ServiceListContent key={idx}>{amenity}</ServiceListContent>
                  );
                })}
              </ServiceList>
            </Row>
          </RoomService>
        </Room>
      </RoomContainer>
      <RoomLocationDescription>
        {roomInfo.name} [{roomInfo.address}] 에 위치해있습니다.
      </RoomLocationDescription>
      <RoomMap ref={mapElement} />
      <RoomFaq>
        <RoomFaqTitle>
          숙소 이용에 대한 상세한 안내를 확인해보세요.
        </RoomFaqTitle>
        <RoomFaqContent>
          이용 안내
          <RoomFaqContentList>
            체크인은 오후 3시, 체크아웃은 오전 11시입니다.
          </RoomFaqContentList>
          <RoomFaqContentList>
            객실 정리를 위해 체크아웃 시간을 지켜주시길 부탁드립니다.
          </RoomFaqContentList>
          <RoomFaqContentList>
            게스트의 안전과 방범을 위해 외부에 CCTV가 설치되어 있습니다.
          </RoomFaqContentList>
          <RoomFaqContentList>
            최대인원을 초과하는 인원 및 방문객의 입실은 불가합니다.
          </RoomFaqContentList>
          <RoomFaqContentList>
            실내/외 모든 공간에서는 절대 금연(전자담배 포함)입니다.
          </RoomFaqContentList>
          <RoomFaqContentList>
            촛불과 향 등 화재위험이 있는 물건은 사용 불가입니다.
          </RoomFaqContentList>
          <RoomFaqContentList>
            이용객의 부주의로 인한 시설 및 비품, 소품 파손 시 변상비가
            청구됩니다.
          </RoomFaqContentList>
        </RoomFaqContent>
      </RoomFaq>
    </>
  );
}

const Title = styled.div`
  font-size: 18px;
  letter-spacing: 14px;
  font-family: Lato;
  font-weight: bold;
  text-align: center;
  height: 206px;
  width: 100%;
  padding-top: 70px;
  color: ${props => props.theme.black};
  text-indent: 14px;
`;

const RoomContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1330px;
  padding: 0 20px;
`;

const Room = styled.div`
  margin-top: -60px;
`;

const RoomInfo = styled.div`
  height: auto;
  min-height: 540px;
  margin: 50px 0;
  display: flex;
`;

const LeftInfo = styled.div`
  width: 23%;
  margin-right: 50px;
`;

const RoomTitle = styled.div`
  font-size: 12px;
  letter-spacing: 3.6px;
  font-family: Abel, SpoqaHanSans;
`;

const RoomName = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.2;
`;

const RoomPrice = styled.div`
  font-size: 18px;
  margin-top: 25px;
`;

const RoomImage = styled.img`
  width: 74.4%;
`;

const ImageSlide = styled.div`
  width: 74.4%;
`;
const RoomText = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.7;
  margin-top: 30px;
`;

const RoomEtc = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.7;
  margin-top: 30px;
}
`;

const RoomOption = styled.div`
  font-size: 14px;
  color: #333;
  line-height: 1.7;
`;
const RoomService = styled.div`
  margin-top: 50px;
  border-top: 1px solid #ddd;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
`;

const RowTitle = styled.div`
  font-size: 12px;
  letter-spacing: 3.6px;
  font-family: Abel, NanumSquare;
  width: 25%;
`;

const ServiceList = styled.ul`
  font-size: 0px;
  width: 75%;
  padding: 20px 0 40px;
  list-style: none;
`;

const ServiceListContent = styled.li`
  padding-bottom: 3px;
  width: 96px;
  word-break: keep-all;
  display: inline-block;
  text-align: center;
  max-height: 85px;
  font-size: 13px;
  color: #777;
  margin: 20px 10px 0 0;
  vertical-align: top;
  line-height: 13px;
  overflow: hidden;
`;
const RoomFaq = styled.div`
  background: #000;
  padding: 100px 200px;
  margin-top: 100px;
  color: #fff;
`;
const RoomFaqTitle = styled.h1`    
  font-size: 16px;
}
`;
const RoomFaqContent = styled.ul`
  font-size: 30px;
  padding-top: 30px;
`;
const RoomFaqContentList = styled.li`
  font-size: 14px;
  color: #888;
  padding-top: 10px;
  margin-top: 10px;
  margin-left: 20px;
  list-style-type: disc;
`;
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 950px;
    height: 500px;
  }

  .slick-prev {
    left: 0px;
    top: 263px;
    z-index: 10;
  }

  .slick-next {
    right: 0px;
  }
`;
const RoomMap = styled.div`
  width: 100%;
  height: 600px;
  margin-top: 50px;
`;
const RoomLocationDescription = styled.div`
  text-align: center;
  font-size: 16px;
  width: 780px;
  margin: 50px auto;
  line-height: 2.2;
`;
const SummaryContainer = styled.div`
  border-bottom: 2px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Name = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: ${props => props.theme.black};
`;

const Day = styled.div`
  font-size: 16px;
  cursor: pointer;
  padding: 0 23px 0 0;
  color: ${props => props.theme.black};
`;

const GoPay = styled.button`
  width: 240px;
  height: 40px;
  margin: 0;
  font-size: 16px;
  background-color: ${props => props.theme.black};
  color: ${props => props.theme.white};
`;
