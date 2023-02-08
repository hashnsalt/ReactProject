import {Row, Col, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem, addDaily } from './store';
import { useState } from 'react';
import styled from 'styled-components';

export default function Platform(props){
  
  const {data} = props;
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState();
  const [alert, setAlert] = useState(false);


  const DivItem = styled.div`
    display: flex;
    border: 1px solid #eee;
    box-shadow: 0 0 5px rgba(0, 0, 0, 70%);
    margin-bottom: 20px;
    transition: all 0.3s;
    padding: 0;

    .item_img {
      width: 470px; height: 250px;
      padding: 1%;
      img{
        width: 100%;
        height: 100%;
      }
    }

    .cart_add_btn {
      display:none;
      padding: 1%; box-sizing: border-box;
      margin-left: 10px;
      border-radius: 5px;
      font-weight: bold;
      color: #61DAFB;
      background-color: #20232a;
      box-shadow: inset 1px 1px 2px 0px rgba(255,255,255,.5),
      0px 0px 20px 5px rgba(45,45,45,20%),
      0px 0px 20px 0px rgba(250,250,250,20%);

    }

    &:hover {
      transform: scale(1.05, 1.15);
      transition: all 0.3s;
      .cart_add_btn{
        display: block;
      
        &:hover {
          box-shadow: inset 1px 1px 2px 0px rgba(0,0,0,.5)
        }
      }
      .item_img {
        width: 470px; height: 100%;
        padding: 0;
      }
    }
  `

  const AlertBtn = styled.button`
    width: 100px; height: 50px;
    border-radius: 10px;
    margin: 0 1%;
    position: absolute;
    background-color: #8F98A0;
    bottom: 20%;
    box-shadow:  -6px -20px 35px #8F98A0, -6px -10px 15px #c1c1c1, -20px 0px 30px #8F98A0, 0px 0px 25px rgba(0,0,0,20%);
    border: 1px solid #eee;

    &:hover {
      box-shadow: inset 0px 0px 10px 1px rgba(0, 0, 0, 50%);
      border: none;
    }

    &:nth-child(1) {
      left: 25%;
    }

  `
  
  return(
    <>
      <div className="game_list">
        <Container>
          <Col>
            {
              data.map((item, i) => { 
                return (
                  <>
                  {item.tag01 === '플랫폼' || item.tag02 === '플랫폼' || item.tag03 === '플랫폼' || item.tag04 === '플랫폼' || item.tag05 === '플랫폼' ? 
                    <Row>
                        <DivItem className='game_item' onMouseOver={() => {
                          setHover(true)
                          setIndex(i)
                        }} onMouseOut={() => { setHover(false) }}>
                        <Link to={`/detail/${i}`}>
                          <div className='item_img' onClick={() => {
                              dispatch(addDaily({id: item.id, num: item.num, image: <img src={item.image} alt='' />}))
                            }}><img src={hover === true && index === i ? item.imageon : item.image} alt="" /></div>
                          </Link>
                          <div className="item_info">
                            <h4>{item.name}</h4>
                            <ul className="tag_list">
                              <li>{item.tag01}</li>
                              <li>{item.tag02}</li>
                              <li>{item.tag03}</li>
                              <li>{item.tag04}</li>
                              <li>{item.tag05}</li>
                            </ul>
                            <div><p>{hover===true && index === i ? item.desc : <><b>출시일: </b>{item.date}</>}</p></div>
                            <div class='price'>
                              {item.price === 0 ? <p className='free_play'>무료 플레이</p>
                              :item.discount > 0 ? <><p className='discount_per'>{(item.discount)*100}%</p><p className='cost_result'><p className='del_cost'>￦{  (item.price).toLocaleString()}</p><p className='discount_cost'>￦{((item.discount)*(item.price)).toLocaleString()}</p></p></>
                :item.price > 0 && item.discount === 0 ? <p className='item_cost'>￦{(item.price).toLocaleString()}</p> :''}
                <button className='cart_add_btn' onClick={() => {
                                dispatch(addItem({ id: item.id, image: <img src={item.image} alt='' />, name: item.name, price: item.price, discount: item.discount, count: 1 }))
                                setAlert(true);
                              }}>장바구니</button>
                            </div>
                          </div>
                        </DivItem>
                    </Row>
                  : ''}
                  </>
                )
              })
            }
          </Col>
          {alert === true 
        ? <div className='cart_alert'>
          <h3>장바구니로 이동하시겠습니까?</h3>
            <div className="alert_btn_compo">
              <Link to='/cart'><AlertBtn>예</AlertBtn></Link>
              <AlertBtn onClick={() => {
                setAlert(false);
              }}>아니오</AlertBtn>
            </div>
        </div> 
        : null}
        </Container>
      </div>
    </>
  )
}