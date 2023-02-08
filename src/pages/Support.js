import { Container } from "react-bootstrap"
import styled from "styled-components"

export default function Support(){

  const Divbtn = styled.div`
    width: 100%;
    text-align: left;

    .sub_caption {
      font-size: 16px;
      color: #5b9add;
    }

    .product {
      width: 100%; height: 50px;
      background-color: rgba(68, 84, 104, 80%);
      padding: 0 1%;
      color: #fff;
      line-height: 50px;
      margin-bottom: 10px;
      cursor:pointer;

      &:hover {
        background-color: rgba(68, 84, 104, 100%);
      }

    }

    .help>div {
      width: 100%; height: 80px;
      background-color: rgba(68, 84, 104, 80%);
      padding: 0 1%;
      color: #fff;
      line-height: 80px;
      margin-bottom: 10px;
      cursor:pointer;

      &:hover {
        background-color: rgba(68, 84, 104, 100%);
      }
    }
  `

  return(
    <Container>
      <div className="support_wrap">
        <h2>Steam 고객지원</h2>
        <p>무엇을 도와드릴까요?</p>

        <Divbtn>
          <p className="sub_caption">인기 제품</p>
          <div className="product product01">
            <div><img src={process.env.PUBLIC_URL + '/images/support_p1.jpg'} alt="" /> <span>Counter-Striker:Global Offensive</span></div>
          </div>
          <div className="product product02">
          <div><img src={process.env.PUBLIC_URL + '/images/support_p2.jpg'} alt="" /> <span>Dota2</span></div>
          </div>
          <div className="product product03">
          <div><img src={process.env.PUBLIC_URL + '/images/support_p3.jpg'} alt="" /> <span>UBG: BATTLEGROUNDS</span></div>
          </div>
          <div className="product product04">
          <div><img src={process.env.PUBLIC_URL + '/images/support_p4.jpg'} alt="" /> <span>Apex 레전드<sup>TM</sup></span></div>
          </div>
          <hr />
          <div className="product mguidebtn"> <div><span>Steam Guard 모바일 인증기</span></div>
          </div>
          <hr />
          <div className="help">
            <div><span>게임, 소프트웨어, 기타</span></div>
            <div><span>구매</span></div>
            <div><span>나의 계정</span></div>
            <div><span>거래하기, 선물하기, 커뮤니티 장터  Steam 포인트</span></div>
            <div><span>Steam 클라이언트</span></div>
            <div><span>Steam 커뮤니티</span></div>
            <div><span>Steam 하드웨어</span></div>
          </div>
          <hr />
          <div className="help">
            <div><span>제가 Steam에서 구매하지 않은 항목이 청구되었습니다.</span></div>
          </div>
        </Divbtn>
      </div>
    </Container>
  )
}