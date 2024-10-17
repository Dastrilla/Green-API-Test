function getSettings(){
    let apiUrl = document.getElementById('apiUrl').value;
    let idInstance = document.getElementById('idInstance').value;
    let apiTokenInstance = document.getElementById('apiTokenInstance').value;

    const url = `${apiUrl}/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerHTML = JSON.stringify(data);
        })
  }

  function getStateInstance(){
    let apiUrl = document.getElementById('apiUrl').value;
    let idInstance = document.getElementById('idInstance').value;
    let apiTokenInstance = document.getElementById('apiTokenInstance').value;

    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.getElementById('result').innerHTML = JSON.stringify(data);
        })
    }


function sendMessage(){
    let apiUrl = document.getElementById('apiUrl').value;
    let idInstance = document.getElementById('idInstance').value;
    let apiTokenInstance = document.getElementById('apiTokenInstance').value;
    let chatId = document.getElementById('chatId').value;
    let message = document.getElementById('message').value;

    const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const body = {
        chatId:chatId,
        message:message
    }
    fetch(url, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then (data => {
        console.log(data)
        document.getElementById('result').innerHTML = `Пользователю пришло сообщение с id: ${data.idMessage}`;
      })
    .catch(error => {
        console.log(error)
    })
}

function sendFileByUrl(){
    let apiUrl = document.getElementById('apiUrl').value;
    let idInstance = document.getElementById('idInstance').value;
    let apiTokenInstance = document.getElementById('apiTokenInstance').value;
    let chatId = document.getElementById('url_chatId').value;
    let fileURL = document.getElementById('url_file').value;
    let fileName = document.getElementById('file_name').value;


    const url = `${apiUrl}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const body = {
        chatId:chatId,
        urlFile:fileURL,
        fileName: fileName
    }
    fetch(url, {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then (data => {
        console.log(data)
        document.getElementById('result').innerHTML = `Пользователю пришел файл с id: ${data.idMessage}`;
      })
    .catch(error => {
        console.log(error)
    })
}
