import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Form } from 'react-bootstrap';

const ShowSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [bookingData, setBookingData] = useState({
    yourName: '',
    numberOfTickets: 1, 
    paymentMode: 'Credit Card', 
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
        setBookingData((prevData) => ({
          ...prevData,
          showName: data.name,
          runtime: data.runtime,
        }));
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBookShow = () => {
    
    console.log('Booking show:', bookingData);
  };

  return (
    <div className="container mt-4">
      <h1>Summary</h1>
      {show && (
        <Card className='Card'>
          <Card.Body>
            <Card.Title> <h2>{show.name}</h2></Card.Title>
            <Card.Text> <p><h5>{show.summary}</h5></p></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Form className='form '>
              <Form.Group className = "mb-3" controlId="formShowName">
                <Form.Label><h4>Show Name</h4></Form.Label>
                <Form.Control type="text" value={show.name} readOnly />
              </Form.Group>
              <Form.Group className = "mb-3" controlId="formRuntime">
                <Form.Label><h4>Runtime </h4></Form.Label>
                <Form.Control type="text" value={show.runtime} readOnly />
              </Form.Group>
              <Form.Group className = "mb-3" controlId="formYourName">
                <Form.Label> <h4>Your Name </h4></Form.Label>
                <Form.Control
                  type="text"
                  name="yourName"
                  value={bookingData.yourName}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className= "mb-3" controlId="formNumberOfTickets">
                <Form.Label> <h4>Number of Tickets </h4></Form.Label>
                <Form.Control
                  type="number"
                  name="numberOfTickets"
                  value={bookingData.numberOfTickets}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className= "mb-3" controlId="formPaymentMode">
                <Form.Label> <h4>Payment Mode </h4></Form.Label>
                <Form.Control
                  as="select"
                  name="paymentMode"
                  value={bookingData.paymentMode}
                  onChange={handleInputChange}
                >
                  <option>Credit Card</option>
                  <option>Debit Card</option>
                  <option>UPI</option>
               
                </Form.Control>
              </Form.Group>
              <Button onClick={handleBookShow} className='button'>
                Book
              </Button>
            </Form>
          </Card.Footer>
        </Card>
      )}
    </div>
  );
};

export default ShowSummary;
