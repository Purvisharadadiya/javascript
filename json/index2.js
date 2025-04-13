

let data = {
    "users": [
        {
            "id": 1,
            "name": "jay",
            "age": 25
        },
        {
            "id": 2,
            "name": "ajay",
            "age": 27
        },
        {
            "id": 3,
            "name": "ketan",
            "age": 34
        }
    ],
    "country": [
        {
            "id": 1,
            "name": "india",
            "state": [
                {
                    "id": 1,
                    "name": "gujrat",
                    "city": [
                        {
                            "id": 1,
                            "name": "ahmedabad",
                            "pincode": "380001"
                        },
                        {
                            "id": 2,
                            "name": "surat",
                            "pincode": "395001"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "maharashtra",
                    "city": [
                        {
                            "id": 1,
                            "name": "mumbai",
                            "pincode": "400001"
                        },
                        {
                            "id": 2,
                            "name": "pune",
                            "pincode": "411001"
                        }
                    ]
                }
            ]
        },

    ],
}


const userList = () => {
    let tbl = "";
    data.users.map((val) => {
        tbl += `
                    <li>${val.name}</li>
                    <li>${val.age}</li>

                `
    })
    document.getElementById('userdata').innerHTML = tbl;

}
userList();

const countrylist = () => {
    let tbl = "";
    data.country.map((val) => {
        tbl += `
            <li>${val.name}</li>
             <ul>`

        val.state.map((st) => {

            tbl += `
                    <li><a>${st.name}</a></li>
                    <ul>`

            st.city.map((ci) => {
                tbl += `
                                        <li><a>${ci.name}</a></li>
                                    `
            })

            tbl += `  </ul>
                `

        })


        tbl += `
            </ul>
        `
    })
    document.getElementById('countrylist').innerHTML = tbl;
}
countrylist();


