let data = []

const viewRecord = () => {
    let tbl = ""
    data.map((val, index) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    <td>${val.Gender}</td>
                    <td>${val.Role}</td>    
                    <td>${val.Hobbies}</td>
                   
                </tr>
                `
    })
    document.getElementById('record').innerHTML = tbl;

}

viewRecord()
