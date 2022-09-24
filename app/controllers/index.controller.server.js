//Index controller

export function helloPlain(req, res, next){
    res.render('index',{title: 'Home'});
}
