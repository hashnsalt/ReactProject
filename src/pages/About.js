// import { Container } from "react-bootstrap";
import styled from "styled-components"

export default function About() {

  const DownBtn = styled.button`
    overflow: hidden;
    width: 260px; height: 60px;
    background: linear-gradient(to right, rgb(6, 191, 255) 50%, rgb(43, 116, 255) 100%);
    border-radius: 5px;
    transform: translateX(-58%);
    position: relative;
    margin-bottom: 10px;

    p{
      color: #fff;
      font-size: 20px;
      text-align: left;
      padding: 0 5%;
      line-height: 55px;
      position: relative;
      z-index: 1;
    }

    img {
      float: right;
      padding-top: 8%;
    }

    .btn_bg {
      width: 0;
    }
    
    &:hover .btn_bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%; height: 60px;
      background: linear-gradient(to right, rgb(6, 191, 255) 100%, rgb(43, 116, 255) 100%);
      transition: all 0.5s;
    }
  `



    return(
        <>
        <div className="about_page">
          <section className="page01">
            <div className="bg">
              <div className="aside_info">
                <div className="about_logo"><img src={process.env.PUBLIC_URL + '/images/AboutLogo.png'} alt="" /></div>
                <h2>게임을 플레이하고, 게임에 대해 토론하고, 게임을 창작하는 최고의 공간 입니다.</h2>
                <DownBtn><p>Steam 설치하기 <img src={process.env.PUBLIC_URL + '/images/about_icon-windowsos.png'} alt="" /></p>
                  <div className="btn_bg"></div>
                </DownBtn>
                <p>Use OS: <img src={process.env.PUBLIC_URL + '/images/about_icon-macos.png'} alt="" />
                  <img src={process.env.PUBLIC_URL + '/images/about_icon-steamos.png'} alt="" /></p>
              </div>
              <div className="info_view">
                <img src={process.env.PUBLIC_URL + '/images/about01.png'} alt="" />
              </div>
            </div>
          </section>

          <section className="page02">
            <div className="bg">
              <div className="play_sign">
                <h2>게임에 즉시 접속 가능</h2>
                <p>AAA 게임에서 인디 게임까지, 약 30,000개의 게임이 준비되어 있습니다. 특별 할인, 게임 자동 업데이트, 그 외 많은 혜택을 누리세요!</p>
              </div>
              <div className="down_arr">
                <p>자세히 알기</p>
                <div className="down_arr_icon"><img src={process.env.PUBLIC_URL + '/images/about_btn_down.png'} alt="" /></div>
              </div>
            </div>
          </section>
          <section className="page03">
            <div className="bg">
              <div className="info_flex info01">
                <div className="info_txt">
                  <h2>커뮤니에 참가하기</h2>
                  <p>새로운 친구를 사귀고, 게임 그룹에 가입하고, 클랜을 만들고, 게임 내에서 대화를 나눠보세요! 1억 명이 넘는 친구(또는 적)과 함께라면 즐거움은 멈추지 않습니다.</p>
                </div>
                <div className="info_view">
                  <img src={process.env.PUBLIC_URL + '/images/about03.png'} alt="" />
                </div>
              </div>
              <div className="info_flex info02">
              <div className="info_view">
                  <img src={process.env.PUBLIC_URL + '/images/about04.png'} alt="" />
              </div>
              <div className="info_txt">
                  <h2>Steam 하드웨어 경험</h2>
                  <p>더욱 향상된 PC 게임 환경을 제공하기 위해 저희는 HTC Vive에 사용되는 Steam Controller와 VR 기술을 개발했습니다.</p>
                </div>
              </div>
              <div className="info_flex info03">
                <div className="info_txt">
                  <p className="steam_logo"><img src={process.env.PUBLIC_URL + '/images/about_logo-steamworks.png'} alt="" /></p>
                  <h2>Game 출시하기</h2>
                  <p>더욱 향상된 PC 게임 환경을 제공하기 위해 저희는 HTC Vive에 사용되는 Steam Controller와 VR 기술을 개발했습니다.</p>
                </div>
                <div className="info_view">
                  <img src={process.env.PUBLIC_URL + '/images/about02.png'} alt="" />
                </div>
              </div>

            </div>
          </section>
        </div>
        </>
    )
}