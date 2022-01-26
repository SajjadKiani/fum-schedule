import {Card, Form} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

export default function List ({data}) {
    return (
        <div className={'p-2 border navbar-nav-scroll text-center min-vh-100'}>
            <Form.Control className={'mb-3'} placeholder={'جستجو'} />
            {
                data.map((d,i) => {
                    return  <Card className={'mb-3'}>
                                <Card.Body>
                                    <Card.Title>{d["نام درس"]}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{d["نام استاد"]}</Card.Subtitle>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                })
            }
        </div>
    )
}