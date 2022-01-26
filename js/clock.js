var Name = prompt("Size Nasıl Hitap Edebilirim?");
let myName = document.getElementById("myName");

(Name.length>0) ? myName.innerHTML=Name.charAt(0).toUpperCase() + Name.slice(1) : alert("İsim girilmedi !");

function tarihSaat() {
    var date = new Date().toLocaleString();
    document.querySelector("#myClock").innerHTML = date;
}

const d = new Date();
const days = ["PAZAR", "PAZARTESİ", "SALI", "ÇARŞAMBA", "PERŞEMBE", "CUMA", "CUMARTESİ"];
document.querySelector("#myDay").innerHTML = days[d.getDay()];


setInterval(tarihSaat, 1000); 