const signalServer = require('simple-signal-server')(io)
const allIDs = new Set()
 
signalServer.on('discover', (request) => {
  const clientID = request.socket.id // you can use any kind of identity, here we use socket.id
  allIDs.add(clientID) // keep track of all connected peers
  request.discover(clientID, Array.from(allIDs)) // respond with id and list of other peers
})
 
signalServer.on('disconnect', (request) => {
  const clientID = request.socket.id
  allIDs.delete(clientID)
})
 
signalServer.on('request', (request) => {
  request.forward() // forward all requests to connect
})