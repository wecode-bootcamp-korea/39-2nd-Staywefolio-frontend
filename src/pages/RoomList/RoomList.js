import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Room from './Room';
import DropDown from './DropDown/DropDown';
import People from './DropDown/People';
import PriceRange from './DropDown/PriceRange';
import Stay from './DropDown/Stay';
import Theme from './DropDown/Theme';
import DayPicker from '../../components/DayPicker/DayPicker';
import CustomInput from './DayPicker/CustomInput';
import { BASE_URL } from '../../config';

const SORT = [
  { id: 0, title: '최신순', method: 'newest' },
  { id: 1, title: '높은가격순', method: 'priceDesc' },
  { id: 2, title: '낮은가격순', method: 'priceAsc' },
];

export default function RoomList() {
  // 선택된 정렬버튼
  const [isSelected, setIsSelected] = useState(0);
  // 선택된 필터링탭
  const [currentTab, setCurrentTab] = useState('');
  // 키워드 input 창
  const [keyword, setKeyword] = useState('');
  // fetch로 받아온 숙소 정보
  const [roomList, setRoomList] = useState([]);
  // datepicker
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [dateInfo, setDateInfo] = useState({
    checkIn: '',
    checkOut: '',
  });
  const { checkIn, checkOut } = dateInfo;
  // 선택된 필터
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortBtn = e => {
    const { value } = e.target;
    setIsSelected(Number(value));
    searchParams.set(
      'orderBy',
      SORT.find(({ id }) => id === Number(value))?.method
    );
    setSearchParams(searchParams);
  };

  const handleFilter = (queryValue, queryType) => {
    setCurrentTab('');
    if (typeof queryValue === 'string' || typeof queryValue === 'number') {
      searchParams.set(queryType, queryValue);
      setSearchParams(searchParams);
      return;
    } else if (typeof queryType == 'object') {
      queryType.map(type => {
        searchParams.delete(type);
        if (type === 'priceMin') {
          searchParams.set(type, queryValue[0] * 10000);
        } else if (type === 'priceMax') {
          searchParams.set(type, queryValue[1] * 10000);
        } else if (type === 'checkInDate') {
          searchParams.set(type, queryValue[0]);
        } else {
          searchParams.set(type, queryValue[1]);
        }
        setSearchParams(searchParams);
      });
    } else {
      searchParams.delete(queryType);
      queryValue.forEach(value => {
        if (queryType === 'type') {
          searchParams.append(queryType, value);
        } else {
          searchParams.set(queryType, value);
        }
        setSearchParams(searchParams);
      });
    }
  };

  const handleKeyword = e => {
    const { value } = e.target;
    setKeyword(value);
  };

  const search = e => {
    e.preventDefault();
    handleFilter(keyword, 'keyword');
  };

  const TABS = [
    {
      id: 1,
      title: '인원',
      content: <People handleFilter={handleFilter} />,
    },
    {
      id: 2,
      title: '가격 범위',
      content: <PriceRange handleFilter={handleFilter} />,
    },
    {
      id: 3,
      title: '스테이 유형',
      content: <Stay handleFilter={handleFilter} />,
    },
    {
      id: 4,
      title: '테마',
      content: <Theme handleFilter={handleFilter} />,
    },
  ];

  // checkin, checkout, 연박일자 계산
  useEffect(() => {
    if (startDate === null || endDate === null) return;
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const startDay = startDate.getDate();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;
    const endDay = endDate.getDate();
    const start =
      startYear.toString() +
      '.' +
      (startMonth < 10 ? '0' + startMonth.toString() : startMonth.toString()) +
      '.' +
      (startDay < 10 ? '0' + startDay.toString() : startDay.toString());
    const end =
      endYear.toString() +
      '.' +
      (endMonth < 10 ? '0' + endMonth.toString() : endMonth.toString()) +
      '.' +
      (endDay < 10 ? '0' + endDay.toString() : endDay.toString());

    setDateInfo({
      ...dateInfo,
      checkIn: start,
      checkOut: end,
    });
    handleFilter([start, end], ['checkInDate', 'checkOutDate']);
  }, [dateRange]);

  const queryRegion = searchParams.getAll('region');

  //TODO: 상품리스트 get요청
  useEffect(() => {
    fetch(`${BASE_URL}/products?${searchParams.toString()}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
    })
      .then(response => response.json())
      .then(result => {
        setRoomList(result.data);
      });
  }, [searchParams]);

  // //TODO: mock data 테스트
  // useEffect(() => {
  //   fetch('/data/InfoListData.json')
  //     .then(response => response.json())
  //     .then(result => {
  //       setRoomList(result.data);
  //     });
  // }, []);

  return (
    <Contents>
      <SubTitle>
        <Tit>FIND STAY</Tit>
        <Txt>머무는 것 자체로 여행이 되는 공간</Txt>
      </SubTitle>
      <RoomFiter>
        <Sorting>
          <DayFilter>
            <Keyword onSubmit={search}>
              <KeywordTit>여행지/숙소</KeywordTit>
              <KeywordInput
                type="text"
                value={keyword}
                onChange={handleKeyword}
              />
            </Keyword>
            <FilterArea>
              <AreaSelectBtn type="button">
                {queryRegion.length === 0 ? '국내전체' : queryRegion}
              </AreaSelectBtn>
            </FilterArea>
            <Check>
              <InOut>
                <CheckIn>체크인-체크아웃</CheckIn>
              </InOut>
              <DatePick>
                <DayPicker
                  dateRange={dateRange}
                  startDate={startDate}
                  endDate={endDate}
                  setDateRange={setDateRange}
                  isHide={true}
                  hasButton={false}
                  customInput={<CustomInput />}
                />
              </DatePick>
            </Check>
          </DayFilter>
          <OtherFilter>
            {TABS.map(list => {
              return (
                <DropDown
                  key={list.id}
                  currentTab={currentTab}
                  setCurrentTab={setCurrentTab}
                  handleFilter={handleFilter}
                  {...list}
                />
              );
            })}
          </OtherFilter>
          <SearchBtnWrap>
            <SearchBtn type="button" onClick={search}>
              SEARCH
            </SearchBtn>
          </SearchBtnWrap>
          <OrderWrap>
            <OrderMenu>
              {SORT.map(sortMehtod => (
                <OrderMenuLi key={sortMehtod.id}>
                  <OrderMenuBtn
                    value={sortMehtod.id}
                    onClick={handleSortBtn}
                    className={sortMehtod.id === isSelected ? 'selected' : ''}
                  >
                    {sortMehtod.title}
                  </OrderMenuBtn>
                </OrderMenuLi>
              ))}
            </OrderMenu>
          </OrderWrap>
        </Sorting>
      </RoomFiter>
      <FindstayList>
        <FirstWrap>
          <FirstBox>
            {roomList.map((room, idx) => {
              return (
                <Room
                  imgurl={room.thumbnailImage}
                  name={room.name}
                  type={room.type}
                  region={room.region}
                  guest={room.numberOfGuests}
                  price={room.price}
                  id={room.id}
                  key={idx}
                />
              );
            })}
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

const Keyword = styled.form``;

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
  background: url(/images/roomList/arw-search.png) no-repeat;
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
`;

const OrderMenuLi = styled.li`
  margin-left: 20px;
`;

const OrderMenuBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #999999;
  cursor: pointer;
  font-size: 15px;

  &.selected {
    color: ${props => props.theme.black};
    font-weight: bold;
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
  display: flex;
  flex-wrap: wrap;
  vertical-align: top;
  position: relative;
  font-size: 14px;
  padding: 70px 0 50px 90px;
`;

const AreaSelectBtn = styled.button`
  display: block;
  width: 200px;
  margin-right: 8px;
  padding: 0 23px 0 12px;
  color: ${props => props.theme.black};
  background-size: 20px 20px;
  border: none;
  border-radius: 5px;
  line-height: 36px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  width: 140px;
  margin: 0 5px 0 0;
  padding: 0 15px;
`;

const OtherFilter = styled.div`
  display: flex;
  position: relative;
  height: 60px;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
`;
