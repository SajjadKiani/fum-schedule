import {Col, Container, Row} from "react-bootstrap";
import MyTable from "./components/table";
import List from "./components/list";
import MyCard from "./components/card";

import {Data} from "./data";
import {TableData} from "./data/tableData";
import { useState} from "react";
import {Link} from "react-router-dom";


function App() {

    const [tableData , setTableData] = useState(TableData)

    const handleCardClick = (data) => {
        setTableData(prev => prev.map((d) =>
            (d[0] === data.date[0][0] ? {...d,[data.time[0]]: '' } :
                d[0] === data.date[1][0] ? {...d,[data.time[1]]: '' } : {...d})
        ))
    }

    const handleListClick = (data) => {
        setTableData(prev => prev.map((d) =>
            (d[0] === data.date[0][0] ? {...d,[data.time[0]]: <MyCard data={data} handleCardClick={handleCardClick} even={data.date[0][1]} /> } :
                d[0] === data.date[1][0] ? {...d,[data.time[1]]: <MyCard data={data} handleCardClick={handleCardClick} even={data.date[1][1]} /> } : {...d})
        ))

    }



  return (
      <div className={'d-flex flex-column vh-100'}>
        <h5 className={'display-5 text-center'}>fum Schedule <span className={'text-muted'}> Computer Science 💻 </span></h5>
        <div className="d-flex m-1 gap-1">
            <div className={'col-2 vh-100'} dir="rtl">
                <List data={Data} onClick={handleListClick} />
            </div>
            <div className={'col-10 vh-100'} >
                <MyTable  data={tableData} />
            </div>
        </div>
        <p className={'mb-2 text-muted text-end'}>©️ کپی رایت 2022 - سجاد کیانی مقدم -
            <a href={'https://github.com/SajjadKiani/fum-schedule'} id={'repository'}>آدرس مخزن</a>
        </p>
      </div>
  );
}

export default App;
