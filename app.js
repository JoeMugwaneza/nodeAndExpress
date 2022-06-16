
const http = require('http');

const {readFileSync} = require('fs'); 

const homePage = readFileSync('./express/index.html');

const server = http.createServer((req, res) =>{
    const url = req.url;
    if(url === '/'){
        // HOME
        console.log('user hit HOME PAGE');
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()

    } else if(url ==='/about.html'){
        // ABOUT
        console.log('user hit ABOUT PAGE');
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1>About Page</h1>')
        res.end()
    } else {
        // 404
        console.log('user did not get the right URL');
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h1>Page not Found</h1>')
        res.end()
    }
})

server.listen(5000)