import {Card} from "react-bootstrap";

export default function MyCard ({data}) {
    return <Card border={'primary'}>
        <Card.Body>
            <Card.Title>{data['نام درس']}</Card.Title>
            <Card.Text></Card.Text>
        </Card.Body>
    </Card>
}