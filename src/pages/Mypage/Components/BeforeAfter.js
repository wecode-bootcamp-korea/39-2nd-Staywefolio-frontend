import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function BeforeAfter({ children }) {
  const [currTableId, setCurrTabId] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  // const tapParmas = () => {};

  const handleTab = e => {
    const { value } = e.target;
    setCurrTabId(value);
    searchParams.set('orderStatus', value);
    setSearchParams(searchParams);
  };
  console.log('currTableId', currTableId);

  return (
    <Container>
      {BOOKING_ARR.map(tab => (
        // Tap 버튼
        <List
          key={tab.id}
          title={tab.order_status === currTableId}
          value={tab.order_status}
          onClick={handleTab}
        >
          {tab.title}
        </List>
      ))}
      {children}
    </Container>
  );
}

const BOOKING_ARR = [
  { id: 0, title: '다가올 예약', order_status: '3' },
  { id: 1, title: '이용 완료', order_status: '4' },
];

const Container = styled.div`
  display: flex;
`;

const List = styled.button`
  font-weight: 400;
  font-size: 25px;
  padding-right: 20px;
  color: #181818;
  background-color: white;
  cursor: pointer;
  outline: none;
  border: none;

  font-weight: ${props => (props.title ? 700 : 400)};

  &:hover {
    color: aquamarine;
  }
`;
