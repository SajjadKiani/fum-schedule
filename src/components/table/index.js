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
                            <td className={'col-2'}>{d[8]}</td>
                            <td className={'col-2'}>{d[10]}</td>
                            <td className={'col-2'}>{d[12]}</td>
                            <td className={'col-2'}>{d[14]}</td>
                            <td className={'col-2'}>{d[16]}</td>
                            <td className={'col-2'}>{d[18]}</td>
                        </tr>
                    })

                }
                </tbody>
            </Table>
        </div>
    )
}