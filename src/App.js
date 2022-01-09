import React from "react";
import Cardd from "./component/cardd";
import img1 from "./book.jpg";
// import "../src/csssss/card.css";
import { Row, Col ,Container} from "react-bootstrap";

const App = () => {
  return (
    <>   
      <Container className="mt-4" style={{position:"relative" , left:"45px"}}>
        <Row className="">
          <Col sm={4} md={4}>
            <Cardd CardTitle="Book" CardText="Author Mehul" img={img1} />
          </Col>
          <Col sm={4} md={4}>
            <Cardd CardTitle="Book" CardText="Author Dharmit" img={img1} />
          </Col>
          <Col sm={4} md={4}>
            <Cardd CardTitle="Book" CardText="Author Kiran" img={img1} />
          </Col>
          <Col sm={4} md={4}>
            <Cardd CardTitle="Book" CardText="Author Devangi" img={img1} />
          </Col>
          <Col sm={4} md={4}>
            <Cardd CardTitle="Book" CardText="Author Karishma" img={img1} />
          </Col>
          <Col sm={4} md={4}>
            <Cardd CardTitle="Book" CardText="Author Komal" img={img1} />
          </Col>
          </Row>
      </Container>
    </>
  );
};

export default App;