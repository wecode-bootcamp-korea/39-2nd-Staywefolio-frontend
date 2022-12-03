import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const STAY_TYPE = [
  { id: 1, type: '펜션' },
  { id: 2, type: '한옥' },
  { id: 3, type: '캠핑' },
  { id: 4, type: '민박' },
  { id: 5, type: '호텔' },
];

export default function Stay({ handleFilter }) {
  const [searchParams] = useSearchParams();
  const [selectStay, setSelectStay] = useState(searchParams.getAll('type'));

  const handleCheckbox = e => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectStay([...selectStay, value]);
    } else {
      setSelectStay(selectStay.filter(el => el !== value));
    }
  };

  return (
    <ModalBack>
      <PeopleTitle>스테이유형</PeopleTitle>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn onClick={() => handleFilter(selectStay, 'type')}>
          적용하기
        </ModalPeopleBtn>
      </ModalPeopleBtnWrapper>
      <CheckList>
        {/* <li>
          <label onChange={handleCheckedAll} name="all">
            <span>전체</span>
            <input type="checkbox" name="all" checked={isCheckedAll} />
          </label>
        </li> */}
        {STAY_TYPE.map((item, idx) => {
          return (
            <CheckListEl key={idx}>
              <CheckListLabel name={item.id}>
                <CheckListSpan>{item.type}</CheckListSpan>
                <CheckListInput
                  type="checkbox"
                  name={item.id}
                  value={String(item.id)}
                  onChange={handleCheckbox}
                  checked={selectStay.includes(String(item.id))}
                />
              </CheckListLabel>
            </CheckListEl>
          );
        })}
      </CheckList>
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

const CheckList = styled.ul`
  width: 100px;
  padding-top: 14px;
`;

const CheckListEl = styled.li`
  width: 100%;
  margin-top: 15px;
`;

const CheckListLabel = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

const CheckListInput = styled.input`
  left: auto;
  right: 0;
  margin: 0;
  cursor: pointer;
`;

const CheckListSpan = styled.span`
  width: 100%;
  display: inline-block;
  text-align: center;
  font-size: 14px;
`;
