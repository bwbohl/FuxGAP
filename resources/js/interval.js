// FuxGAP counterpoint rules
// Copyright Benjamin W. Bohl 2014.
// Implements intervals.
// http://www.github.com/bwbohl/FuxGAP
// 
// ## Description
// 
// This file implements intervals
// 
// reference to testfile

FuxGAP.Interval = function(semitones, name, type){/*function(){
	if(arguments.length > 0) {this.init(arguments); this.L(arguments)}
	},*/
	
	  // To enable logging for this class. Set `FuxGAP.Interval.DEBUG` to `true`.
	
	/*function init(semitones, name, type){
		*/
	//	this.prototype = FuxGAP;
		
		this.semitones = semitones;
		this.name = name;
		this.type = type;
		
		init: {
		  args = [].slice.call(arguments);
		  this.L('FuxGAP.Interval init ', arguments);
		}
};

FuxGAP.Interval.prototype = new FuxGAP();
		


/*FuxGAP.Interval.prototype.L = function(){
	console.log('FuxGAP.Interval.DEBUG: ' + FuxGAP.Interval.DEBUG);
	 args = [].slice.call(arguments);
	if (FuxGAP.Interval.DEBUG === true){
  	FuxGAP.prototype.L("FuxGAP.Interval", args);
  	}
};*/

// define intervals as arrays with [semitoneSteps, intervalName]
var intervals = new Array ([0, 'P1'],
                              [1, 'm2'],
                              [2, 'M2'],
                              [3, 'm3'],
                              [4, 'M3'],
                              [5, 'P4'],
                              [6, 'TT'],
                              [7, 'P5'],
                              [8, 'm6'],
                              [9, 'M6'],
                              [10, 'm7'],
                              [11, 'M7'],
                              [12, 'P8']);
                              
//define perfect consonances
var cons_perf = new Array([0, 'P1'],
                          [7, 'P5'],
                          [12, 'P8']);

//init individual intervals
FuxGAP.Interval.P1 = new FuxGAP.Interval('0', 'P1', 'cons_perf');
FuxGAP.Interval.m2 = new FuxGAP.Interval('7', 'P5', 'cons_perf');
FuxGAP.Interval.P8 = new FuxGAP.Interval('12', 'P8', 'cons_perf');


//define imperfect consonances
var cons_imp = new Array ([3, 'm3'],
                          [4, 'M3'],
                          [8, 'm6'],
                          [9, 'M6']);

//init individual intervals
FuxGAP.Interval.m3 = new FuxGAP.Interval('3', 'm3', 'cons_imp');
FuxGAP.Interval.M3 = new FuxGAP.Interval('4', 'M3', 'cons_imp');
FuxGAP.Interval.m6 = new FuxGAP.Interval('8', 'm6', 'cons_imp');
FuxGAP.Interval.M6 = new FuxGAP.Interval('9', 'M6', 'cons_imp');


//define consonances
var consonances = new Array().concat(cons_perf, cons_imp);

//define dissonances
var dissonances = new Array([1, 'm2'],
                            [2, 'M2'],
                            [5, 'P4'],
                            [6, 'M4'],//große4
                            [6, 'm5'],//falsche 5
                            [10, 'm7'],
                            [11, 'M7']);

//init individual intervals
FuxGAP.Interval.m2 = new FuxGAP.Interval('1', 'm2', 'diss');
FuxGAP.Interval.M2 = new FuxGAP.Interval('2', 'M2', 'diss');
FuxGAP.Interval.P4 = new FuxGAP.Interval('5', 'P4', 'diss');
FuxGAP.Interval.M4 = new FuxGAP.Interval('6', 'M4', 'diss');
FuxGAP.Interval.m5 = new FuxGAP.Interval('6', 'm5', 'diss');
FuxGAP.Interval.m7 = new FuxGAP.Interval('10', 'm7', 'diss');
FuxGAP.Interval.M7 = new FuxGAP.Interval('11', 'M7', 'diss');
