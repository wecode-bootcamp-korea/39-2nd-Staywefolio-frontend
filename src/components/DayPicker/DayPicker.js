import React from 'react';
import styled from 'styled-components';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('ko', ko);

const DATE_FORMAT = 'yyyy.MM.dd';
const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';

export default function DayPicker({
  startDate,
  endDate,
  setDateRange,
  isHide,
  customInput,
  hasButton,
}) {
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      selected={startDate} // 날짜 state
      monthsShown={2}
      locale={ko}
      dateFormat={DATE_FORMAT}
      dateFormatCalendar={DATE_FORMAT_CALENDAR}
      minDate={new Date()}
      shouldCloseOnSelect={isHide}
      customInput={customInput}
      onChange={update => {
        setDateRange(update);
      }}
      withPortal
    >
      {hasButton && (
        <Container>
          <SearchBtn>search</SearchBtn>
        </Container>
      )}
    </DatePicker>
  );
}

const Container = styled.div`
  margin: 400px 0 50px 0;
`;

const SearchBtn = styled.button`
  display: block;
  margin: 50px auto 0;
  padding: 0 70px 0 40px;
  color: ${props => props.theme.white};
  background: url(/images/NavImages/arw-search.png) no-repeat 18px 15px;
  background-position: 140px 25px;
  background-color: ${props => props.theme.black};
  border: 0;
  border-radius: 100px;
  box-shadow: 13px 15px 30px 0 rgb(0 0 0 / 40%);
  font-size: 16px;
  text-align: center;
  line-height: 64px;
  letter-spacing: 2.5px;
  cursor: pointer;
  z-index: 30;
`;
