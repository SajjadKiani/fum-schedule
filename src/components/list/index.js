import {Card, Accordion} from "react-bootstrap";
import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import { PlusCircleFill} from "react-bootstrap-icons";

import './style.css'

export default function List ({data , onClick}) {
    const inputRef = useRef(null)
    const [list , setList] = useState(data);

    useEffect(() => {
        inputRef.current.focus()
    },[inputRef])

    const handleClick = (data) => {
        onClick(data)
    }

    const handleSearch = () => {
        if ( inputRef.current.value.length !== 0)
            setList(data.filter(d => d['نام درس'].includes(inputRef.current.value)))
        else
            setList(data)
    }

    return (
        <>

            <div><input ref={inputRef} type={'text'} onChange={handleSearch} className={'mb-3 form-control'} placeholder={'جستجو نام درس 🔍'} /></div>

            <div id="list" className={'p-2 border rounded-3 navbar-nav-scroll text-center'}>

            {
                list.map((d,i) => {
                    return  <Card className={'mb-3'} key={i}>
                                <Card.Body>
                                    <Card.Title>{d["نام درس"]}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{d["نام استاد"]}</Card.Subtitle>

                                    <Card.Text className={'mt-3 text-end'}>
                                        {/* <li>روز: {d['date'].join(' ')}</li> */}
                                        {d['date'][0] && <li> { d['date'][0][0]} , {d['time'][0]} , <span className="text-warning"> {d['date'][0][1].replace('ZOJ','زوج').replace('FARD','فرد')} </span></li>}
                                        {d['date'][1] && <li> { d['date'][1][0]} , {d['time'][1]} , <span className="text-warning"> {d['date'][1][1].replace('ZOJ','زوج').replace('FARD','فرد')} </span> </li> }
                                        {/* <li>ساعت: {d['time'].join(' , ')}</li> */}
                                    </Card.Text>
                                    <Accordion>
                                        <Accordion.Item eventKey="0" className={'border-0'}>
                                            <Accordion.Header></Accordion.Header>
                                            <Accordion.Body className={"text-end"}>
                                                <li>شماره درس: {d["شماره درس"]}</li>
                                                <li>گروه: {d["گروه"]}</li>
                                                <li> واحد: {d["واحد"]}</li>
                                                <li> ظرفیت: {d["ظرفیت"]}</li>
                                                <li>ثبت نام شده: {d["ثبت نام شده"]}</li>
                                                <li> رزرو: {d["رزرو"]}</li>
                                                <li> دانشکده: {d["دانشکده"]}</li>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className={'text-start'}>
                                        <Link to={''} className={'m-1'} onClick={() => handleClick(d)}><PlusCircleFill color="royalblue" /></Link>
                                    </div>
                                </Card.Body>
                            </Card>
                })
            }
            </div>
        </>
    )
}