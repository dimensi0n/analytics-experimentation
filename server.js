const express = require('express')
const app = express()

const http = require('http').Server(app)
const io = require('socket.io')(http)

const PORT = 3000

app.use(express.static('public'))

app.get('/', ({res}) => {
    res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', socket => {
    console.log('A user is connected')

    socket.on('disconnect', () => console.log('User disconected'))
    socket.on('new_visitor', msg => {
        console.log(`New visitor from ${msg.city}, ${msg.region} in ${msg.country} with IP : ${msg.ip}`)
    })
    socket.on('click', msg => {
        console.log(`User clicked on ${msg.target} which has this content "${msg.content}"`)
    })
})

http.listen(PORT, () => console.log(`Listening on port ${PORT}`))