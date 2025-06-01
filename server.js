const net = require('net');

const PORT = process.env.PORT || 8080;

const server = net.createServer((clientSocket) => {
  console.log('Client connected');

  // Hardcoded proxy target for demo — forward all traffic to google.com:80
  const targetHost = 'google.com';
  const targetPort = 80;

  const targetSocket = net.createConnection({ host: targetHost, port: targetPort }, () => {
    console.log('Connected to target server');
  });

  clientSocket.pipe(targetSocket);
  targetSocket.pipe(clientSocket);

  clientSocket.on('close', () => {
    console.log('Client disconnected');
    targetSocket.end();
  });

  targetSocket.on('close', () => {
    console.log('Target disconnected');
    clientSocket.end();
  });
});

server.listen(PORT, () => {
  console.log(`VPN proxy server listening on port ${PORT}`);
});
