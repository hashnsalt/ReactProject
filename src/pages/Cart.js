import { useDispatch, useSelector } from "react-redux"
import { addCount } from "./store";

export default function Cart(){

  const state = useSelector((state) => {return state});
  const dispatch = useDispatch();
  
  return(
    <div>
      <span>모든 제품</span><span>▶</span><span>장바구니</span>
      <h2>장바구니</h2>
      <div className="cart_item_list">
        {
          state.cart.map((item, i) => {
            return(
              <>
                <div>{state.cart[i].id}</div>
                <div>{state.cart[i].name}</div>
                <div>{state.cart[i].count}</div>
                <button onClick={() => {
                dispatch(addCount(state.cart[i].id))
              }}>+</button>
              </>
            )
          })
        }
      </div>
    </div>
  )

}