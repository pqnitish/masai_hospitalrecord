// fill in javascript code here
let myForm = document.querySelector("form");
let doctorName = document.getElementById("name");
let doctId = document.getElementById("docID");
let dept = document.getElementById("dept");
let exp = document.getElementById("exp");
let emailId = document.getElementById("email");
let mobileNo= document.getElementById("mbl");
let tbody = document.querySelector("tbody");
let allData =[];
myForm.addEventListener("submit",function(e){
    e.preventDefault();
   let data = {};
   data.name =doctorName.value;
   data.doctorId =doctId.value;
   data.department = dept.value;
   data.experience=exp.value;
   data.email = emailId.value;
   data.mobileno = mobileNo.value;
   if(data.experience>5){
    data.role = "Senior";
   }else if(data.experience>2 && data.experience<=5){
    data.role="Junior";
   }else if(data.experience>=1){
     data.role="Trainee";
   }

   allData.push(data);
   tbody.innerHTML=null;
   //console.log(allData);
   function display(allData){
    tbody.innerText="";
    allData.map(ele=>{
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let btn =document.createElement("button");
        btn.setAttribute("id", "del");
        btn.innerText="DELETE";
        btn.addEventListener("click",function(){
        let deleted=    allData.filter(element=>{
           return element!=ele;
            })
            display(deleted);
        })
        td1.innerText=ele.name;
        td2.innerText=ele.doctorId;
        td3.innerText =ele.department;
        td4.innerText=ele.experience;
        td5.innerText =ele.email;
        td6.innerText=ele.mobileno;
        td7.innerText=ele.role;
        row.append(td1,td2,td3,td4,td5,td6,td7,btn);
        tbody.append(row);
    
       })
       
    }
    display(allData)
    })
    

   
   



