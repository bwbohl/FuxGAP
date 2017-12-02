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
/*		  args = [].slice.call(arguments);*/
		  this.L('FuxGAP.Interval init ', arguments);
		}
};

FuxGAP.Interval.prototype = new FuxGAP();

FuxGAP.Intervals = [
    //init perfect consonances
    FuxGAP.Interval.P1 = new FuxGAP.Interval('0', 'P1', 'cons_perf'),
    FuxGAP.Interval.m2 = new FuxGAP.Interval('7', 'P5', 'cons_perf'),
    FuxGAP.Interval.P8 = new FuxGAP.Interval('12', 'P8', 'cons_perf'),
    
    //init imperfect consonances
    FuxGAP.Interval.m3 = new FuxGAP.Interval('3', 'm3', 'cons_imp'),
    FuxGAP.Interval.M3 = new FuxGAP.Interval('4', 'M3', 'cons_imp'),
    FuxGAP.Interval.m6 = new FuxGAP.Interval('8', 'm6', 'cons_imp'),
    FuxGAP.Interval.M6 = new FuxGAP.Interval('9', 'M6', 'cons_imp'),
    
    //init dissonances
    FuxGAP.Interval.m2 = new FuxGAP.Interval('1', 'm2', 'diss'),
    FuxGAP.Interval.M2 = new FuxGAP.Interval('2', 'M2', 'diss'),
    FuxGAP.Interval.P4 = new FuxGAP.Interval('5', 'P4', 'diss'),
    FuxGAP.Interval.M4 = new FuxGAP.Interval('6', 'M4', 'diss'),
    FuxGAP.Interval.m5 = new FuxGAP.Interval('6', 'm5', 'diss'),
    FuxGAP.Interval.m7 = new FuxGAP.Interval('10', 'm7', 'diss'),
    FuxGAP.Interval.M7 = new FuxGAP.Interval('11', 'M7', 'diss')
]