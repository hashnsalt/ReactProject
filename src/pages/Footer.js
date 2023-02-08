import { Container } from "react-bootstrap";

export default function Footer(){
  return(
    <>
      <div className="footer_wrap">
        <Container>
          <hr />
          <div className="footer_top">
            <div className="foot_logo">
              <img src={process.env.PUBLIC_URL + '/images/valve_logo.png'} alt="" />
            </div>
            <p>ⓒ2023 Valve Corporation. All rights reserved. 모든 상표는 미국 및 기타 국가에서 해당하는 소유자의 재산입니다.
              <br />
              부가 가치세 포함
              <ul>
                <li>개인보호 정책</li>
                <li>사용권</li>
                <li>Steam 이용 약관</li>
                <li>환불</li>
                <li>쿠키</li>
              </ul>
            </p>
            <div className="foot_logo01">
              <img src={process.env.PUBLIC_URL + '/images/steam_logo01.png'} alt="" />
            </div>
          </div>
          <hr />
          <div className="footer_bottom">
            <ul>
              <li>Valv 정보</li>
              <li>채용 정보</li>
              <li>Steamworks</li>
              <li>Steam 배포</li>
              <li>지원</li>
              <li>기프트 카드</li>
            </ul>
          </div>
        </Container>
      </div>
    </>
  )
}