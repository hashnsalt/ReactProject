import {Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Fighting(props) {

  const {data} = props;

  return(
    <>
      <div className="game_list">
        <Container>
          <Col>
            {
              data.map((item, i) => { 
                return (
                  <>
                  {item.tag01 === '파이터' || item.tag02 === '파이터' || item.tag03 === '파이터' || item.tag04 === '파이터' || item.tag05 === '파이터' ? 
                    <Row>
                      <Link to={`/detail/${i}`}>
                        <div className='game_item'>
                          <div className='item_img'><img src={item.image} alt="" /></div>
                          <div className="item_info">
                            <h4>{item.name}</h4>
                            <ul className="tag_list">
                              <li>{item.tag01}</li>
                              <li>{item.tag02}</li>
                              <li>{item.tag03}</li>
                              <li>{item.tag04}</li>
                              <li>{item.tag05}</li>
                            </ul>
                            <div><p>출시일: {item.date}</p></div>
                            <div class='price'>
                              {item.price === 0 ? <p className='free_play'>무료 플레이</p>
                              :item.discount > 0 ? <><p className='discount_per'>{(item.discount)*100}%</p><p className='cost_result'><p className='del_cost'>￦{  (item.price).toLocaleString()}</p><p className='discount_cost'>￦{((item.discount)*(item.price)).toLocaleString()}</p></p></>
                :item.price > 0 && item.discount === 0 ? <p className='item_cost'>￦{(item.price).toLocaleString()}</p> :''}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Row>
                  : ''}
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