var express = require('express');
var app = express();
var mysql = require('mysql');

var hbs = require('hbs')
app.set('view engine', 'hbs');



// -------------- mysql initialization -------------- //
// USE PARAMETERS FROM DIRECTOR DOCS!!!
var sql_params = {
  connectionLimit : 10,
  user            : process.env.DIRECTOR_DATABASE_USERNAME,
  password        : process.env.DIRECTOR_DATABASE_PASSWORD,
  host            : process.env.DIRECTOR_DATABASE_HOST,
  port            : process.env.DIRECTOR_DATABASE_PORT,
  database        : process.env.DIRECTOR_DATABASE_NAME
}

var pool  = mysql.createPool(sql_params);




// -------------- express 'get' handlers -------------- //


app.get('/test', function(req,res){

    var sql = 'CALL visitors_proc(?)'

    var params_array = [0];

    pool.query(sql, params_array, function(error, results, fields){
        if (error) throw error;
        
        var visits = results[0][0]['visits']
        
        res.render('visitors',{'page_visits':visits});
    })
})


// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});