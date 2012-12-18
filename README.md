## Simple file cache

### Usage

    var simpleFileCache = require('simplefilecache');
    
    var getTextFile = simpleFileCache('textfile.txt');
    
    setInterval(function(){
    
      getTextFile(function(err, content){
        if(err)
          console.log(err)
        else
          console.log("Content: " + content)
      })
    
    }, 5000);