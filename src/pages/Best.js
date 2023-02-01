import {Row, Col} from 'react-bootstrap'

export default function Best(props) {
  
  const {data} = props

  return(
    <>
      <div className="game_list">
        <Col>
          {
            data.map((item) => {
              return(
                <>
                 <Row>
                    <img src={item.image} alt=""/>
                    <h4>{item.name}</h4>
                 </Row>
                </>
              )
            })
          }
        </Col>
      </div>
    </>
  )
}