
    // write js code here corresponding to matches.html
displayData(matchNumber);
var maches=JSON.parse(localstorage.getitem("masaiSchool"))||[];
function displayData(matchNumber){
    document.querySelector("tbody").innerText="";
    matchNumber.forEach(function(el) {
        var tr=document.createElement("tr");
        
        var td1=document.createElement("td");
        td1.innerText=MatvhNumber
        var td3=document.createElement("td");
        td2.innerText=MatvhNumber
        var td2=document.createElement("td");
        td1.innerText=MatvhNumber

var td4=document.createElement("td");
td2.innerText=MatvhNumber
var td5=document.createElement("td");
td2.innerText=MatvhNumber

    });
    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr)
    document.querySelector("#masaiform").addEventListener("submit",turn)
    var irctc=JSON.parse(localStorage.getItem("jump"))
    console.log(jump)
    jump.push(matchNumber)
    localStorage.setItem("jump",JSON.stringify(jump));

}
