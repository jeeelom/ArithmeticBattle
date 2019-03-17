var signalClient = new SimpleSignalClient(socket) // Uses an existing socket.io-client instance
 
signalClient.on('discover', async (allIDs) => {
  const id = await promptUserForID(allIDs) // Have the user choose an ID to connect to
  const { peer } = await signalClient.connect(id) // connect to target client
  peer // this is a fully-signaled simple-peer object (initiator side)
})
 
signalClient.on('request', async (request) => {
  const { peer } = await request.accept() // Accept the incoming request
  peer // this is a fully-signaled simple-peer object (non-initiator side)
})