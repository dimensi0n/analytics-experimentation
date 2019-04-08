const socket = io()

fetch('https://ipinfo.io/json?token=1fc66459190355')
.then(response => response.json())
.then(body => socket.emit('new_visitor', body))

document.body.onclick = (event) => socket.emit('click', {target: event.target.id, content: event.target.innerHTML})