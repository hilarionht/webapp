const expess = require('express');
const app = expess();
const path = require('path');
app.use('/', expess.static(path.join(__dirname, 'dist')));
// app.get('/', (req, res) => res.send('Hello world!'));
app.use('*', function(req, res, next) {
    res.sendFile(path.resolve('dist/index.html'));
});
app.listen(3000);

console.log('server on port ', 3000);
//module.exports = app;