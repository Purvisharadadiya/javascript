let data = {
    "user": [
        {
            "id": 1,
            "name": "purvisha",
            "age": "30"
        },


        {
            "id": 1,
            "name": "purva",
            "age": 20
        }
    ],

    "menu": ["home", "contac", "index"]

}

const userdata = () => {

    let tbl = "";

    data.user.map((val) => {
        tbl += `
        
            <li>${val.id}</li>
            <li>${val.name}</li>
            <li>${val.age}</li>
        
        `
    })

    document.getElementById('userlist').innerHTML = tbl;

}


userdata();


const menu = () => {
    let tbl = "";

    data.menu.map((val) => {
        tbl += `
               <li>${val}</li>
        `
    })

    document.getElementById('menus').innerHTML = tbl;
}

menu()


const table=()=>{
    let tbl="";
    data.user.map((val)=>{
        tbl +=`
              <tr>
              <th> ${val.id}</th>
              <th>${val.name}</th>
              <th>${val.age}</th>
              </tr>
              
        `
    })

    document.getElementById('tableData').innerHTML = tbl;
}

table()