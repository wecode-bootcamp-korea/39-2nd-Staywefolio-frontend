import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import WhenTo from './WhenTo';

export default function WhereTo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [searchData, setSearchData] = useState({
  //   keyword: '',
  //   region: '',
  // });
  const [selectedLocation, setSelectedLocation] = useState();

  const [searchParams, setSearchParmas] = useSearchParams();

  const toggleActive = title => {
    setSelectedLocation(title);
    searchParams.set('region', title);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLocation();
    searchParams.delete('region');
  };

  const navigate = useNavigate();
  const handlelSearchBtn = () => {
    setIsModalOpen(false);
    navigate('/room-list?' + searchParams.toString());
  };

  // const GoToRoomList = () => {
  //   fetch('http://127.', {
  //     method: 'POST',
  //     headers: {},
  //     body: JSON.stringify(),
  //   })
  //     .then(response => response.json())
  //     .then(result => console.log(result));
  // };

  return (
    <>
      <WhereButton onClick={openModal}>
        <Where>어디로 떠날까요?</Where>
      </WhereButton>
      <Modal
        isOpen={isModalOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseBtn onClick={closeModal}>닫기</CloseBtn>
        <SubTitleTxt>어디로 떠날까요?</SubTitleTxt>
        <WhereWrapper>
          <WhereSearch>
            <Search
              type="text"
              placeholder="원하는 스테이/지역을 검색해 보세요."
            />
          </WhereSearch>
          <WhereContent>
            <Box>
              <Domestic>국내</Domestic>
              <Fix>
                {LOCATION.map((info, idx) => {
                  return (
                    <DomesticFix key={info.id}>
                      <ButtonTo
                        isSelected={info.title === selectedLocation}
                        onClick={() => toggleActive(info.title)}
                      >
                        {info.title}
                      </ButtonTo>
                    </DomesticFix>
                  );
                })}
              </Fix>
            </Box>
          </WhereContent>

          <SearchBtn type="button" onClick={handlelSearchBtn}>
            SEARCH
          </SearchBtn>
        </WhereWrapper>
      </Modal>
    </>
  );
}

const WhereButton = styled.button`
  display: inline-block;
  font-size: 15px;
  color: ${props => props.theme.black};
  font-weight: 500;
  padding: 0 0 0 30px;
  line-height: 45px;
  border: none;
  cursor: pointer;

  &:first-child {
    background: url(/images/NavImages/where.png) no-repeat 0 50%;
    background-size: 25px 25px;
  }

  &::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 15px;
    margin: 0 25px;
    background: #888;
    vertical-align: middle;
  }
`;

const Where = styled.span`
  margin-left: 10px;
`;

const CloseBtn = styled.button`
  position: absolute;
  display: block;
  top: 59px;
  right: 20px;
  width: 50px;
  height: 50px;
  text-indent: -99999px;
  background: url(/images/NavImages/btn-close.png) no-repeat 50%;
  border: 0;
  cursor: pointer;
`;

const SubTitleTxt = styled.div`
  text-align: left;
  font-size: 36px;
  color: #333;
  font-weight: 700;
  padding: 59px 0 50px;
`;

const ButtonTo = styled.button`
  display: block;
  padding: 0 23px;
  border: 0;
  border-radius: 100px;
  color: ${props => (props.isSelected ? props.theme.white : props.theme.black)};
  background-color: ${props =>
    props.isSelected ? props.theme.black : props.theme.white};
  font-size: 16px;
  line-height: 40px;
  cursor: pointer;

  &.active {
    color: ${props => props.theme.white};
    background-color: ${props =>
      props.isSelected ? props.theme.black : props.theme.white};
    border-radius: 100px;
  }
`;

const WhereWrapper = styled.div`
  width: 100%;
  border-top: 2px solid #e6e6e6;
`;

const WhereSearch = styled.div`
  width: 580px;
  border-radius: 100px;
  margin: 80px auto 0;
  padding: 0 20px 0 60px;
  background: url(/images/NavImages/ico-search.png) no-repeat 20px 50%;
  background-size: 30px 30px;
  background-color: #f5f5f5;
`;

const WhereContent = styled.div`
  padding: 75px 2%;
  font-size: 0;
  border-bottom: 2px solid #e6e6e6;
`;

const Box = styled.div`
  display: inline-block;
  width: 50%;
  padding: 0 2%;
  margin-right: 50px;
  vertical-align: top;
`;

const Domestic = styled.div`
  margin: 0 0 20px 20px;
  color: #333;
  font-size: 22px;
  font-weight: 700;
`;

const Fix = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 800px;
`;

const DomesticFix = styled.li`
  margin: 7px 0;
`;
const Search = styled.input`
  height: 64px;
  font-size: 18px;
  color: ${props => props.theme.black};
  width: 100%;
  background-color: #f5f5f5;
  border: 0;
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

const customStyles = {
  overlay: {
    position: 'fixed',
    display: 'block',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,.6)',
    boxSizing: 'borderBox',
    textAlign: 'center',
    zIndex: '1000',
  },
  content: {
    position: 'relative',
    display: 'inline-block',
    width: '1170px',
    maxHeight: '100%',
    top: '50%',
    margin: '0 auto',
    padding: '40px 20px',
    backgroundColor: '${props => props.theme.white}',
    boxSizing: 'border-box',
    boxShadow: '0 0 6px 0 rgb(0 0 0 / 50%)',
    borderRadius: '10px',
    transform: 'translateY(-50%)',
    overflow: 'auto',
  },
};

const LOCATION = [
  {
    id: 0,
    title: '국내전체',
  },
  {
    id: 1,
    title: '수도권',
  },
  {
    id: 2,
    title: '강원',
  },
  {
    id: 3,
    title: '전라',
  },
  {
    id: 4,
    title: '충청',
  },
  {
    id: 5,
    title: '경상',
  },
  {
    id: 6,
    title: '제주',
  },
];
