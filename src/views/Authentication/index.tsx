import { KeyboardEvent, useRef, useState } from 'react';
import './style.css';
import InputBox from 'components/InputBox';
import { useCookies } from 'react-cookie';
import { useUserStore } from 'stores';
import { loginInfoMock } from 'mocks';
import { LoginUser } from 'types';
import { useNavigate } from 'react-router-dom';
import { MAIN_PATH } from 'constant';

//          component: 인증 페이지          //
export default function Authentication() {

  //          state: 로그인 유저 전역 상태          //
  const { user, setUser } = useUserStore();
  //          state: 쿠키 상태          //
  const [cookies, setCookie] = useCookies();
  //          state: 화면 상태          //
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  //          function: 네비게이트 함수          //
  const navigator = useNavigate();

  //          component: sign in 카드 컴포넌트          //
  const SignInCard = () => {

    //          state: 비밀번호 입력 요소 참조 상태          //
    const passwordRef = useRef<HTMLInputElement | null>(null);

    //          state: 입력한 이메일 상태          //
    const [email, setEmail] = useState<string>('');
    //          state: 입력한 비밀번호 상태          //
    const [password, setPassword] = useState<string>('');
    //          state: 비밀번호 인풋 타입 상태          //
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
    //          state: 비밀번호 인풋 버튼 아이콘 상태          //
    const [passwordIcon, setPasswordIcon] = useState<'eye-off-icon' | 'eye-on-icon'>('eye-off-icon');
    //          state: 로그인 에러 상태          //
    const [error, setError] = useState<boolean>(false);

    //          event handler: 이메일 인풋 key down 이벤트 처리          //
    const onEmailKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') return;
      if (!passwordRef.current) return;
      passwordRef.current.focus();
    }

    //          event handler: 비밀번호 인풋 key down 이벤트 처리          //
    const onPasswordKeyDownHanlder = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') return;
      onSignInButtonClickHandler();
    }
    //          event handler: 비밀번호 인풋 버튼 클릭 이벤트 처리          //
    const onPasswordIconClickHandler = () => {
      if (passwordType === 'text') {
        setPasswordType('password');
        setPasswordIcon('eye-off-icon');
      }
      if (passwordType === 'password') {
        setPasswordType('text');
        setPasswordIcon('eye-on-icon');
      }
    }

    //          event handler: 로그인 버튼 클릭 이벤트 처리          //
    const onSignInButtonClickHandler = () => {
      // TODO: 로그인 처리 API 연결
      const isSuccess = email === loginInfoMock.email && password === loginInfoMock.password;
      if (!isSuccess) {
        setError(true);
        return;
      }
      
      setCookie('email', email, { path: '/' });

      const user: LoginUser = { email, nickname: '주코야키', profileImage: null };
      setUser(user);
      navigator(MAIN_PATH);
    }

    //          event handler: 회원가입 링크 클릭 이벤트 처리          //
    const onSignUpLinkClickHandler = () => {
      setView('sign-up');
    }

    //          render: sign in 카드 컴포넌트 렌더링         //
    return (
      <div className='auth-card'>
        <div className='auth-card-top'>
          <div className='auth-card-title-box'>
            <div className='auth-card-title'>{'로그인'}</div>
          </div>
          <InputBox label='이메일 주소' type='text' placeholder='이메일 주소를 입력해주세요.' error={error} value={email} setValue={setEmail} onKeyDown={onEmailKeyDownHandler} />
          <InputBox ref={passwordRef} label='비밀번호' type={passwordType} placeholder='비밀번호를 입력해주세요.' error={error} value={password} setValue={setPassword} icon={passwordIcon} onKeyDown={onPasswordKeyDownHanlder} onButtonClick={onPasswordIconClickHandler} />
        </div>
        <div className='auth-card-bottom'>
          {error && (
          <div className='auth-sign-in-error-box'>
            <div className='auth-sign-in-error-message'>
              {'이메일 주소 또는 비밀번호를 잘못 입력했습니다.\n입력하신 내용을 다시 확인해주세요.'}
            </div>
          </div>
          )}
          <div className='auth-button' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
          <div className='auth-description-box'>
            <div className='auth-description'>{'신규 사용자이신가요? '}<span className='description-emphasis' onClick={onSignUpLinkClickHandler}>{'회원가입'}</span></div>
          </div>
        </div>
      </div>
    );
  }
  
  //          component: sign up 카드 컴포넌트          //
  const SignUpCard = () => {

    //          state: 페이지 번호 상태          //
    const [page, setPage] = useState<1 | 2>(2);

    //          state: 이메일 상태          //
    const [email, setEmail] = useState<string>('');
    //          state: 이메일 에러 상태          //
    const [emailError, setEmailError] = useState<boolean>(false);
    //          state: 이메일 에러 메세지 상태          //
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>('');

    //          state: 비밀번호 상태          //
    const [password, setPassword] = useState<string>('');
    //          state: 비밀번호 타입 상태          //
    const [passwordType, setPasswordType] = useState<'text' | 'password'>('password');
    //          state: 비밀번호 아이콘 상태          //
    const [passwordIcon, setPasswordIcon] = useState<'eye-on-icon' | 'eye-off-icon'>('eye-off-icon');
    //          state: 비밀번호 에러 상태          //
    const [passwordError, setPasswordError] = useState<boolean>(false);
    //          state: 비밀번호 에러 메세지 상태          //
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>('');

    //          state: 비밀번호 확인 상태          //
    const [passwordCheck, setPasswordCheck] = useState<string>('');
    //          state: 비밀번호 확인 타입 상태          //
    const [passwordCheckType, setPasswordCheckType] = useState<'text' | 'password'>('password');
    //          state: 비밀번호 확인 아이콘 상태          //
    const [passwordCheckIcon, setPasswordCheckIcon] = useState<'eye-on-icon' | 'eye-off-icon'>('eye-off-icon');
    //          state: 비밀번호 확인 에러 상태          //
    const [passwordCheckError, setPasswordCheckError] = useState<boolean>(false);
    //          state: 비밀번호 확인 에러 메세지 상태          //
    const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] = useState<string>('')

    //          state: 닉네임 상태          //
    const [nickname, setNickname] = useState<string>('');
    //          state: 닉네임 에러 상태          //
    const [nicknameError, setNicknameError] = useState<boolean>(false);
    //          state: 닉네임 에러 메세지 상태          //
    const [nicknameErrorMessage, setNicknameErrorMessage] = useState<string>('');

    //          state: 핸드폰 번호 상태          //
    const [telNumber, setTelNumber] = useState<string>('');
    //          state: 핸드폰 번호 에러 상태          //
    const [telNumberError, setTelNumberError] = useState<boolean>(false);
    //          state: 핸드폰 번호 에러 메세지 상태          //
    const [telNumberErrorMessage, setTelNumberErrorMessage] = useState<string>('');

    //          state: 주소 상태          //
    const [address, setAddress] = useState<string>('');
    //          state: 주소 에러 상태          //
    const [addressError, setAddressError] = useState<boolean>(false);
    //          state: 주소 에러 메세지상태          //
    const [addressErrorMessage, setAddressErrorMessage] = useState<string>('');

    //          state: 상세 주소 상태          //
    const [addressDetail, setAddressDetail] = useState<string>('');

    //          event handler: 비밀번호 아이콘 클릭 이벤트 처리          //
    const onPasswordIconClickHandler = () => {
      if (passwordType === 'password') {
        setPasswordType('text');
        setPasswordIcon('eye-on-icon')
      }
      if (passwordType === 'text') {
        setPasswordType('password');
        setPasswordIcon('eye-off-icon');
      }
    }
    //          event handler: 비밀번호 확인 아이콘 클릭 이벤트 처리          //
    const onPasswordCheckIconClickHandler = () => {
      if (passwordCheckType === 'text') {
        setPasswordCheckType('password');
        setPasswordCheckIcon('eye-off-icon');
      }
      if (passwordCheckType === 'password'){
        setPasswordCheckType('text');
        setPasswordCheckIcon('eye-on-icon')
      }
    }
    //          event handler: 다음 단계 버튼 클릭 이벤트 처리          //
    const onNextStepButtonClickHandler = () => {

      setEmailError(false);
      setEmailErrorMessage('');
      setPasswordError(false);
      setPasswordErrorMessage('');
      setPasswordCheckError(false);
      setPasswordCheckErrorMessage('');

      // description: 이메일 패턴 확인 //
      const emailPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9]*\.[a-zA-Z]{2,4})$/
      const checkedEmail = !emailPattern.test(email);
      if (checkedEmail) {
        setEmailError(true);
        setEmailErrorMessage('이메일주소 포맷이 맞지 않습니다.')
      }

      // description: 비밀번호 길이 확인 //
      const checkedPassword = password.trim().length < 8;
      if (checkedPassword) {
        setPasswordError(true);
        setPasswordErrorMessage('비밀번호는 8자 이상 입력해주세요.');
      }
      // description: 비밀번호 일치 여부 확인 //
      const checkedPasswordCheck = password !== passwordCheck;
      if (checkedPasswordCheck) {
        setPasswordCheckError(true);
        setPasswordCheckErrorMessage('비밀번호가 일치하지 않습니다.');
      }

      if (checkedEmail || checkedPassword || checkedPasswordCheck) return;

      setPage(2);
    }

    //          render: sign up 카드 컴포넌트 렌더링         //
    return (
    <div className='auth-card'>
      <div className='auth-card-top'>
        <div className='auth-card-title-box'>
          <div className='auth-card-title'>{'회원가입'}</div>
          <div className='auth-card-title-page'>{`${page}/2`}</div>
        </div>
        {page === 1 && (<>
        <InputBox label='이메일 주소*' type='text' placeholder='이메일 주소를 입력해주세요.' value={email} setValue={setEmail} error={emailError} errorMessage={emailErrorMessage} />
        <InputBox label='비밀번호*' type={passwordType} placeholder='비밀번호를 입력해주세요.' value={password} setValue={setPassword} icon={passwordIcon} error={passwordError} errorMessage={passwordErrorMessage} onButtonClick={onPasswordIconClickHandler} />
        <InputBox label='비밀번호 확인*' type={passwordCheckType} placeholder='비밀번호를 다시 입력해주세요.' value={passwordCheck} setValue={setPasswordCheck} icon={passwordCheckIcon} error={passwordCheckError} errorMessage={passwordCheckErrorMessage} onButtonClick={onPasswordCheckIconClickHandler} />
        </>)}
        {page === 2 && (<>
        <InputBox label='닉네임*' type='text' placeholder='닉네임을 입력해주세요.' value={nickname} setValue={setNickname} error={nicknameError} errorMessage={nicknameErrorMessage} />
        <InputBox label='핸드폰 번호*' type='text' placeholder='핸드폰 번호를 입력해주세요.' value={telNumber} setValue={setTelNumber} error={telNumberError} errorMessage={telNumberErrorMessage} />
        <InputBox label='주소*' type='text' placeholder='우편번호 찾기' value={address} setValue={setAddress} icon='right-arrow-icon' error={addressError} errorMessage={addressErrorMessage} />
        <InputBox label='상세주소' type='text' placeholder='상세 주소를 입력해주세요' value={addressDetail} setValue={setAddressDetail} error={false} />
        </>)}
      </div>
      <div className='auth-card-bottom'>
        {page === 1 && (
        <div className='auth-button' onClick={onNextStepButtonClickHandler}>{'다음 단계'}</div>
        )}
        {page === 2 && (<>
        <div className='auth-button'>{'회원가입'}</div>
        </>)}
        <div className='auth-description-box'>
          <div className='auth-description'>{'이미 계정이 있으신가요? '}<span className='description-emphasis'>{'로그인'}</span></div>
        </div>
      </div>
    </div>
    );
  }
  
  //          render: 인증 페이지 렌더링         //
  return (
    <div id='auth-wrapper'> 
      <div className='auth-container'>
        <div className='auth-jumbotron-box'>
          <div className='auth-jumbotron-contents'>
            <div className='jumbotron-icon'></div>
            <div className='auth-jumbotron-text-box'>
              <div className='auth-jumbotron-text'>{'환영합니다.'}</div>
              <div className='auth-jumbotron-text'>{'HOONS BOARD 입니다.'}</div>
            </div>
          </div>
        </div>
        { view === 'sign-in' && <SignInCard /> }
        { view === 'sign-up' && <SignUpCard /> }
      </div>
    </div>
  );
  
}