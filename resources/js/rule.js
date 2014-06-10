// FuxGAP counterpoint rules
// Copyright Benjamin W. Bohl 2014.
// Implements rules.
// http://www.github.com/bwbohl/FuxGAP
// 
// ## Description
// 
// This file implements rules
// 
// reference to testfile

FuxGAP.Rule = (function(){
   function Rule(rule,appliesTo,relevance){
      if (arguments.length > 0) this.init(arguments);
   }
   
   //To enable logging for this class set FuxGAP.interval.DEBUG to 'true'
   function L(){ if (FuxGAP.interval.DEBUG) FuxGAP.L('FuxGAP.Rule ', arguments); }
   
   //determine to which cases the rule applies report error if case not available
   this.appliesTo = function(){
   	switch(appliesTo){
   		case "first":
   			1
   			break;
   		case "last":
   			//last
   			break;
   		case "melody":
   			//any
   			break;
   		default:
   			L('error: no case for ' + appliesTo);
   	}
   };
   
   //the relevance of a rule tells whether it is a strict rule or an recommendation
   this.relevance = relevance;
   
});
