import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import RestReview from '../components/RestReview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Restview1() {
  const {id}=useParams();
  console.log(id)

  const [show, setShow] = useState(false);
  const allRestaurant=useSelector((state)=>state.restaurentSlice.allRestuarant.restaurants)
  const selectedrestaurant=allRestaurant?.filter(Item=>Item.id==id)
  console.log("selerest",selectedrestaurant)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  



  return (
    <div>
      <Row className='mt-5 mb-3' >
        <Col md={1}>        </Col>

        <Col md={3} lg={3}>
          <img src={selectedrestaurant[0]?.photograph} height={'300px'}
            width={'100%'} style={{objectFit:"cover"}} />

        </Col>
        <Col md={7} lg={7}>
          <hr />
          <h4><span className='text-warning  me-2'> Restaurant</span>Details</h4>
          <hr />
          <ListGroup>
            <ListGroup.Item className='text-center'><h4>{selectedrestaurant[0]?.name}</h4></ListGroup.Item>
            <ListGroup.Item>Neighbourhood:<span>{selectedrestaurant[0]?.neighborhood}</span></ListGroup.Item>
            <ListGroup.Item>Address<span></span></ListGroup.Item>
            <ListGroup.Item>cuisine Type:<span>{selectedrestaurant[0]?.cuisine_type}</span></ListGroup.Item>
            <ListGroup.Item className='text-center p-3'>
              <button className='btn btn-warning' onClick={handleShow}>Operating Hours</button>
              <RestReview review={selectedrestaurant[0].reviews}></RestReview>

              
              </ListGroup.Item>
            

          </ListGroup>

        </Col>

      </Row>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday:<span className='text-primary'>{selectedrestaurant[0]?.operating_hours.Monday}</span></ListGroup.Item>
            <ListGroup.Item>Tuesday:<span className='text-primary'>{selectedrestaurant[0]?.operating_hours.Tuesday}</span></ListGroup.Item>
            <ListGroup.Item>wednesday:<span className='text-primary'>{selectedrestaurant[0]?.operating_hours.Wednesday}</span></ListGroup.Item>
            <ListGroup.Item>thursday:<span className='text-primary'>{selectedrestaurant[0]?.operating_hours.Thursday}</span></ListGroup.Item>
            <ListGroup.Item>Friday:<span className='text-primary'>{selectedrestaurant[0]?.operating_hours.Friday}</span></ListGroup.Item>
          </ListGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Restview1