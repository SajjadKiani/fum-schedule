import {Card} from "react-bootstrap";

export default function MyCard ({data}) {
    return <Card border={'primary'}>
        <Card.Body>
            <Card.Text>{data['نام درس']}</Card.Text>
        </Card.Body>
    </Card>
}