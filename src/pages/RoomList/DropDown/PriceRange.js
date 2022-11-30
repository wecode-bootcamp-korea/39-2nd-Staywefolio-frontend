import React, { useState } from 'react';
import styled from 'styled-components';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

export default function PriceRange({ handleFilter }) {
  // const [value, setValue] = useState([0]);
  const [range, setRange] = useState({
    min: 30,
    max: 70,
  });
  const { min, max } = range;

  return (
    <ModalBack>
      <PeopleTitle>가격 범위</PeopleTitle>
      <InputRange
        maxValue={70}
        minValue={30}
        formatLabel={value => `${value}만원`}
        value={range}
        onChange={value => setRange(value)}
      />
      <InputContainer>
        <InputContainerDiv>
          <InputHeader>최저요금</InputHeader>
          <InputContent>
            <InputContentInput type="text" value={min} />
            만원
          </InputContent>
        </InputContainerDiv>
        <Dash>-</Dash>
        <InputContainerDiv>
          <InputHeader>최고요금</InputHeader>
          <InputContent>
            <InputContentInput type="text" value={max} />
            만원
          </InputContent>
        </InputContainerDiv>
      </InputContainer>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn
          onClick={() =>
            handleFilter(Object.values(range), ['priceMin', 'priceMax'])
          }
        >
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
    </ModalBack>
  );
}

const ModalBack = styled.div`
  position: absolute;
  width: 150%;
  margin-top: 28px;
  padding: 30px;
  background-color: white;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
`;

const PeopleTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 22px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;

const InputContainerDiv = styled.div``;

const InputHeader = styled.span`
  font-size: 12px;
  color: #999;
`;

const InputContent = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  font-size: 14px;
  margin-top: 8px;
`;

const InputContentInput = styled.input`
  font-size: 14px;
  width: 85px;
  height: 32px;
  border: 0;
  text-align: right;
  outline: none;
  appearance: none;
  display: inline-block;
  background: transparent;
`;

const Dash = styled.span`
  padding: 25px 0 0 0;
`;

const ModalPeopleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ModalPeopleBtn = styled.button`
  font-size: 12px;
  padding: 10px 48px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  border: 0;
`;
