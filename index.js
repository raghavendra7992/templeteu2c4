// write js code here corresponding to index.html
// You should add submit event on the form
// write js code here corresponding to matches.html
displayData(matchTeam);
var maches=JSON.parse(localstorage.getitem("matchNum"))||[];
function displayData(matchTeam){
    document.querySelector("tbody").innerText="";
    matchTeam.forEach(function(el) {
        var tr=document.createElement("tr");
        
        var td1=document.createElement("td");
        td1.innerText=matchTeam
        var td3=document.createElement("td");
        td2.innerText=matchTeam
        var td2=document.createElement("td");
        td1.innerText=matchTeam

var td4=document.createElement("td");
td2.innerText=matchTeam
var td5=document.createElement("td");
td2.innerText=matchTeam

    });
    tr.append(td1,td2,td3,td4,td5);
    document.querySelector("tbody").append(tr)

    displayData(mATeam);
    var maches=JSON.parse(localstorage.getitem("teamA"))||[];
    function displayData(mATeam){
        document.querySelector("tbody").innerText="";
        mATeam.forEach(function(el) {
            var tr=document.createElement("tr");
            
            var td1=document.createElement("td");
            td1.innerText=mATeam
            var td3=document.createElement("td");
            td2.innerText=mATeam
            var td2=document.createElement("td");
            td1.innerText=mATeam
    
    var td4=document.createElement("td");
    td2.innerText=mmATeam
    var td5=document.createElement("td");
    td2.innerText=mATeam
    
        });
        tr.append(td1,td2,td3,td4,td5);
        document.querySelector("tbody").append(tr)
    }
    console.log(matchTeam)
    console.log(mATeam)
    var matcharr=JSON.parse(localStorage.getItem("match"));
    matcharr.push(matchTeam)
    var teama=JSON.parse(localStorage.getItem("team"));
    teama.push(mATeam);
    document.querySelector("#Matchnum").addEventListener("submit",turn)
    document.querySelector("#teamA").addEventListener("submit",turn)
    localstorage.setitem("match",JSON.stringify(matcharr))
    localStorage.setItem("team".JSON.stringify(team))
    

}