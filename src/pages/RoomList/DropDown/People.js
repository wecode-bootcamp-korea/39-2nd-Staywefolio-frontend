import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

// 커스텀훅 사용해보기
const useCounter = () => {
  const [searchParams] = useSearchParams();
  const [quantity, setQuantity] = useState(
    searchParams.getAll('numberOfGuests').length === 0
      ? 0
      : searchParams.getAll('numberOfGuests')
  );

  const plusQuantity = () => {
    setQuantity(quantity > 9 ? 10 : quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity < 1 ? 0 : quantity - 1);
  };

  return { quantity, plusQuantity, minusQuantity };
};

export default function People({ handleFilter }) {
  const [searchParams] = useSearchParams();
  const { quantity, plusQuantity, minusQuantity } = useCounter(
    searchParams.getAll('numberOfGuests').length === 0
      ? 0
      : searchParams.getAll('numberOfGuests')
  );

  return (
    <ModalBack>
      <PeopleTitle>인원</PeopleTitle>
      <PeopleCounter>
        <CounterContainter>
          <CounterButton onClick={() => minusQuantity()}>-</CounterButton>
          <InputNum>
            <ShowPeople type="number" value={quantity} />
            <Meong>명</Meong>
          </InputNum>
          <CounterButton onClick={() => plusQuantity()}>+</CounterButton>
        </CounterContainter>
      </PeopleCounter>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn
          onClick={() => handleFilter(quantity, 'numberOfGuests')}
        >
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
    </ModalBack>
  );
}

const ModalBack = styled.div`
  position: absolute;
  width: 100%;
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

const PeopleCounter = styled.div`
  display: flex;
  align-items: center;
`;

const CounterContainter = styled.div`
  display: flex;
  align-items: center;
`;

const CounterButton = styled.button`
  font-size: 16px;
  width: 34px;
  height: 34px;
  border: 1px solid #e4e4e4;
  background-color: #f9fafb;
  cursor: pointer;
  outline: none;
`;

const InputNum = styled.span`
  display: flex;
  width: 60px;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  font-size: 14px;
  line-height: 32px;
`;

const ShowPeople = styled.input`
  appearance: none;
  outline: none;
  display: inline-block;
  border: 0;
  width: 37px;
  background: transparent;
  text-align: right;
`;

const Meong = styled.span`
  display: inline-block;
  line-height: 32px;
  margin-right: 10px;
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
