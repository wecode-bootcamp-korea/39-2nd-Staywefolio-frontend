import React, { forwardRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const CustomInput = forwardRef(({ value, onClick }, ref) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkInDate = searchParams.getAll('checkInDate');
  const checkOutDate = searchParams.getAll('checkOutDate');
  return (
    <InputButton onClick={onClick} ref={ref}>
      {value === ''
        ? checkInDate.length === 0 && checkOutDate.length === 0
          ? '날짜를 입력해주세요.'
          : checkInDate + ' - ' + checkOutDate
        : value}
    </InputButton>
  );
});

const InputButton = styled.button`
  border: none;
  width: 520px;
  height: 35px;
  font-size: 15px;
  letter-spacing: 2px;
  font-family: Lato;
  font-weight: bold;
  background-color: transparent;
`;

export default CustomInput;
