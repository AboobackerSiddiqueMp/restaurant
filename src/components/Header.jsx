import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurantSlice';



function Header() {
  const dispatch=useDispatch()
  return (

    <div>
            <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand ><Link to={'/'} style={{color:'white',textDecoration:'none'}}>Food-Circle</Link></Navbar.Brand>
          <input type="text"  className='form-control w-25' onChange={(e)=>dispatch(search(e.target.value))}/><i class="fa-solid fa-magnifying-glass"></i>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header