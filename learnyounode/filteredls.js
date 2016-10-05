/*
var fs = require('fs');
var path = require('path');

var direction = process.argv[2];
var filetype = process.argv[3];
var pat = RegExp('\\.' + filetype + '$');

fs.readdir(direction, function(err, files) {
  for (var i in files) {
    if (pat.test(files[i])     ) {
      console.log(files[i]);
    }
  }
});
*/

	

     var fs = require('fs')  
     var path = require('path')  
       
     var folder = process.argv[2]  
     var ext = '.' + process.argv[3]  
     

     exports.getFiles = fs.readdir(folder, function (err, files) {  
       if (err) return console.error(err)  
       files.forEach(function(file) {  
           if (path.extname(file) === ext) {  
               console.log(file)  
           }  
       })  
     })  
     

