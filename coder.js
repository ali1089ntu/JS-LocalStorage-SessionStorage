
// String

const createString = () => {

    let fullName = "Ali Muhammad";
    let Age = 23;
    let Class = "BS Software Engineering";
    localStorage.setItem("FullName",fullName);
    localStorage.setItem("Age",Age);
    localStorage.setItem("Class",Class);

}


const readString = () => {
   
    let readstoragedata = localStorage.getItem("FullName");
    let readstoragedata1 = localStorage.getItem("Age");
    let readstoragedata2 = localStorage.getItem("Class");
    document.getElementById("spn1").innerHTML += readstoragedata;
    document.getElementById("spn1").innerHTML += " ";
    document.getElementById("spn1").innerHTML += readstoragedata1;
    document.getElementById("spn1").innerHTML += " ";
    document.getElementById("spn1").innerHTML += readstoragedata2;

}

const updateString = () => {
   
    let fullName = "Aamir Ghafoor";
    let Age = 27;
    localStorage.setItem ("FullName",fullName);
    localStorage.setItem("Age",Age);

}

const deleteString = () => {
   
    localStorage.removeItem("Age");

}

// Array


const createArray = () => {

    let Users = [{fullName:"Ali Muhammad",Age:27},{fullName:"Qasim",Age:25}];
    let stringcon = JSON.stringify(Users);
    localStorage.setItem("Users" , stringcon);
    
}

const readArray = () => {

    let cnsl= JSON.parse(localStorage.getItem("Users"));
    console.log (cnsl);
    
}

const updateArray = () => {
    
    let newUsers = {fullName:"Hassan Ali", Age:17};
    let Users = [{fullName:"Ali Muhammad",Age:27},{fullName:"Qasim",Age:25}];
    Users.push(newUsers);
    let stringcon = JSON.stringify(Users);
    localStorage.setItem("Users" , stringcon);
   
}

const deleteArray = () => {

    localStorage.removeItem ("Users");

}

// Using Page Load Event

window.addEventListener ("load" , function(){
    readString();
});