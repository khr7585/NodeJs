//1.creating a object
// const myurl=new urlencoded("https://example.com:8080/products/mobile?id=101&brand=samsung");
// console.log(myurl);

//2.hostname-returns the domain name
// const myurl=new urlencoded("https://example.com:8080/products/mobile?id=101&brand=samsung");
// console.log(myurl.hostname);

//3.path name-Returns the path after the domain.
// console.log(myurl.pathname);

//4.protocol-returns the protocol
// console.log(myurl.protocol);

//5.port-Returns the port number.
// console.log(myURL.port);

//6.search-Returns the complete query string.
// console.log(myURL.search);

//7.searchparams-reads individual query parameters.
// console.log(myURL.searchParams.get("id"));
// console.log(myURL.searchParams.get("brand"));

//8.add a query paramter
// myURL.searchParams.set("color", "Black");
// console.log(myURL.toString());

//9.delete a query selector
// myURL.searchParams.delete("brand");
// console.log(myURL.toString());

//url in an http server
// const http=require("http");
// const server=http.createServer((req,res)=>{
//     const myurl=new URL(req.url,"https://localhost:3000");
//     console.log(myurl.pathname);
//     console.log(myurl.searchParams.get("id"));
//     res.end("done");
// });
// server.listen(3000);