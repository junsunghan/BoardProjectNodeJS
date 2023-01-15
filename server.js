const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('접속 8080');
})

app.get('/', function(요청,응답){
    응답.render('index.ejs');
})

app.get('/list', function(요청, 응답){
    응답.render('list.ejs');
})

app.get('/write', function(요청,응답){
    응답.render('write.ejs');
})

app.get('/login', function(요청,응답){
    응답.render('login.ejs');
})

//회원가입

app.get('/register', function(요청,응답){
    응답.render('register.ejs');
})

app.post('/register', function(요청,응답){
    응답.send('와서');
})



app.get('/chat', function(요청,응답){
    응답.render('chat.ejs');
})