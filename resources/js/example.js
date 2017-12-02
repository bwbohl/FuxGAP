// FuxGAP counterpoint rules
// Copyright Benjamin W. Bohl 2014.
// Implements examples.
// http://www.github.com/bwbohl/FuxGAP
// 
// ## Description
// 
// This file implements examples
// 
// reference to testfile

FuxGAP.Example = function(cpf, cp){
	this.cpf = cpf;
	this.cp = cp;
	
	init: {
        this.L('FuxGAP.Example init ', arguments);
    }
};


//implement class specific logging mechanism
FuxGAP.Example.prototype = new FuxGAP();

/*FuxGAP.Example.prototype.L = function(){
	console.log('Example Logging: ' + FuxGAP.Example.DEBUG);
	if (FuxGAP.Example.DEBUG === true){
  	FuxGAP.L("FuxGAP.Interval", arguments);
  	}
};*/

// Fux's first example
Species1_ex1 = new FuxGAP.Example(cpf = new Array (new Array(3,4,2),new Array(6,4,2),new Array(5,4,2),new Array(3,4,2),new Array(8,4,2),new Array(6,4,2),new Array(10,4,2),new Array(8,4,2),new Array(6,4,2),new Array(5,4,2),new Array(3,4,1)),
                                  cp = new Array (new Array(10,4,2),new Array(10,4,2),new Array(8,4,2),new Array(10,4,2),new Array(12,4,2),new Array(1,5,2),new Array(1,5,2),new Array(12,4,2),new Array(3,5,2),new Array(2,5,2),new Array(3,5,1)));
