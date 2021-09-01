import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
  }

  onChangeStudentName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangeStudentEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onChangeStudentRoleno = (e) => {
    this.setState({ rollno: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    };
    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));

    // console.log("Student Successfully Created");
    // console.log(`name : ${this.state.name}`);
    // console.log(`email : ${this.state.email}`);
    // console.log(`rollno : ${this.state.rollno}`);

    this.setState({
      name: "",
      email: "",
      rollno: "",
    });
  };

  render() {
    return (
      <div className="form-wrapper mt-5">
        <h1>Create Student</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name" className="mt-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
            />
          </Form.Group>

          <Form.Group controlId="Email" className="mt-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
            />
          </Form.Group>

          <Form.Group controlId="Roll" className="mt-3">
            <Form.Label>Roll No.</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRoleno}
            />
          </Form.Group>

          <Button
            variant="success"
            size="lg"
            block="block"
            type="submit"
            className="mt-3"
          >
            Create Student
          </Button>
        </Form>
      </div>
    );
  }
}
