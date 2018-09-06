fs = require('fs');
gz = require('zlib');

var readable = fs.createReadStream(__dirname + '/WS.txt','utf8');

var writable = fs.createWriteStream(__dirname + '/WS1.txt','utf8');

readable.pipe(writable);

var compressed = fs.createWriteStream(__dirname + '/WS2.txt.gz','utf8');

var gzip = gz.createGzip();
   
readable.pipe(gzip).pipe(compressed);