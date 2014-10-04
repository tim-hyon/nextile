function sleep(millis, callback) {
    setTimeout(function()  
            { callback(); }
    , millis);
}

                  
function readit(){                             
        var m = require('mraa'); //require mraa                     
        var xpin = new m.Aio(0); //setup access analog inpuput pin 0
        var x = xpin.read(); //read the value of the analog pini    
        var ypin = new m.Aio(1); //setup access analog inpuput pin 0
        var y = ypin.read(); //read the value of the analog pini     
        var xpin2 = new m.Aio(2); //setup access analog inpuput pin 0
        var x2 = xpin2.read(); //read the value of the analog pini   
        var ypin2 = new m.Aio(3); //setup access analog inpuput pin 0
        var y2 = ypin2.read(); //read the value of the analog pini
                                                                                
        console.log(x +','+ y + ' ; '+x2+','+y2); //write the value of the analo
                           
        sleep(200, readit);
}