import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Me = () => {
  return (
    <div className="my-2 pt-4">
      <h1 className="text-center">My Working Hours</h1>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>Morning Hour </Card.Title>
            <Card.Text>8am to 12pm</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Evening</Card.Title>
            <Card.Text>2pm to 8pm</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title> Night</Card.Title>
            <Card.Text>8pm to 12pm</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Me;
