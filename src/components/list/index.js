import {Card, Form} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

import './style.css'

export default function List ({data , onClick}) {

    const handleClick = (data) => {
        onClick(data)
    }

    const [list , setList] = useState(data);

    const inputRef = useRef(null)

    const handleSearch = () => {
        if ( inputRef.current.value.length !== 0)
            setList(data.filter(d => d['نام درس'].includes(inputRef.current.value)))
        else
            setList(data)
    }

    return (
        <div className={'p-2 border navbar-nav-scroll text-center min-vh-100'}>

            <input ref={inputRef} type={'text'} onChange={handleSearch} className={'mb-3 form-control'} placeholder={'جستجو نام درس'} />
            {
                list.map((d,i) => {
                    return  <Card className={'mb-3'} key={i}>
                                <Card.Body>
                                    <Link to={''} onClick={() => handleClick(d)}><Card.Title>{d["نام درس"]}</Card.Title> </Link>
                                    <Card.Subtitle className="mb-2 text-muted">{d["نام استاد"]}</Card.Subtitle>
                                    <Card.Text className={'mt-3 text-end'}>
                                            <li>شماره درس: {d["شماره درس"]}</li>
                                            <li>گروه: {d["گروه"]}</li>
                                            <li> واحد: {d["واحد"]}</li>
                                            <li> ظرفیت: {d["ظرفیت"]}</li>
                                            <li>ثبت نام شده: {d["ثبت نام شده"]}</li>
                                            <li> رزرو: {d["رزرو"]}</li>
                                            <li> دانشکده: {d["دانشکده"]}</li>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                })
            }
        </div>
    )
}