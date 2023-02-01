import {Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Best(props) {
  
  const {data} = props

  return(
    <>
      <div className="game_list">
        <Container>
          <Col>
            {
              data.map((item, i) => {
                return (
                  <>
                    <Row>
                      <Link to={`/detail/${i}`}>
                        <div className='game_item'>
                          <div className='item_img'><img src={item.image} alt="" /></div>
                          <div className="item_info">
                            <h4>{item.name}</h4>
                          </div>
                        </div>
                      </Link>
                    </Row>
                  </>
                )
              })
            }
          </Col>
        </Container>
      </div>
    </>
  )
}