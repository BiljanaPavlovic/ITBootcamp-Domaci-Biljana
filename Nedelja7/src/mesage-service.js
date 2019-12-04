let apiUrl = 'http://coetus.herokuapp.com/api/message'

function getMessages(username) {
    let res = fetch(apiUrl,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          username: username
        })
    })
    .then(response => response.json()).then(response => response.messages).catch(error=>console.log(error))
    return res;
}
function getAllMessages(){
    let res = fetch(apiUrl).then((response) => response.json()).then(response=>response.data).catch(error=>console.log(error))
    return res;
}
function sendMessage(username, message){
    let resPut = fetch(apiUrl,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          username: username,
          message: message
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return resPut;
}

export{
    getMessages,
    getAllMessages,
    sendMessage
}

