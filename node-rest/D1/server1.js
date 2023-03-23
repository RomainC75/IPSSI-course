const http = require('http')

const server = http.createServer((req,res)=> {
    console.log('req.url', req.url)
	if( req.url==="/hello" ){
		res.statusCode=200
		res.write("<h1>hello world!</h1>")
		res.end()
	}
})

server.listen(5000,()=>console.log('==>server created'))
