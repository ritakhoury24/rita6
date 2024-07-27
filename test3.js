fetch("http://localhost:1234/datastudents")
    .then(response=>response.json())
    .then(json=>{
        let table=document.getElementById('table')
        json.forEach(std => {
            let row=document.createElement('tr')
            
            let students=document.getElementById('std')
            let name=document.createElement('td')
            let age=document.createElement('td')
            let id=document.createElement('td')
            name.innerHTML=std.name
            age.innerHTML=std.age
            id.innerHTML=std.id
            row.appendChild(name)
            row.appendChild(age)
            row.appendChild(id)
           
            name.addEventListener('click',()=>{
                li=document.createElement('li')
                li.innerHTML=`name:${std.name}, age:${std.age}, id:${std.id}`
                students.appendChild(li)

            })

            

            table.appendChild(row)

            
        });
    })


    