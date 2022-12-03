import React from 'react';
import styled from 'styled-components';

export default function DropDown({
  id,
  title,
  content,
  currentTab,
  setCurrentTab,
}) {
  return (
    <>
      {/* <OtherFilter>
        {TABS.map(filter => {
          const isCurrent = currentTab === filter.id;
          return (
            <DropDownBtn key={filter.id}>
              <SelectBtn
                type="button"
                onClick={() => setCurrentTab(isCurrent ? '' : filter.id)}
              >
                {filter.title}
              </SelectBtn>
              {TABS.find(({ id }) => id === currentTab)?.content}
            </DropDownBtn>
          );
        })}
      </OtherFilter> */}

      <DropDownBtn>
        <SelectBtn
          type="button"
          onClick={() => setCurrentTab(currentTab ? '' : id)}
        >
          {title}
        </SelectBtn>
        {currentTab === id && content}
      </DropDownBtn>
    </>
  );
}

const DropDownBtn = styled.div`
  position: relative;
`;

const SelectBtn = styled.button`
  display: block;
  width: 200px;
  margin-right: 8px;
  padding: 0 23px 0 12px;
  color: ${props => props.theme.black};
  background: ${props => props.theme.white} url(/images/roomList/arw_select.png)
    no-repeat 95% 50%;
  background-size: 20px 20px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  line-height: 36px;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
`;
