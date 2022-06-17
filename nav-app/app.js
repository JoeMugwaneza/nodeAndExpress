
const http = require('http');

const {readFileSync} = require('fs'); 

const homePage = readFileSync('./nav-app/index.html');
const homeStyles = readFileSync('./nav-app/styles.css');
const homeLogo = readFileSync('./nav-app/logo.svg');
const homeLogic = readFileSync('./nav-app/browser-app.js');

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
    } else if(url ==='/styles.css'){
 
        res.writeHead(200,{'content-type' : 'text/css'})
        res.write(homeStyles)
        res.end()
    } else if(url ==='/logo.svg'){
 
        res.writeHead(200,{'content-type' : 'image/svg+xml'})
        res.write(homeLogo)
        res.end()
    }else if(url ==='/browser-app.js'){
 
        res.writeHead(200,{'content-type' : 'text/javascript'})
        res.write(homeLogic)
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