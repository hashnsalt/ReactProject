import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount, delItem, addDaily} from "./store";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';

export default function Cart(){

  const state = useSelector((state) => {return state});
  const dispatch = useDispatch();
  let allCount = 0;
  let sumPrice = 0;
  let itemCount = 0;

  return(
    <div className="cart_wrap">
      <Container>
        <div className="path">
          <Link to={'/'}><span>모든 제품</span></Link><span>▶</span><span>장바구니</span>
        </div>
        <h2 className="cart_name">장바구니</h2>
        <hr />
        <div className="cart_item_list">
          <Table>
            <thead>
              <tr>
                <th style={{ width: 200 }}>게임 아이템</th>
                <th>이름</th>
                <th>원가</th>
                <th>할인율</th>
                <th>수량</th>
                <th>합계</th>
                <th>아이템제거</th>
              </tr>
            </thead>
            <tbody>
              {
                state.cart.map((item, i) => {
                  allCount += state.cart[i].count
                  if (state.cart[i].discount > 0) {
                    sumPrice += state.cart[i].count * (state.cart[i].price * (1 - state.cart[i].discount))
                  } else {
                    sumPrice += state.cart[i].count * state.cart[i].price
                  }
                  itemCount++
                  return (
                    <tr>
                      <td className="cart_item_img" onClick={() => {
                        dispatch(addDaily({id: state.cart[i].id, image: state.cart[i].image}))
                      }}><Link to={`/detail/${state.cart[i].num}`}>{state.cart[i].image}</Link></td>
                      <td className="cart_item_title">{state.cart[i].name}</td>
                      {
                        state.cart[i].price === 0 ? <><td className="c_del_cost">{state.cart[i].price}</td><td className="cart_discount">{state.cart[i].discount}</td></>
                          : state.cart[i].discount > 0 ? <><td className="c_del_cost">￦{(state.cart[i].price).toLocaleString()}</td><td className="cart_discount">{(state.cart[i].discount) * 100}%</td></>
                            : state.cart[i].price > 0 && state.cart[i].discount === 0 ? <><td className="c_item_cost">￦{(state.cart[i].price).toLocaleString()}</td><td className="cart_discount">{(state.cart[i].discount) * 100}</td></> : ''
                      }
                      <td className="count_btn">
                        <button onClick={() => {
                          dispatch(addCount(state.cart[i].id))
                        }}><i class="fa-solid fa-plus"></i></button>
                        <p className="count">{state.cart[i].count}</p>
                        <button onClick={() => {
                          dispatch(subCount(state.cart[i].id))
                        }}><i class="fa-solid fa-minus"></i></button>
                      </td>
                      <td className="c_result_cost">￦{state.cart[i].discount > 0 ? ((state.cart[i].price * (1 - state.cart[i].discount)) * state.cart[i].count).toLocaleString() : (state.cart[i].price * state.cart[i].count).toLocaleString()}</td>
                      <td><div className="del_txt" onClick={() => {
                        dispatch(delItem(state.cart[i].id))
                      }}><u>제거</u></div></td>
                    </tr>
                  )
                }) //map
              }
            </tbody>
            <div className="item_cart_count">{itemCount}</div>
            <tr className="last_total">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              {allCount > 0 ?
                <><td className="total_price">총 {allCount}개</td><td className="total_price">￦{sumPrice.toLocaleString()}</td></> : <p className="cart_zero_msg">장바구니가 비었습니다.</p>}
            </tr>
          </Table>
          <div className="order_btn">
            <button>선물하기</button>
            <button>주문하기</button>
          </div>
        </div>
      </Container>
    </div>
  )

}