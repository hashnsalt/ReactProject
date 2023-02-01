import { useParams } from "react-router-dom"

export default function Detail(props) {

  const {data} = props
  const {id} = useParams()

  return(
    <>
      <h2>DetailPage</h2>
      <img src={data[id].image} alt="" />
    </>
  )
}