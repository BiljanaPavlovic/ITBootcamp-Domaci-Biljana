
import { getMessages,getAllMessages,sendMessage } from "./mesage-service.js";

const login = document.querySelector("#prijava")
const usernameInput = document.querySelector("#username")
const unosPoruke = document.querySelector('#poruka');
const send = document.querySelector('#send');
const porukaContainer = document.querySelector('#porukeContainer');
const mojePorukeContainer = document.querySelector('#mojePorukeContainer')
const mojePoruke = document.querySelector('#mojePoruke')

let username

login.addEventListener('click', function() {
    username = usernameInput.value
})

send.addEventListener('click', function() {
    posaljiPoruku(username, unosPoruke.value)
})

mojePoruke.addEventListener('click', function() {
    prikaziMojePoruke(username)
})

function prikaziMojePoruke(username) {
    if (!username) {
        alert("Nije unet username!")
        return
    }
    getMessages(username).then((response)=>{
        mojePorukeContainer.innerHTML=""
        response.forEach(poruka => {
            mojePorukeContainer.innerHTML += formatirajPoruku(poruka)
        });
    }, (error)=> console.log(error))
}

function prikaziPoruke() {
    getAllMessages().then((response)=>{
        porukaContainer.innerHTML=""
        response.forEach(poruka => {
            porukaContainer.innerHTML += formatirajPoruku(poruka)
        });
    }, (error)=> console.log(error))
}

function posaljiPoruku(username, poruka) {
    if (!username) {
        alert("Nije unet username!")
        return
    }
    sendMessage(username, poruka).then(response=>{
        prikaziPoruke()
    })
}

var dateTimeNow= new Date();


var hours=dateTimeNow.getHours();
var minuts=dateTimeNow.getMinutes();
//var seconds=dateTimeNow.getSeconds();:${seconds}
var timeStampString=`${hours}:${minuts}`;

function formatirajPoruku(poruka) {
    return "<il>"+timeStampString+"      "+ poruka.username + ":     " + strip(poruka.message) +"</il><br><br>"
}

function strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
 }

setInterval(function(){
    prikaziPoruke()
}, 10000)
