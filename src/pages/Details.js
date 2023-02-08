import { useDispatch } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { addItem } from "./store";

export default function Detail(props) {

  const {data} = props
  const {id} = useParams()
  const dispatch = useDispatch()
  const [active, setActive] = useState(1)


  const ThumbView = styled.div`
    width: 800px; height: 450px;
    margin-right: 10px;

    .thumbnail_images {
      display: flex;
      margin-top: 10px;
    }

    .thumbnail_images .thumb {
      width: 25%; height: 100px;
      margin: 0 0 0 10px;
    }

    .thumbnail_images .thumb:nth-child(1) {
      margin: 0;
    }

    img {
      width: 100%; height: 100%;
    }
  `

  const Button = styled.button`
    padding: 2%; box-sizing: border-box;
    margin: 1% 2%;
    color: #61DAFB;
    background-color: #20232a;
    box-shadow: inset 1px 1px 2px 0px rgba(255,255,255,.5),
      0px 0px 20px 5px rgba(45,45,45,20%),
      0px 0px 20px 0px rgba(250,250,250,20%);
    border-radius: 5px;

      &:hover {
        box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,.5)
      }
    
  `

  return(
    <div className="detail_wrap">
      <Container>
        <div className="path">
          <Link to={'/'}><span>모든 제품</span></Link><span>▶</span><Link to={data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '액션' ? '/action'
            : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '아케이드' ? '/arcade'
              : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === 'RPG' ? '/rpg'
                : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '캐주얼' ? '/casual'
                  : data[id].tag01 || data[id].tag02 || data[id].tage03 || data[id].tag04 || data[id].tag05 === '컨트롤러' ? '/*/controller'
                    : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '파이터' ? '/fighting'
                      : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '오픈 월드' ? '/openWorld'
                        : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '플랫폼' ? '/platform'
                          : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '슈팅' ? '/shooter' : ''}>
            {data[id].tag01 || data[id].tag03 || data[id].tag05 === '액션' ? <span>액션 게임</span>
              : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '아케이드' ? <span>아케이드 게임</span>
                : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === 'RPG' ? <span>RPG 게임</span>
                  : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '캐주얼' ? <span>캐주얼 게임</span>
                    : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '컨트롤러' ? <span>컨트롤러 게임</span>
                      : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '파이터' ? <span>파이터 게임</span>
                        : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].type05 === '오픈 월드' ? <span>오픈월드 게임</span>
                          : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '플랫폼' ? <span>플랫폼 게임</span>
                            : data[id].tag01 || data[id].tag02 || data[id].tag03 || data[id].tag04 || data[id].tag05 === '슈팅' ? <span>슈팅 게임</span> : ''}</Link><span>▶</span><span>{data[id].name}</span>
        </div>
        <h2 className="detail_game_title" style={{ textAlign: 'left', margin: '20px 0' }}> {data[id].name}</h2>
        <div className="flex_detail_main">
          <ThumbView className="main_view">
            <img src={active === 1 ? data[id].imageon : active === 2 ? data[id].image : active === 3 ? data[id].image01 : active === 4 ? data[id].image02 : data[id].imageon} alt="" />
            <div className="thumbnail_images">
              <div className="thumb" onClick={() => {
                setActive(1)
              }}><img src={data[id].imageon} alt="" /></div>
              <div className="thumb" onClick={() => {
                setActive(2)
              }}><img src={data[id].image} alt="" /></div>
              <div className="thumb" onClick={() => {
                setActive(3)
              }}><img src={data[id].image01} alt="" /></div>
              <div className="thumb" onClick={() => {
                setActive(4)
              }}><img src={data[id].image02} alt="" /></div>
            </div>
          </ThumbView>
          <div className="item_detail">
            <div className="item_main_img">
              <img src={data[id].image} alt="" />
            </div>
            <div className="item_detail_info">
              <p className="detail_desc">{data[id].desc}</p>
              <div className="detail_info_txt">
                <p>출시일: {data[id].date}</p>
                {data[id].price === 0 ? <p>가격: ￦{(data[id].price).toLocaleString()}</p> : data[id].price > 0 && data[id].discount > 0 ? <><span className="detail_discount">{data[id].discount * 100}%</span><p className="detail_price_result"><span>가격: <del>￦{(data[id].price).toLocaleString()}</del></span><span style={{ fontWeight: '500', fontSize: '24px' }}>￦{(data[id].price * (1 - data[id].discount)).toLocaleString()}</span></p></> : data[id].price > 0 && data[id].discount === 0 ? <span>가격: ￦{(data[id].price).toLocaleString()}</span> : ''}
              </div>
              <Button onClick={() => {
                dispatch(addItem({ id: data[id].id, image: <img src={data[id].image} alt='' />, name: data[id].name, price: data[id].price, discount: data[id].discount, count: 1 }))
              }}>장바구니</Button>
              <Button>찜 하기</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}