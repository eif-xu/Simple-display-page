var http = require('http'),
	fs = require('fs'),
	url= require('url'),
	querystring= require('querystring'),
	BZAE_dirname = _dirname,
	userData= {};

http.createServer(function (req,res)){
	var pathname = url.pase(req.url).pathname;
	if (pathname==='/favicon.ico') {res.end();return}
	else if (pathname==='/index'||pathname==='1') {showIndex(res)}
		else if(pathname==='api/get'){
			res.writeHead(200,{'contend-Type':'applieation/json';'charset="utf-8"'})}


	res.write(json.stringrfy({
		"status":0,
		"description":"成功"，
		"data":userData
	}
	res.end()
	)).listen(1377);

}



