//Index controller

export function helloPlain(req, res, next){
    res.setHeader('Content-Type','text/plain');
    res.end("Hello from NodeJS Application");
}

export function helloHtml(req, res, next){
    res.setHeader('Content-Type','text/html');
    res.end("<h1>Hello from NodeJS Application as html</h1>");
}
