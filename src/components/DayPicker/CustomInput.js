import React, { forwardRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const [searchParams] = useSearchParams();
  const checkin = searchParams.getAll('checkInDate');
  const checkout = searchParams.getAll('checkOutDate');

  return (
    <InputButton onClick={onClick} ref={ref}>
      {value === ''
        ? checkin == '' && checkout == ''
          ? '날짜를 입력해주세요.'
          : checkin + ' - ' + checkout
        : value}
    </InputButton>
  );
});

const InputButton = styled.button`
  border: none;
  width: 470px;
  height: 38px;
  font-size: 16px;
  font-family: Lato;
  background-color: transparent;
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
  background: ${props => props.theme.white} url(/images/roomList/arw_select.png)
    no-repeat 95% 50%;
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

export default CustomInput;
