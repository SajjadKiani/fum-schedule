import {Col, Container, Row} from "react-bootstrap";
import MyTable from "./table";

import {Data} from "./data";
import List from "./list";
import {Link} from "react-router-dom";

function App() {
  return (
      <Container className={'vh-100'}>
        <Link to={''}>Welcome</Link>
          <Row dir={'rtl'} className={'mt-5 align-items-center'}>
              <Col className={'col-9'}>
                  <MyTable  />
              </Col>
              <Col className={'vh-100 col-3'}>
                  <List data={Data} />
              </Col>
          </Row>
      </Container>
  );
}

export default App;
