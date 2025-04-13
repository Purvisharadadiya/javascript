let record = []
    const viewRecord = () => {
    document.getElementById('edit').style.display = "none";
    document.getElementById('add').style.display = "block";
    record = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    let tbl = "";
    record.map((val) => {
        tbl += `
                <tr>
                    <td>${val.id}</td>
                    <td>${val.name}</td>
                    <td>${val.phone}</td>
                    
                    <td>
                        <button onclick="deletUser(${val.id})" >Delete</button>
                    </td>
                    <td> <button onclick="editUser(${val.id})" >Edit</button></td>

                </tr>
                `
    })
    document.getElementById('record').innerHTML = tbl;

}

viewRecord();

const saveData = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;


    let obj = {
        id: Date.now(),
        name: name,
        phone: phone,


    }

    record.push(obj);
    localStorage.setItem("users", JSON.stringify(record))
    alert("Record Successfully Registered");
    viewRecord();
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
}

const deletUser = (deletid) => {
    let d = record.filter((val) => {
        return val.id != deletid;
    })
    localStorage.setItem("users", JSON.stringify(d));
    alert("Record Successfully Deleted");
    viewRecord();

}

const editUser = (id) => {
    document.getElementById('add').style.display = "none";
    document.getElementById('edit').style.display = "block";
    let single = record.find((val) => {
        return val.id == id
    })

    document.getElementById('name').value = single.name
    document.getElementById('phone').value = single.phone
    document.getElementById('editid').value = id
}

const updateData = () => {
    let edieid = document.getElementById('editid').value;
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let up = record.map((val, index) => {
        if (val.id == edieid) {
            val.name = name;
            val.phone = phone
        }
        return val;

    })

    localStorage.setItem("users", JSON.stringify(up));
    alert("Record updated successfully")
    viewRecord();
    document.getElementById('editid').value = "";
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
}