import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";
import { applyjobAction } from "../../actions/applyjobAction";

import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
export const Dashboard = () => {
  const dispatch = useDispatch();

  const { resume } = useSelector((state) => state.resume);
  const { jobs } = useSelector((state) => state.applyjob);

  const [data, setData] = useState({});

  const handleChanged = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(applyjobAction(data));
  };

  const handleClick = (e) => {
    console.log("ui");
  };

  return (
    <AdminLayout>
      <div>
        <div className="m-5 p b-solid c-black shadow p-5">
          <Form onSubmit={handleSumit} className="mt-5">
            <h1 className="text-center mt-2">Jobs you want to apply</h1>
            <Form.Label htmlFor="basic-url">Your Job link</Form.Label>
            <Form.Control
              id="basic-url"
              type="text"
              name="url"
              onChange={handleChanged}
            />
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              required
              type="text"
              name="title"
              onChange={handleChanged}
              placeholder="Job Title"
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Job Description Requirements</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                onChange={handleChanged}
                rows={3}
              />
            </Form.Group>
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Applied Date</Form.Label>
              <Form.Control
                type="date"
                name="applydata"
                onChange={handleChanged}
              />
            </Form.Group>
            <Form.Group controlId="date" className="mb-3">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                type="date"
                name="duedate"
                onChange={handleChanged}
              />
            </Form.Group>
            <Button class="button" type="submit">
              Submit
            </Button>
            <Button class="button" type="reset">
              Reset
            </Button>
          </Form>
        </div>

        <div className="wrapper ">
          <h1 className="text-center mt-5">List of Saved jobs</h1>
          <div>
            <div className="  card-list  p-2 shadow">
              <h5 className="text-center">Apply</h5>

              {jobs.map((item) => {
                console.log("tt", item);
                return (
                  <div
                    onClick={handleClick}
                    className="p-3 square border border-dark mb-2"
                  >
                    <p className="text-center ">{item.title}</p>

                    <a href="{item.url}" target="blank">
                      Apply now
                    </a>
                  </div>
                );
              })}
            </div>
            <div className="  card-list  p-2 shadow">
              <h5 className="text-center">Pending</h5>
            </div>
            <div className="  card-list  p-2 shadow">
              <h5 className="text-center">Accepted</h5>
            </div>
            <div className="  card-list  p-2 shadow">
              <h5 className="text-center">Rejected</h5>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
