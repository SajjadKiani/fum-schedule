import {Table} from "react-bootstrap";

export default function MyTable ({data}) {


    return (
        <div className={'table-responsive-sm'}>
            <Table dir={'rtl'} className={'vh-100'}  bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th className={'col-2'}>8</th>
                    <th className={'col-2'}>10</th>
                    <th className={'col-2'}>12</th>
                    <th className={'col-2'}>14</th>
                    <th className={'col-2'}>16</th>
                    <th className={'col-2'}>18</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((d,i) => {
                        return <tr key={i}>
                            <th >{d[0]}</th>
                            <td className={'col-2'}>{d[1]}</td>
                            <td className={'col-2'}>{d[2]}</td>
                            <td className={'col-2'}>{d[3]}</td>
                            <td className={'col-2'}>{d[4]}</td>
                            <td className={'col-2'}>{d[5]}</td>
                            <td className={'col-2'}>{d[6]}</td>
                        </tr>
                    })

                }
                </tbody>
            </Table>
        </div>
    )
}