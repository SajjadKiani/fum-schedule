import MyCard from "../components/card";

const TableData = []

for (let i = 0; i < 6; i++) {
    TableData.push({
        0: [""],
        1: [""],
        2: [""],
        3: [""],
        4: [""],
        5: [""],
        6: [""],
    })
}

TableData[0][0] = "شنبه"
TableData[1][0] = "یک شنبه"
TableData[2][0] = "دو شنبه"
TableData[3][0] = "سه شنبه"
TableData[4][0] = "چهارشنبه"
TableData[5][0] = "پنج شنبه"

export {TableData}
