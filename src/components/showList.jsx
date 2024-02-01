import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import  Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const showList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => response.json())
      .then((data) => setShows(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1> <strong>Select shows to watch!!</strong></h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {shows.map((show) => (
          <div key={show.show.id} className="col">
            <Card style={{ width: '18rem' }}>
              <Link to={`/show/${show.show.id}`}>
                {show.show.image && show.show.image.medium && (
                  <Card.Img src={show.show.image.medium} alt={show.show.name} />
                )}
              </Link>
              <Card.Body>
               
                  <Card.Title><h2>{show.show.name}</h2></Card.Title>
                
                <Card.Text>
                <p className="card-text">
                  <strong>Runtime:</strong> {show.show.runtime} minutes<br />
                  <strong>Premiered:</strong> {show.show.premiered}<br />
                  <strong>Status:</strong> {show.show.status}<br />
                  <strong>Language:</strong> {show.show.language}
                </p>
                </Card.Text>
                <Link to={`/show/${show.show.id}`}>
                  <Button variant="Primary" className="button">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default showList;
