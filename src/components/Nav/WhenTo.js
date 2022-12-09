import React, { useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function WhenTo() {
  // const [searchParams, setSearchParmas] = useSearchParams();

  //   const navigate = useNavigate();
  //   navigate('/checkInDate?' + searchParams.toString());
  //   navigate('/checkOutDate?' + searchParams.toString());

  return (
    <>
      <WhenButton>
        <When>언제 떠날까요?</When>
      </WhenButton>
    </>
  );
}

const WhenButton = styled.button`
  display: inline-block;
  font-size: 15px;
  color: ${props => props.theme.black};
  font-weight: 500;
  padding: 0 0 0 30px;
  line-height: 45px;
  border: none;
  cursor: pointer;

  &:nth-child(2) {
    background: url(/images/NavImages/when.png) no-repeat 0 50%;
    background-size: 25px 25px;
  }
`;

const When = styled.span`
  margin-left: 10px;
`;
