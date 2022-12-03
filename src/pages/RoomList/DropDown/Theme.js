import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const THEME_TYPE = [
  { id: 1, type: '커플' },
  { id: 2, type: '가족' },
  { id: 3, type: '나홀로 여행' },
];

export default function Theme({ handleFilter }) {
  const [searchParams] = useSearchParams();
  const [selectTheme, setSelectTheme] = useState(searchParams.getAll('theme'));

  const handleCheckbox = e => {
    const { checked, value } = e.target;
    if (checked) {
      setSelectTheme([value]);
    } else {
      setSelectTheme(selectTheme.filter(el => el !== value));
    }
  };

  return (
    <ModalBack>
      <PeopleTitle>테마</PeopleTitle>
      <ModalPeopleBtnWrapper>
        <ModalPeopleBtn onClick={() => handleFilter(selectTheme, 'theme')}>
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
        {THEME_TYPE.map((item, idx) => {
          return (
            <CheckListEl key={idx}>
              <CheckListLabel onChange={handleCheckbox} name={item.type}>
                <CheckListSpan>{item.type}</CheckListSpan>
                <CheckListInput
                  type="checkbox"
                  name={item.type}
                  value={item.type}
                  onChange={handleCheckbox}
                  checked={selectTheme.includes(item.type)}
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
