import './App.css';
import {Container, Nav, Navbar, Carousel} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';
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

function App() {

  const navigate = useNavigate();
  const [games] = useState(game);

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
          </Nav>
        </Container>
      </Navbar>

      <Routes>

        <Route path='/*' element={
          <>
          <div style={{backgroundColor:'#2d2d2d'}}>
            <Carousel>
              <Carousel.Item>
                <img src={process.env.PUBLIC_URL+'/images/vs_main01.jpg'} alt="" style={{width:'40%'}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={process.env.PUBLIC_URL+'/images/vs_main02.jpg'} alt="" style={{width:'40%'}}/>
              </Carousel.Item>
              <Carousel.Item>
                <img src={process.env.PUBLIC_URL+'/images/vs_main03.jpg'} alt="" style={{width:'40%'}}/>
              </Carousel.Item>
            </Carousel>
          </div>
            <Container>
              <div className='nav_bg'>
                <Nav>
                  <Nav.Link onClick={() => {
                    navigate('/');
                  }}>BEST</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/action');
                  }}>액션</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/rpg');
                  }}>RPG</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/arcade');
                  }}>아케이드</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/casual');
                  }}>캐주얼</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/fighting');
                  }}>파이터</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/openWorld');
                  }}>오픈월드</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/platform')
                  }}>플랫폼</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/shooter')
                  }}>슈팅</Nav.Link>
                  <Nav.Link onClick={() => {
                    navigate('/controller')
                  }}>컨트롤러</Nav.Link>
                </Nav>
              </div>
            </Container>
            <Routes>
              <Route path='/' element={<Best data={games}/>}/>
              <Route path='/action' element={<Action />}/>
              <Route path='/rpg' element={<Rpg />}/>
              <Route path='/arcade' element={<Arcade />}/>
              <Route path='/casual' element={<Casual />}/>
              <Route path='/fighting' element={<Fighting />}/>
              <Route path='/openWorld' element={<OpenWorld />}/>
              <Route path='/platform' element={<Platform />}/>
              <Route path='/shooter' element={<Shooter />}/>
              <Route path='/controller' element={<Controller />}/>
            </Routes>
          </>
        }></Route>

        <Route path='community' element={<Community />} />
        <Route path='about' element={<About />}>

        </Route>
        <Route path='support' element={<Support />}/>

      </Routes>
    </div>
  );
}

export default App;
