import React from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
export const Dashboard = () => {
  var css = {
    h1: {
      padding: 0,
    },
  };
  return (
    <AdminLayout style={css.form}>
      <div>
        <div className="m-5 b-solid c-black shadow p-5">
          <h1 className="text-center mt-2">Provide your Applied Jobs</h1>
          <Form className="mt-5">
            <Form.Label htmlFor="basic-url">Your Job link</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                https://example.com/users/
              </InputGroup.Text>
              <Form.Control id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
            <Form.Label>Job Title</Form.Label>
            <Form.Control required type="text" placeholder="Job Title" />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Job Description Requirements</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Applied Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button size="lg">Submit</Button>{" "}
          </Form>{" "}
        </div>

        <div className="m-5  g-3 justify-content-around d-grid  p-2 align-items-center  shadow p-5">
          <h1 className="text-center">Description</h1>
          <h1 className="text-center mt-5">List of Applied jobs</h1>

          <Table className="mt-5" striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Job Title</th>
                <th>Job Link</th>
                <th>Applied Date</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Software Eng</td>
                <td>https:://www.example.com</td>
                <td>24/04/2023</td>
                <td>24/04/2023</td>
                <td>pending/Accepted/hired</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Software Eng</td>
                <td>https:://www.example.com</td>
                <td>24/04/2023</td>
                <td>24/04/2023</td>
                <td>pending/Accepted/hired</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Software Eng</td>
                <td>https:://www.example.com</td>
                <td>24/04/2023</td>
                <td>24/04/2023</td>
                <td>pending/Accepted/hired</td>
              </tr>
            </tbody>
          </Table>

          <div className="m-5 d-flex f-wrap">
            {/* <Card className="m-5" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Applied Jobs</Card.Title>
                <hr></hr>
                <Card.Subtitle className="mb-2 text-muted">
                  Job Title
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Applied Date:</ListGroup.Item>
                  <ListGroup.Item>Status:</ListGroup.Item>
                  <ListGroup.Item>Due Date:</ListGroup.Item>
                </ListGroup>
                <hr></hr>

                <Card.Link href="#">Job Link</Card.Link>
              </Card.Body>
            </Card> */}

            <Card className="m-5" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Pending Jobs</Card.Title>
                <hr></hr>
                <Card.Subtitle className="mb-2 text-muted">
                  Job Title
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Applied Date:</ListGroup.Item>
                  <ListGroup.Item>Status:</ListGroup.Item>
                  <ListGroup.Item>Due Date:</ListGroup.Item>
                </ListGroup>
                <hr></hr>

                <Card.Subtitle className="mb-2 text-muted">
                  Optimise your CV
                </Card.Subtitle>
                <Card.Text>
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                </Card.Text>

                <Card.Link href="#">Job Link</Card.Link>
              </Card.Body>
            </Card>

            <Card className="m-5" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Accepted Jobs</Card.Title>
                <hr></hr>
                <Card.Subtitle className="mb-2 text-muted">
                  Job Title
                </Card.Subtitle>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Applied Date:</ListGroup.Item>
                  <ListGroup.Item>Status:</ListGroup.Item>
                  <ListGroup.Item>Due Date:</ListGroup.Item>
                </ListGroup>
                <hr></hr>
                <Card.Subtitle className="mb-2 text-muted">
                  Possible Interview Questions
                </Card.Subtitle>
                <Card.Text>What is Boostrap??</Card.Text>

                <Card.Subtitle className="mb-2 text-muted">
                  Interview DAte
                </Card.Subtitle>
                <Card.Text>Date:</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Optimise your CV
                </Card.Subtitle>
                <Card.Text>
                  <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ol>
                </Card.Text>
                <Card.Link href="#">Job Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
