/*
* simple file cache
* copyright(c) 2012 nils måsén <nils@piksel.se>
*/

var fs = require('fs')

module.exports.getFileCached = function(file){
  var cacheCont;
  var cacheMtime;
  return function(cb){
    fs.stat(file, function(err, stats){
      if(err) return cb(err, null);
      if(stats.mtime != cacheMtime) {
        fs.readFile(file, function(err, content){
          if(err) return cb(err, null)
          else {
            cacheCont = content;
            cacheMtime = stats.mtime;
            return cb("", content);
          }
        })
      }
      else {
        return cb("", cacheCont);
      }
    })
  }
}

