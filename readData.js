import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/json')
    res.statusCode = 200;
    const data = fs.readFileSync('./backend/MoviesData.json');
    res.end(data.toString());
    //console.log(data.toString());
})

const port = 3001;
server.listen(port, () => {
    console.log(`App is running at ${port}`);
})
