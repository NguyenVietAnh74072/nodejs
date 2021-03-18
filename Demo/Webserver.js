var http =require('http');

http.createServer(function(req,res){          //req khacsh yeu cau res la tra lai khach hang
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.end("KhoaPham.vn");
}).listen(8888);