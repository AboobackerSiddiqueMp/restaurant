import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Restcard from '../components/Restcard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResturant } from '../redux/restaurantSlice';

function Home() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchResturant())

  },[])
  const allRestaurant= useSelector((state)=>state.restaurentSlice.allRestuarant.restaurants);
  console.log('1')
  console.log(allRestaurant)

 return (
    <div>
      <Row>
        <Col className='px-5 py-3'  >
          {
              <Restcard restaurant={allRestaurant}></Restcard>





          }



        </Col>
      </Row>
    </div>
  )
}

export default Home