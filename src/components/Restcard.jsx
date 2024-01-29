import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restcard({ restaurant }) {
  return (
    <Container fluid>
      <Row>
        {restaurant?.length > 0 ? (
          restaurant.map((data) => (
            <Col key={data.id} xs={12} sm={6} md={4} lg={3}>
              <Link to={`/restview/${data.id}`} style={{ textDecoration: 'none' }}>
                <Card style={{ width: '18rem' }} className='mt-3'>
                  <Card.Img
                    variant="top"
                    src={data.photograph}
                    height={'300px'}
                    width={'100%'}
                  />
                  <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>Neighbourhood: {data.neighborhood}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <h1>no data to show</h1>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Restcard;
