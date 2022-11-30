import React from 'react';
import styled from 'styled-components';

export default function Vibes() {
  return (
    <MainMusic>
      <SecTiltle>
        TIME TO VIBES
        <br />
        감성을 더해줄 음악
      </SecTiltle>
      <MusicList>
        {MusicInfo.map(info => {
          return (
            <MusicBox key={info.id}>
              <Video href={info.link}>
                <ImageBox>
                  <TravelBox src={info.src} />
                </ImageBox>
                <Text>{info.title1}</Text>
                <Text>{info.title2}</Text>
                <Introduce>
                  <span>{info.subtitle1}</span>
                  <Dot>{info.dot}</Dot>
                  <span> {info.subtitle2}</span>
                </Introduce>
              </Video>
            </MusicBox>
          );
        })}
      </MusicList>
    </MainMusic>
  );
}

const MainMusic = styled.div`
  position: relative;
  margin: 110px auto;
  max-width: 1330px;
  padding: 0 20px;
`;

const Video = styled.a`
  color: inherit;
  display: block;
  text-decoration: none;
`;

const SecTiltle = styled.div`
  text-align: center;
  margin-bottom: 50px;
  font-size: 12px;
  letter-spacing: 11px;
  font-weight: 700;
  line-height: 30px;
`;

const MusicList = styled.ul`
  display: block;
  box-sizing: border-box;
  position: relative;
  margin: 0 0 -60px -30px;
`;

const MusicBox = styled.li`
  display: inline-block;
  width: 33.33%;
  text-align: left;
  position: relative;
  padding: 0 0 60px 30px;
`;

const ImageBox = styled.div`
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0px;
`;

const TravelBox = styled.img`
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 409px;
  height: 409px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
`;

const Text = styled.div`
  margin-top: 35px;
  font-size: 22px;
  line-height: 30px;
  height: 5px;
`;

const Introduce = styled.div`
  height: 37px;
  font-size: 14px;
  margin-top: 40px;
  line-height: 1.5;
`;

const Dot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  background: #535353;
  margin: 0 5px;
  text-indent: -99999px;
  vertical-align: middle;
  border-radius: 2px;
`;

const MusicInfo = [
  {
    id: 0,
    link: 'https://youtu.be/Cs-rd_g7yzA',
    src: '/images/kimdongki/love.jpeg',
    title1: '어색한 사이가',
    title2: '더 좋았을까?',
    subtitle1: '널 위한 내 선물 이니까 ',
    subtitle2: '사랑의 차이',
    dot: '.',
  },
  {
    id: 1,
    link: 'https://youtu.be/w6xCZaJGpw4',
    src: '/images/kimdongki/rain.jpeg',
    title1: '네가 물에 닿지 않게',
    title2: '더 기울여줄게',
    subtitle1: '나의 왼쪽 어깨가 젖는 걸 ',
    subtitle2: '비 오는날 나에게만 우산이',
    dot: '.',
  },
  {
    id: 2,
    link: 'https://youtu.be/LUJjDI7jons',
    src: '/images/kimdongki/you.jpeg',
    title1: '떨리는 내 맘이',
    title2: '너에게 들릴까',
    subtitle1: '널 사랑해 ',
    subtitle2: '너에게 하고 싶었던 말',
    dot: '.',
  },
  {
    id: 3,
    link: 'https://youtu.be/-8qJ4K8keBA',
    src: '/images/kimdongki/date.jpeg',
    title1: '설렘이 주었던 긴장은 ',
    title2: '너와 나의 사랑을 알려주고',
    subtitle1: '그땐 너도 봐주길 ',
    subtitle2: '연애의 순간',
    dot: '.',
  },
  {
    id: 4,
    link: 'https://youtu.be/opW4n5C0bjw',
    src: '/images/kimdongki/story.jpeg',
    title1: '동화 속 한 장면 같은',
    title2: '너와 나의 이야기',
    subtitle1: '우리 만의 이야기 ',
    subtitle2: '동화 같은 이야기',
    dot: '.',
  },
  {
    id: 5,
    link: 'https://youtu.be/eBeH1wem0EI',
    src: '/images/kimdongki/walk.jpeg',
    title1: '자 이제 이별이 손을 흔든다',
    title2: '안녕이란 두 글자에 우리 아파하지 말자',
    subtitle1: '우리의 노래가 되어 ',
    subtitle2: '걸어가는거야',
    dot: '.',
  },
];
