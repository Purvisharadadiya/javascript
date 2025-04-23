let alltask = () => {
    return JSON.parse(localStorage.getItem('user')) || [];
};

const addTodo = () => {
    let taskadd = document.getElementById('taskadd').value.trim();
    if (!taskadd) return alert("Please enter a task");

    let row = {
        id: Math.floor(Math.random() * 100000),
        taskadd: taskadd,
    };

    let old = [...alltask(), row];
    localStorage.setItem('user', JSON.stringify(old));
    adduser();
    alert("Record added!");
    document.getElementById('taskadd').value = "";

    document.getElementById('add').style.display = "inline-block";
    document.getElementById('edit').style.display = "none";
};

const adduser = () => {
    let tbl = "";
    alltask().forEach((val) => {
        tbl += `
            <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
                <span>${val.taskadd}</span>
                <div>
                    <button onclick="editUser(${val.id})" class="btn btn-sm btn-check-done">✔️</button>
                    <button onclick="deletUser(${val.id})" class="btn btn-sm btn-check-delete">❌</button>
                </div>
            </li>
            <hr>
        `;
    });

    document.getElementById('todoList').innerHTML = tbl;
};

const deletUser = (deletid) => {
    let del = alltask().filter((val) => val.id != deletid);
    localStorage.setItem("user", JSON.stringify(del));
    alert("Record deleted");
    adduser();
};

const editUser = (id) => {
    let single = alltask().find((val) => val.id == id);
    if (single) {
        document.getElementById('taskadd').value = single.taskadd;
        document.getElementById('editid').value = single.id;
        document.getElementById('add').style.display = "none";
        document.getElementById('edit').style.display = "inline-block";
    }
};

const updateData = () => {
    let edieid = parseInt(document.getElementById('editid').value);
    let taskadd = document.getElementById('taskadd').value.trim();
    if (!taskadd) return alert("Please enter a task");

    let up = alltask().map((val) => {
        if (val.id === edieid) {
            val.taskadd = taskadd;
        }
        return val;
    });

    localStorage.setItem("user", JSON.stringify(up));
    alert("Record updated successfully");
    adduser();

    document.getElementById('editid').value = "";
    document.getElementById('taskadd').value = "";
    document.getElementById('add').style.display = "inline-block";
    document.getElementById('edit').style.display = "none";
};

const searchuser = () => {
    let task = document.getElementById("taskadd").value;
    if (!task) return alert("Please enter something to search");

    let data = alltask();
    let search = data.filter((val) => val.taskadd.toLowerCase().includes(task));

    let tbl = "";
    search.forEach((val) => {
        tbl += `
        <hr>
            <li style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
            
                <span>${val.taskadd}</span>
                <div>  
                    <button class="btn btn-sm btn-check-delete" onclick="deletUser(${val.id})">❌</button>
                    <button class="btn btn-sm btn-check-done" onclick="editUser(${val.id})">✔️</button>
                </div>  
            </li>
            <hr>
        `;
    });

    document.getElementById("todoList").innerHTML = tbl;
};

