import React, { useState, useEffect } from 'react';
import './style.css';
import DefaultProfileImage from 'assets/default-profile-image.png';
import { Board } from 'types';
import { useParams } from 'react-router-dom';
import { boardMock } from 'mocks';
import { useUserStore } from 'stores';

//          component: 게시물 상세보기 페이지          //
export default function BoardDetail() {

  //          state: 게시물 번호 path variable 상태          //
  const { boardNumber } = useParams();
  //          state: 로그인 유저 상태          //
  const { user } = useUserStore();

  //          component: 게시물 상세보기 상단 컴포넌트          //
  const BoardDetailTop = () => {
    //          state: 작성자 상태          //
    const [isWriter, setWriter] = useState<boolean>(false);
    //          state: more button 상태          //
    const [showMore, setShowMore] = useState<boolean>(false);
    //          state: 게시물 상태          //
    const [board, setBoard] = useState<Board | null>(null);
    
    //          event handler: more button 클릭 이벤트 처리          //
    const onMoreButtonVlickHandler = () => {
      setShowMore(!showMore);
    }

    //          effect: 게시물 번호 path variable이 바뀔때 마다 게시물 불러오기          //
    useEffect(() => {
      setBoard(boardMock);
      if (!user) return;
      const isWriter = user.email === boardMock.writerEmail;
      setWriter(isWriter);
    }, [boardNumber]);

    //          render: 게시물 상세보기 페이지 렌더링          //
    return (
      <div id='board-detail-top'>
        <div className='board-detail-top-header'>
          <div className='board-detail-title'>{board?.title}</div>
          <div className='board-detail-sub-box'>
            <div className='board-detail-write-info-box'>
              <div className='board-detail-writer-profile-image' style={{ backgroundImage: `url(${DefaultProfileImage})` }}></div>
              <div className='board-detail-writer-nickname'>{board?.nickname}</div>
              <div className='board-detail-info-divider'>{'\|'}</div>
              <div className='board-detail-write-date'>{board?.writeDatetime}</div>
            </div>
            {isWriter && (
            <div className='icon-button' onClick={onMoreButtonVlickHandler}>
              <div className='more-icon'></div>
            </div>
            )}
            {showMore && (
            <div className='more-box'>
              <div className='more-update-button'>{'수정'}</div>
              <div className='divider'></div>
              <div className='more-delete-button'>{'삭제'}</div>
            </div>
            )}
          </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-top-main'>
          <div className='board-detail-main-text'>{board?.contents}</div>
          { board?.imageUrls.map(imgeUrl => <img className='board-detail-main-image' src={imgeUrl} />) }
        </div>
      </div>
    )
  };
  //          component: 게시물 상세보기 하단 컴포넌트          //
  const BoardDetailBottom = () => {
    
  //          render: 게시물 상세보기 하단 컴포넌트 렌더링          //
  return (
    <div id='board-detail-bottom'>
      <div className='board-detail-bottom-button-box'>
        <div className='board-detail-bottom-button-group'>
          <div className='icon-button'>
            <div className='favorite-light-icon'></div>
            {/* <div className='favorite-fill-icon'></div> */}
          </div>
          <div className='board-detail-bottom-button-text'>{`좋아요 12`}</div>
          <div className='icon-button'>
            <div className='down-light-icon'></div>
            {/* <div className='up-light-icon'></div> */}
          </div>
        </div>
        <div className='board-detail-bottom-button-group'>
          <div className='icon-box'>
            <div className='comment-light-icon'></div>
          </div>
          <div className='board-detail-bottom-button-text'>{`댓글 3`}</div>
          <div className='icon-button'>
            <div className='down-light-icon'></div>
            {/* <div className='up-light-icon'></div> */}
          </div>
        </div>
      </div>
      <div className='board-detail-bottom-favorite-box'>
        <div className='board-detail-bottom-favorite-container'>
          <div className='board-detail-bottom-favorite-title'>{'좋아요 '}<span className='emphasis'>{12}</span></div>
          <div className='board-detail-bottom-favorite-contents'></div>
        </div>
      </div>
      <div className='board-detail-bottom-comments-box'>
        <div className='board-detail-bottom-comments-container'>
           <div className='board-detail-bottom-comments-list-container'>
            <div className='board-detail-bottom-comments-list-title'>{'댓글 '}<span className='emphasis'>{3}</span></div>
            <div className='board-detail-bottom-comments-list-contents'></div>
           </div>
        </div>
        <div className='divider'></div>
        <div className='board-detail-bottom-comments-pagination-box'></div>
        <div className='board-detail-bottom-comments-input-box'>
          <div className='board-detail-bottom-comments-input-container'>
            <textarea className='board-detail-bottom-comments-input' />
            <div className='board-detail-bottom-comments-button-box'>
              {/* <div className='board-detail-bottom-comments-button'>{'댓글달기'}</div> */}
              <div className='board-detail-bottom-comments-button-disable'>{'댓글달기'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  };
  
  //          render: 게시물 상세보기 페이지 렌더링          //
  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-container'>
        <BoardDetailTop />
        <BoardDetailBottom />
      </div>
    </div>
  )
}
