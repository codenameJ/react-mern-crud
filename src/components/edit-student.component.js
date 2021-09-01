import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/students/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno,
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student Update Success");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/student-list");
    window.location.reload();
  };

  render() {
    return (
      <div className="form-wrapper mt-5">
        <h1>Update Student</h1>
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
            Update Student
          </Button>
        </Form>
      </div>
    );
  }
}
