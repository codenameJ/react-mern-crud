import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { AiFillHome } from "react-icons/ai";

import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";
import Home from "./components/home.component";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar className="" bg="dark" variant="dark">
          <Container>
            <NavBar.Brand>
              <Link to={"/"} className="nav-Link">
                <AiFillHome color="#ffffff" />
              </Link>
            </NavBar.Brand>
          </Container>
        </NavBar>

        <NavBar className="topnav" bg="dark">
          <Container>
            <Nav>
              <Nav.Item>
                <Link to={"/create-student"} className="nav-Link">
                  Create Student
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to={"/student-list"} className="nav-Link">
                  Student List
                </Link>
              </Nav.Item>
            </Nav>
          </Container>
        </NavBar>

        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route
                    path="/create-student"
                    component={CreateStudent}
                  ></Route>
                  <Route
                    path="/edit-student/:id"
                    component={EditStudent}
                  ></Route>
                  <Route path="/student-list" component={StudentList}></Route>
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
