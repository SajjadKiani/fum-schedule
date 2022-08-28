import React, {useState} from "react";

import './style.css'
import { XCircle} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

export default function MyCard ({data , handleCardClick , even}) {

    const [state , setState] = useState('')

    const handleClick = (data) => {
        handleCardClick(data)
    }

    console.log(data);

    return <div className={'border border-primary p-1 rounded-2 text-end'}>
            <p>{data['نام درس']}</p>
            {state && <li>{state}</li>}
            <li id={'card'}> واحد: {data["واحد"]}</li>
            <li id={'card'}>شماره درس: {data["شماره درس"]}</li>
            { even && <li id={'card'} className="text-warning"> {even === 'ZOJ' ? 'زوج' : even === 'FARD' ? 'فرد' : ''} </li> }
            <div className={'text-start'}>
                <Link to={''}  onClick={() => handleClick(data)}> <XCircle color={'red'} /> </Link>
            </div>
    </div>
}