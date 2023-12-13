var courseName = document.getElementById("courseName");
var courseCat = document.getElementById("courseCat");
var coursePrice = document.getElementById("coursePrice");
var courseDesc = document.getElementById("courseDesc");
var AddBTN = document.getElementById("click")
var clearBTN=document.getElementById("clear")
var data = document.getElementById("data");
var courses;

if(localStorage.getItem("coursesList")==null){

    courses=[];
}else{

    courses = JSON.parse(localStorage.getItem("coursesList"));
}


displaydata();


AddBTN.onclick = function(){
       
    addcourse();
    displaydata();
 
}

function addcourse(){
    var course = {
        name:courseName.value,
        cat:courseCat.value,
        price:coursePrice.value,
        desc:courseDesc.value,

    }
   
    courses.push(course);
    localStorage.setItem("coursesList",JSON.stringify(courses))
}

function displaydata(){
    var result ="";
    for(var i = 0;i<courses.length;i++){
        result+=`<tr>
             <td>${i}</td>
             <td>${courses[i].name}</td>
             <td>${courses[i].cat}</td>
             <td>${courses[i].price}</td>
             <td>${courses[i].desc}</td>
             <td> <button class="btn btn-outline-info"> Update </button> 
                  <button onclick="deleteCourse(${i})" class="btn btn-outline-danger"> Delete </button>
                </td>
        </tr>`
    }
    data.innerHTML=result
}

//clear
clearBTN.onclick=function(){

    courseName.value="";
    courseCat.value="";
    coursePrice.value="";
    courseDesc.value="";

}
function deleteCourse(index){
   
    courses.splice(index,1);
    localStorage.setItem("coursesList",JSON.stringify(courses))
    displaydata();

}
