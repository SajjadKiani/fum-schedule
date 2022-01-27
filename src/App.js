import {Col, Container, Row} from "react-bootstrap";
import MyTable from "./components/table";
import List from "./components/list";
import MyCard from "./components/card";

import {Data} from "./data";
import {TableData} from "./data/tableData";
import { useState} from "react";


function App() {

    const [tableData , setTableData] = useState(TableData)

    const handleListClick = (data) => {
        setTableData(prev => prev.map((d) =>
            (d[0] === data.date[0][0] ? {...d,[data.time[0]]: <MyCard data={data} /> } :
                d[0] === data.date[1][0] ? {...d,[data.time[1]]: <MyCard data={data} /> } : {...d})
        ))

    }

  return (
      <Container className={'vh-100'}>
          <h1 className={'display-1 text-center'}>fum Schedule <span className={'text-muted'}> Computer Science 💻 </span></h1>
          <Row dir={'rtl'} className={'mt-5 align-items-center'}>
              <Col className={'col-9'}>
                  <MyTable  data={tableData} />
              </Col>
              <Col className={'vh-100 col-3'}>
                  <List data={Data} onClick={handleListClick} />
              </Col>
          </Row>
      </Container>
  );
}

export default App;
