let students = []
let addStudent=()=>{
     let temName=document.getElementById('name').value
     let temEmail=document.getElementById('email').value
     let temRollNo=students.length+1    
     let checkStudent= checkEmail()
     if(checkStudent == true && temEmail !=''){
        let student={
            'name':temName,
            'email':temEmail,
            'rollNo':temRollNo,
        }
        students.push(student)
     }else{
        console.log('Something went to wrong')
     }
    console.log(students)
    document.getElementById('name').value='';
    document.getElementById('email').value='';  
    let user_card=document.getElementById('user_card')
    user_card.innerHTML=''
    students.map((student)=>{
        let div = document.createElement('div')
        let name = document.createElement('h4')
        let email = document.createElement('p')
        let rollNo = document.createElement('p')
            name.innerHTML= student.name
            email.innerHTML= student.email
            rollNo.innerHTML = student.rollNo
        user_card.appendChild(div)
        div.classList.add('card')
        div.appendChild(name)
        div.appendChild(email)
        div.appendChild(rollNo)
    })         
}
let checkEmail=()=>{
    let temEmail=document.getElementById('email').value
    let alert = document.getElementById('d-none')
    let checkStudent = students.filter((student)=>(student.email == temEmail))
    if(checkStudent.length == 0 ){
        alert.classList.add('d-none')
        alert.classList.remove('alert')
        return true
    }else{        
        alert.classList.remove('d-none')
        alert.classList.add('alert')
    }
}