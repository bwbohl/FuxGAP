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

  this.L('FuxGAP.Example init ', arguments);
};


//implement class specific logging mechanism
FuxGAP.Example.prototype = new FuxGAP();

/*FuxGAP.Example.prototype.L = function(){
	console.log('Example Logging: ' + FuxGAP.Example.DEBUG);
	if (FuxGAP.Example.DEBUG === true){
  	FuxGAP.L("FuxGAP.Interval", arguments);
  	}
};*/