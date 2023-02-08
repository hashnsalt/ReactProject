import './App.css';
import './pages/pages.css'
import {Container, Nav, Navbar, Carousel} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import game from './pages/productData';
import About from './pages/About';
import Community from './pages/Community';
import Support from './pages/Support';
import Action from './pages/Action';
import Rpg from './pages/Rpg';
import Best from './pages/Best';
import Arcade from './pages/Arcade';
import Casual from './pages/Casual';
import Fighting from './pages/Fighting';
import OpenWorld from './pages/OpenWorld';
import Platform from './pages/Platform';
import Shooter from './pages/Shooter';
import Controller from './pages/Controller';
import Detail from './pages/Details';
import Cart from './pages/Cart';
import Footer from './pages/Footer';

import { useDispatch, useSelector } from 'react-redux';
import { delDaily } from './pages/store';

function App() {

  // const dailyView = () => { document.querySelector('.daily_view');
  //           dailyView.style.cssText = `right: 0`;
  //         }

  const navigate = useNavigate();
  const [games] = useState(game);
  const [active, setActive] = useState(1);
  const [thumb, setThumb] = useState(1);
  const state = useSelector((state) => {
    return state;
  })
  const dispatch = useDispatch();
  // let cartCount = 0;

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => {
            navigate('/');
          }}><img src={process.env.PUBLIC_URL + '/images/STEAM.png'} alt="" style={{width: 150}}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {
              navigate('/');
            }}>MAIN</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/community');
            }}>COMMUNITY</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/about');
            }}>ABOUT</Nav.Link>
            <Nav.Link onClick={() => {
              navigate('/support')
            }}>SUPPORT</Nav.Link>
            <Nav.Link className='cart_link' onClick={() => {
              navigate('/cart')
            }}><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path='/*' element={
          <>
          <div style={{backgroundColor:'#2d2d2d'}}>
            <Carousel>
                <Carousel.Item>
                  <div className='vs_main vs_main01'>
                    <div className='vs_img'><img src={thumb === 1 ? process.env.PUBLIC_URL + '/images/vs_main01.jpg' : thumb === 2 ? process.env.PUBLIC_URL + '/images/vs_main01_2.jpg' : thumb === 3 ? process.env.PUBLIC_URL + '/images/vs_main01_3.jpg' : thumb === 4 ? process.env.PUBLIC_URL + '/images/vs_main01_4.jpg' : process.env.PUBLIC_URL + '/images/vs_main01.jpg'} alt="" /></div>
                    <div className='thumb_vs_main'>
                      <h3>Grand Theft Auto</h3>
                      <div className="thumb_img_box">
                        <div className={thumb === 1 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(1)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main01.jpg'} alt="" /></div>
                        <div className={thumb === 2 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(2)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main01_2.jpg'} alt="" /></div>
                        <div className={thumb === 3 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(3)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main01_3.jpg'} alt="" /></div>
                        <div className={thumb === 4 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(4)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main01_4.jpg'} alt="" /></div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='vs_main vs_main02'>
                    <div className='vs_img'><img src={thumb === 5 ? process.env.PUBLIC_URL + '/images/vs_main02.jpg' : thumb === 6 ? process.env.PUBLIC_URL + '/images/vs_main02_1.jpg' : thumb === 7 ? process.env.PUBLIC_URL + '/images/vs_main02_2.jpg' : thumb === 8 ? process.env.PUBLIC_URL + '/images/vs_main02_3.jpg' : process.env.PUBLIC_URL + '/images/vs_main02.jpg'} alt="" /></div>
                    <div className='thumb_vs_main'>
                      <h3>SPORT<sup>ⓒFA</sup> FIFA</h3>
                      <div className="thumb_img_box">
                        <div className={thumb === 5 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(5)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main02.jpg'} alt="" /></div>
                        <div className={thumb === 6 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(6)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main02_1.jpg'} alt="" /></div>
                        <div className={thumb === 7 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(7)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main02_2.jpg'} alt="" /></div>
                        <div className={thumb === 8 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(8)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main02_3.jpg'} alt="" /></div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              <Carousel.Item>
              <div className='vs_main vs_main03'>
                    <div className='vs_img'><img src={thumb === 9 ? process.env.PUBLIC_URL + '/images/vs_main03.jpg' : thumb === 10 ? process.env.PUBLIC_URL + '/images/vs_main03_1.jpg' : thumb === 11 ? process.env.PUBLIC_URL + '/images/vs_main03_2.jpg' : thumb === 12 ? process.env.PUBLIC_URL + '/images/vs_main03_3.jpg' : process.env.PUBLIC_URL + '/images/vs_main03.jpg'} alt="" /></div>
                    <div className='thumb_vs_main'>
                      <h3>BATTLEGROUNDS</h3>
                      <div className="thumb_img_box">
                        <div className={thumb === 9 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(9)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main03.jpg'} alt="" /></div>
                        <div className={thumb === 10 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(10)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main03_1.jpg'} alt="" /></div>
                        <div className={thumb === 11 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(11)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main03_2.jpg'} alt="" /></div>
                        <div className={thumb === 12 ? 'vs_thumb_img pick' : 'vs_thumb_img'} onClick={() => {
                          setThumb(12)
                        }}><img src={process.env.PUBLIC_URL + '/images/vs_main03_3.jpg'} alt="" /></div>
                      </div>
                    </div>
                  </div>
              </Carousel.Item>
            </Carousel>
          </div>
            <Container>
              <div className='nav_bg'>
                <Nav>
                  <Nav.Link className={active === 1 ? 'active' : ''} onClick={() => {
                    navigate('/*');
                    setActive(1);
                  }}>BEST</Nav.Link>
                  <Nav.Link className={active === 2 ? 'active' : ''} onClick={() => {
                    navigate('/action');
                    setActive(2);
                  }}>액션</Nav.Link>
                  <Nav.Link className={active === 3 ? 'active' : ''} onClick={() => {
                    navigate('/rpg');
                    setActive(3);
                  }}>RPG</Nav.Link>
                  <Nav.Link className={active === 4 ? 'active' : ''} onClick={() => {
                    navigate('/arcade');
                    setActive(4);
                  }}>아케이드</Nav.Link>
                  <Nav.Link className={active === 5 ? 'active' : ''} onClick={() => {
                    navigate('/casual');
                    setActive(5);
                  }}>캐주얼</Nav.Link>
                  <Nav.Link className={active === 6 ? 'active' : ''} onClick={() => {
                    navigate('/fighting');
                    setActive(6);
                  }}>파이터</Nav.Link>
                  <Nav.Link className={active === 7 ? 'active' : ''} onClick={() => {
                    navigate('/openWorld');
                    setActive(7);
                  }}>오픈월드</Nav.Link>
                  <Nav.Link className={active === 8 ? 'active' : ''} onClick={() => {
                    navigate('/platform');
                    setActive(8);
                  }}>플랫폼</Nav.Link>
                  <Nav.Link className={active === 9 ? 'active' : ''} onClick={() => {
                    navigate('/shooter');
                    setActive(9);
                  }}>슈팅</Nav.Link>
                  <Nav.Link className={active === 10 ? 'active' : ''} onClick={() => {
                    navigate('/controller');
                    setActive(10);
                  }}>컨트롤러</Nav.Link>
                </Nav>
              </div>
              <Routes>
                <Route path='/*' element={<Best data={games} />} />
                <Route path='/action' element={<Action data={games} />} />
                <Route path='/rpg' element={<Rpg data={games} />} />
                <Route path='/arcade' element={<Arcade data={games} />} />
                <Route path='/casual' element={<Casual data={games} />} />
                <Route path='/fighting' element={<Fighting data={games} />} />
                <Route path='/openWorld' element={<OpenWorld data={games} />} />
                <Route path='/platform' element={<Platform data={games} />} />
                <Route path='/shooter' element={<Shooter data={games} />} />
                <Route path='/controller' element={<Controller data={games} />} />
              </Routes>
            </Container>
          </>
        }></Route>

        <Route path='community' element={<Community />} />
        <Route path='about' element={<About />}>

        </Route>
        <Route path='support' element={<Support />}/>
        <Route path='detail/:id' element={<Detail data={games} />}/>
        <Route path='cart' element={<Cart />}/>

      </Routes>
      <div className="daily_view">
        <div className="daily_view_btn"><p>오늘 본 상품</p></div>
        <div className="daily_view_box">
          <p className="daily_p">오늘 본 상품</p>
          <div className="daily_img_box">
            {
              state.pick.map((item, i) => {
                return (
                  <>
                    <div className="thumb_image">
                      <Link to={`/detail/${state.pick[i].num}`} className='daily_view_img'>{state.pick[i].image}</Link>
                      <div className="view_img_del" onClick={() => {
                        dispatch(delDaily(state.pick[i].id))
                      }}>X</div>
                    </div>
                  </>
                )
              }
              )
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
