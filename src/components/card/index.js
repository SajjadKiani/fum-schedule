import {Card} from "react-bootstrap";
import React, {useState} from "react";

import './style.css'
import { XCircle} from "react-bootstrap-icons";
import {Link} from "react-router-dom";

export default function MyCard ({data , handleCardClick}) {

    const [state , setState] = useState('')

    // let state =""
    // data.date.forEach(date => {
    //     if (date[1] === "FARD")
    //         // setState('فرد')
    //         state = "fard"
    //     else if (date[1] === "ZOJ")
    //         // setState('زوج')
    //         state = "zoj"
    // })

    const handleClick = (data) => {
        handleCardClick(data)
    }

    return <div className={'border border-primary p-1 rounded-2'}>
            <p>{data['نام درس']}</p>
            {state && <li>{state}</li>}
            <li id={'card'}> واحد: {data["واحد"]}</li>
            <li id={'card'}>شماره درس: {data["واحد"]}</li>
            <div className={'text-start'}>
                <Link to={''}  onClick={() => handleClick(data)}> <XCircle color={'red'} /> </Link>
            </div>
    </div>
}