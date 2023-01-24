const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Praticando Node.js');
})

server.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})