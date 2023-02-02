import { useDispatch, useSelector } from "react-redux"
import { addCount, subCount, delItem} from "./store";
import { Link } from "react-router-dom";

export default function Cart(){

  const state = useSelector((state) => {return state});
  const dispatch = useDispatch();
  let allCount = 0;
  let sumPrice = 0;
  
  return(
    <div>
      <Link to={'/'}><span>모든 제품</span></Link><span>▶</span><span>장바구니</span>
      <h2>장바구니</h2>
      <div className="cart_item_list">
        {
          state.cart.map((item, i) => {
            allCount += state.cart[i].count
            sumPrice += state.cart[i].count*state.cart[i].price
            return(
              <>
                <div>{state.cart[i].id}</div>
                <div>{state.cart[i].name}</div>
                <button onClick={() => {
                dispatch(addCount(state.cart[i].id))
              }}><i class="fa-solid fa-plus"></i></button>
                <div>{state.cart[i].count}</div>
                <button onClick={() => {
                  dispatch(subCount(state.cart[i].id))
                }}><i class="fa-solid fa-minus"></i></button>
                <div className="cart_price">
                {
                  state.cart[i].price === 0 ? <p>0</p> 
                  : state.cart[i].discount > 0 ? <><div className="cart_cost_result"><div className="c_del_cost">￦{state.cart[i].price}</div><div className="c_discount_cost">￦{state.cart[i].price*state.cart[i].discount}</div></div></>
                  : state.cart[i].price > 0 && state.cart[i].discount === 0 ? <div className="c_item_cost">￦{(state.cart[i].price)}</div> : ''
                }
                </div>
                <p className="del_item" onClick={()=>{
                  dispatch(delItem(state.cart[i].id))
                }}><u>삭제</u></p>
              </>
            )
          })//map
        }
        <p className='sum_result'>{allCount}</p>
        <p className='sum_result'>{sumPrice}</p>
      </div>
    </div>
  )

}