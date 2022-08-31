var http = require('http');
const FastSpeedtest = require("fast-speedtest-api");

http.createServer(function (req, res) {
    let speedtest = new FastSpeedtest({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
        verbose: false, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5b
        bufferSize: 8, // default: 8
        unit: FastSpeedtest.UNITS.Mbps // default: Bps
    });
    
     

    speedtest.getSpeed().then(s => {
        const arr=""
        console.log(`Speed: ${s} Mbps`);
        
        res.writeHead(200, {'Content-Type': 'text/json','Access-Control-Allow-Origin':'*',"Access-Control-Allow-Headers":"X-Requested-With"});
        res.end(JSON.stringify({"data": s}));
        
    }).catch(e => {
        console.error(e.message);
    });
}).listen(8080);
