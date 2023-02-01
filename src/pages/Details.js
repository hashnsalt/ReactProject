import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

export default function Detail(props) {

  const {data} = props
  const {id} = useParams()
  const dispatch = useDispatch()

  return(
    <>
      <h2>DetailPage</h2>
      <img src={data[id].image} alt="" />
      <button>장바구니</button>
    </>
  )
}