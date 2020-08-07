import React from 'react';
import './App.css';
import kakao from './kakaotalk.png';
import google from './google.jpg';
import facebook from './facebook.png';
import bg from './bg.jpg';
import musicnote from './musicnote.jpg';

function Login(){
  return (
    <div className="login">
      <h2 className="loginLogo">Login</h2>
      <div>
        <button type="button" className="loginBtn kakao"><img src={kakao} alt="kakao" className="loginImg" /></button>
        <button type="button" className="loginBtn"><img src={google} alt="google" className="loginImg" /></button>
        <button type="button" className="loginBtn facebook" ><img src={facebook} alt="facebook" className="loginImg" /></button>
      </div>
    </div>
  )
}

function Home() {
  return(
    <div className="home">
      <div className="top">
        <button type="button" className="BgmBtn">
        <h3>배경음</h3><img src={musicnote} alt="배경음" className="musicnote" /></button>
        <button type="button" className="BgmBtn">
        <h3>효과음</h3><img src={musicnote} alt="효과음" className="musicnote" /></button>
      </div>
      <div className="bottom">
        <div className="homeLeft">
           <h3 className="homeText">나랑 보안탈출 할래...?</h3>
        </div>
        <div className="homeRight">
          <ul>
            <li className="menubar menuFirst">설정</li>
            <li className="menubar menuSecond">새로하기</li>
            <li className="menubar menuThird">이어하기</li>
            <li className="menubar menuFourth">랭킹</li>
            <li className="menubar menuFifth">로그아웃</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }

  render(){
    const {isLoading} = this.state;
    return (
      <div className="body">
        {isLoading ? <Login /> : <Home />}
    </div>
    );
  }
}

export default App;
