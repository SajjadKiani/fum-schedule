import {Table} from "react-bootstrap";

export default function MyTable () {

    const data = []

    for (let i = 0; i < 6; i++) {
        data.push({
            0: ["شنبه"],
            1: [""],
            2: [""],
            3: [""],
            4: [""],
            5: [""],
            6: [""],
        })
    }

    return (
        <div className={'table-responsive-sm'}>
            <Table dir={'rtl'} className={'vh-100'}  bordered hover>
                <thead>
                <tr>
                    <th className={'col-1'}>#</th>
                    <th>8</th>
                    <th>10</th>
                    <th>12</th>
                    <th>14</th>
                    <th>16</th>
                    <th>18</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((d,i) => {
                        return <tr key={i}>
                            <th className={'col-1'}>{d[0]}</th>
                            <td>{d[1]}</td>
                            <td>{d[2]}</td>
                            <td>{d[3]}</td>
                            <td>{d[4]}</td>
                            <td>{d[5]}</td>
                            <td>{d[6]}</td>
                        </tr>
                    })

                }
                </tbody>
            </Table>
        </div>
    )
}