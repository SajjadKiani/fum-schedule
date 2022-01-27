import data from './data.json'

const Data = data

data.forEach((d,k) => {
    const x =  d["FIELD12"].split("\n")

    let state = ""
    let time = []
    let date = []

    x.forEach(i => {
        if (i.includes("جلسه")) {

            if (i.includes('فرد')) {
                state = "FARD"
            } else if (i.includes('زوج')) {
                state = "ZOJ"
            }

            const n = i.split("ساعت").map(x => x.trim())

            date.push([n[0].replace( /.*:/ , '').trim() , state])
            time.push(n[1].replace(/(^\d+)(.+$)/i,'$1') )
        }
    })

    Data[k] = {...Data[k],date: date,time: time}
})

export {Data}
