import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './Navigation.css'
import { NavDropdown,Button,Container,Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/userSlice';
import {Link} from 'react-router-dom'
/**
 * The navigation component for the web application
 */
import school from './school.png'
function Navigation() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  //The logout function 
  function handleLogout(e) {
    e.preventDefault()
    dispatch(logout());
  }
  //The cancel booking function

  

  return (
    <Navbar  className='main' bg="white" expand="md" >
      <Container>
        <Navbar.Brand><Link to='/home'><img src={school} alt="" className='powerk'/></Link> </Navbar.Brand>
        <h2>My School</h2>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
         
          {/** If no user */}
          {!user && (
          <Nav>

            <Nav.Link ><Link to="/login"> <Button variant="secondary" size='sm' className='btn1'>Log In</Button></Link></Nav.Link>
          </Nav>
          )
          }
         
           {user && !user.isAdmin && (
          <Nav>
              <NavDropdown title={`${user.username}`} id="basic-nav-dropdown">
                <NavDropdown.Item ><Button variant="secondary" size='sm' onClick={handleLogout} className='btn-log'>Log out</Button></NavDropdown.Item>
              </NavDropdown>
          </Nav>
          
          )} 
          {user && user.isAdmin &&(
         <Nav>
         <NavDropdown title={`${user.username}`} id="basic-nav-dropdown">
            <NavDropdown.Item ><Button variant="secondary" size='sm' onClick={handleLogout} className='btn-log'>Log out</Button></NavDropdown.Item>
             </NavDropdown>
         </Nav>
          )}
        </Navbar.Collapse>
      </Container>
                                 
    </Navbar>
  );
}

export default Navigation;