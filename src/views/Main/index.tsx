import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import { currentBoardListMock, popularWordListMock, top3ListMock } from 'mocks';
import { BoardItem } from 'types';
import Top3ListItem from 'components/Top3Listitem';
import { useNavigate } from 'react-router-dom';
import { SEARCH_PATH } from 'constant';
import BoardListItem from 'components/BoardListitem';

//          component: 메인 페이지          //
export default function Main() {

  //          component: 메인 상단 컴포넌트          //
  const MainTop = () => {

    //          state: 주간 TOP3 게시물 리스트 상태          //
    const [top3List, setTop3List] = useState<BoardItem[]>([]);

    //          effect: 컴포넌트가 마운트 시 top3 리스트 불러오기          //
    useEffect(() => {
      // TODO: API 호출로 변경
      setTop3List(top3ListMock);
    }, []);

    //          render: 메인 상단 컴포넌트 렌더링          //
    return (
      <div id='main-top-wrapper'>
        <div className='main-top-container'>
          <div className='main-top-intro'>{'Hoon Board에서\n다양한 이야기를 나눠보세요'}</div>
          <div className='main-top-contents-box'>
            <div className='main-top-contents-title'>{'주간 TOP 3 게시글'}</div>
            <div className='main-top-contents'>
              {top3List.map(boardItem => <Top3ListItem boardItem={boardItem} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }  
  //          component: 메인 하단 컴포넌트          //
  const MainBottom = () => {

    //          state: 인기 검색어 리스트 상태          //
    const [popularWordList, setPopularWordList] = useState<string[]>([]);
    //          state: 최신 게시물 리스트 상태          //
    const [latestBoardList, setLatestBoardList] = useState<BoardItem[]>([]);

    //          state: 현재 페이지 번호 상태          //
    const [currentPageNumber, setCurrentPageNumber] = useState<number>(1);
    //          state: 현재 섹션 번호 상태          //
    const [currentSectionNumber, setCurrentSectionNumber] = useState<number>(1);
    //          state: 보여줄 게시물 리스트 상태          //
    const [viewBoardList, setViewBoardList] = useState<BoardItem[]>([]);
    //          state: 보여줄 페이지 번호 리스트 상태          //
    const [viewPageNumberList, setViewPageNumberList] = useState<number[]>([]);

    //          function: 네비게이트 함수          //
    const navagator = useNavigate();

    //          event handler: 인기 검색어 뱃지 클릭 이벤트 처리          //
    const onWordBadgeClickHandler = (word: string) => {
      navagator(SEARCH_PATH(word));
    }

    //          effect: 컴포넌트가 마운트 시 인기 검색어 리스트 불러오기          //
    useEffect(() => {
      // TODO: API 호출로 변경
      /*console.log(currentBoardListMock.length);*/
      setPopularWordList(popularWordListMock);
      setLatestBoardList(currentBoardListMock);
    }, []);

    useEffect(() => {
      
      /* 성능이 좋은 것은 자바. 성능상에서 많이 차이가 난다. */

      // 자바
      // const tmpList = [];
      // for (let index = 5 * (currentPageNumber - 1); index < 5 * currentPageNumber; index++) {
      //   if (currentBoardListMock.length === index) break;
      //   tmpList.push(currentBoardListMock[index]);
      // }

      // 자바 스크립트
      const FIRST_INDEX = 5 * (currentPageNumber - 1);
      const LAST_INDEX = 5 * currentPageNumber
      const tmpList = currentBoardListMock.filter((item, index) => index >= FIRST_INDEX && index < LAST_INDEX);

      setViewBoardList(tmpList);
    }, [currentPageNumber]);

    //          render: 메인 하단 컴포넌트 렌더링          //
    return (
      <div id='main-bottom-wrapper'>
        <div className='main-bottom-container'>
          
          <button onClick={() => setCurrentPageNumber(currentPageNumber + 1)}>+</button>

          <div className='main-bottom-title'>{'최신 게시물'}</div>
          <div className='main-bottom-contents-box'>
            <div className='main-bottom-latest-contents-box'>
              { viewBoardList.map(boardItem => <BoardListItem boardItem={boardItem} />) }
            </div>
            <div className='main-bottom-popular-word-box'>
              <div className='main-bottom-popular-word-card'>
                <div className='main-bottom-popular-card-box'>
                  <div className='main-bottom-popular-card-title'>{'인기 검색어'}</div>
                  <div className='main-bottom-popular-card-contents'>
                    {/*['안녕하세요', '반가워요', '잘있어요', '다시만나요', '짱구', '철수', '유리', '훈이', '맹구', '흰둥이'] */}
                    {/* array.map((item) => {}) 배열에 있는 단어들이 item에 하나씩 들어가 배열을 출력해준다. map: 새로운 배열을 반환해준다.*/}
                    { popularWordList.map(popularWord => <div className='word-bedge' onClick={() => onWordBadgeClickHandler(popularWord)}>{popularWord}</div>) }
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='main-bottom-pagination-box'></div>
        </div>
      </div>
    );
  }

  //          render: 메인 페이지 렌더링          //
  return ( 
    <>
      <MainTop />
      <MainBottom />
    </>
  )
}
