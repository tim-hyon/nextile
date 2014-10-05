function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}

//var Edison = require('./Edison.js');

var i = 0;
var m = require('mraa');
var xpin = new m.Aio(0);
var x;
var ypin = new m.Aio(1);
var y;
var xpin2 = new m.Aio(2);
var x2;
var ypin2 = new m.Aio(3);
var y2;
var flexpin = new m.Aio(4);
var flex;


function readit(){
                                                        
        i++;
        x = xpin.read(); //read the value of the analog pini
        y = ypin.read(); //read the value of the analog pini
        x2 = xpin2.read(); //read the value of the analog pini
        y2 = ypin2.read(); //read the value of the analog pini  
        flex = flexpin.read();
        
        //var icpin = new m.I2c(0)
        //var ic = icpin.read()

        if (i %20 == 0){        
                console.log(x +','+ y + ' ; '+x2+','+y2+ ' ; '+ flex+ ' ; '); //write the value of the analog pin to the console
        }
        //Edison.enable_i2c6(
        sleep(10,readit);


}

readit();
