import MyCard from "../components/card";

const TableData = []

for (let i = 0; i < 6; i++) {
    TableData.push({
        0: "",
        8: "",
        10: "",
        12: "",
        14: "",
        16: "",
        18: "",
    })
}

TableData[0][0] = "شنبه"
TableData[1][0] = "یکشنبه"
TableData[2][0] = "دوشنبه"
TableData[3][0] = "سه شنبه"
TableData[4][0] = "چهارشنبه"
TableData[5][0] = "پنجشنبه"

export {TableData}
