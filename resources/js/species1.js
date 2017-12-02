
//TODO: arrays to JSON?

// melody arrays [pitch-class,octave,duration]

/* cantus praefactus of Fux's first example
var cpf1 = new Array (new Array(3,4,2),new Array(6,4,2),new Array(5,4,2),new Array(3,4,2),new Array(8,4,2),new Array(6,4,2),new Array(10,4,2),new Array(8,4,2),new Array(6,4,2),new Array(5,4,2),new Array(3,4,1));

 counterpoint of Fux's first example
var cp11 = new Array (new Array(10,4,2),new Array(10,4,2),new Array(8,4,2),new Array(10,4,2),new Array(12,4,2),new Array(1,5,2),new Array(1,5,2),new Array(12,4,2),new Array(3,5,2),new Array(2,5,2),new Array(3,5,1));*/

// load MEI XML file of first example for use in vexflow rendering
var xmlDoc=loadXMLDoc('resources/xml/cpf1.xml');
  if (xmlDoc) { 
    FuxGAP.prototype.L('FuxGAP MEI-XML loaded.' + 'true'); 
  } else {
    //TODO: throw exception
  }

  //... and render it onto the canvas
var MEI = xmlDoc.getElementsByTagNameNS("http://www.music-encoding.org/ns/mei", 'score');

// main functio to call evaluation of a supplied cantus praefactus (cpf) and couterpoint (cp)
// @param cpf : given javascript array of cantus praefactus melody as seen for example in var cpf1
// @param cp : given javascript array of counterpointt melody as seen for example in var cp11 
function eval(example){
  
  cpf = example.cpf;
  cp = example.cp;
  
  spellMelody(cpf, 'cpf');
  spellMelody(cp, 'cp');
  spellIntervals(cpf, cp);
  spellSemitoneSteps(cpf, 'cpf_semitones');
  spellSemitoneSteps(cp, 'cp_semitones');
  

};

// determines the harmonic intervals of two notes in cpf and cp
function getInterval (Ncpf, Ncp) {
// TODO: vektor(above, below),
// TODO: translate intervals
// TODO: refactor to evaluate oct*12 + pitch-class
  
  //calculate the difference between pitch values of cantus praefactus and counterpoint
  var semiV = getIntervalSemitonesVektor(Ncpf, Ncp);
  console.log('getInterval vectorized semitones: ' + semiV);
  
  var parsons = getParsons(Ncpf,Ncp);
  console.log('getInterval parsons: ' + parsons);

  var semitones = Math.abs(semiV);
  console.log('getInterval abs. semitones: ' + semitones);  
  
  // if semiV is negative that is if pitch-class of counterpoint is lower than that of cantus praefactus
  if(semiV < 0 ){ //TODO better with while?
    //TODO 2014-06-25 deprecated?
    // get absolute semitone value / distance
    var semi = Math.abs(semiV);
       console.log('getInterval abosolute semitones: ' + semi);
    return intervals[semi][1]; /* + '/' + semiV*/
  
  // if semiV is positive return respective interval
  }else {
/*        console.log($(FuxGAP.interval).each());*/
    var i;
    $(FuxGAP.Intervals).each(
      function(index,item){
        if(item.semitones == semitones){
            console.log(item);
            i = item;
        }
      }); //TODO hier weiter
      
      return i.name;
  }

};

// determine vectorized (+/-) semitone steps of note 2 in respect to note 1
function getIntervalSemitonesVektor(n1,n2){
    
    try
      {
        val = (n2[0]+n2[1]*12)-(n1[0]+n1[1]*12);
        return val;
      }
    // if not two notes are being passed as arguments
    catch(err)
      {
        // if only one note is being passed as argument it is the first note thus return '*' as starting point
        if(n1 === undefined || n2 === undefined){
            return '*';
        }
        // if both notes are undefined log an error
        else if (n1 === undefined && n2 === undefined){
            console.log('getIntervalSemitonesVektor: missing arguments');
            return;
        }
      }
};

// return parsons code for given notes
function getParsons(n1,n2){
    var diff = getIntervalSemitonesVektor(n1,n2);
    
    if(diff == 0){
        return 'r'
    }
};

// translates a pitch-class number to a pitch name
function translatePvalToString(val){
// TODO: enharmonics
  for (var x = 0; x < noteVal.length; x++){
    var entry = noteVal[x];
//    console.log(entry);
    if(entry[1] == val){
      return entry[0];
    }
  }
};

// spells a given melody to pitch names
// 
// @param melody : melody array as e.g. seen in var cpf1
// @param targetID : gives the id value of a target div the melody shall be spelled to
function spellMelody(melody, targetID) {
 //TODO: spell melodic intervals
  for (var n = 0; n < melody.length; n++){
   span = document.createElement('span');
   note = melody[n];
   pval = note[0];
   
   pname = translatePvalToString(pval);
   
   span.innerHTML = pname + '<br/>' + note;
   document.getElementById(targetID).appendChild(span); 
   
//   console.log(n + ' is ' + melody[n]);
//   console.log(span);
  }
//  return console.log('error with melody '+n);
};

/* spells the intervals of to given melodies as span elements in a div
 * 
 */
function spellIntervals(cpf, cf){
/* console.log('spellIntervals function called');*/
  for (x=0;x<cpf.length;x++){
    var i = getInterval(cpf[x],cf[x]);
    //console.log(cpf[x]);
    span = document.createElement('span');
    
    span.innerHTML = getInterval(cpf[x], cf[x]);
    document.getElementById('intervals').appendChild(span); 

  }
};

//spell the semitone steps from note to note in a given melody to targetID as span elements
function spellSemitoneSteps (melody, targetID){
  for (var n = 0; n < melody.length; n++){
    var span = document.createElement('span');
    var parsons = getIntervalSemitonesVektor(melody[n],melody[n-1]);
    
    /*if (n == 0){
      parsons = '*';
    } else if (melody[n][1] > melody[n-1][1]){
      parsons = melody[n][0] - melody[n-1][0] +12;
    } else if (melody[n][1] < melody[n-1][1]){
      parsons = melody[n][0] - melody[n-1][0] -12;
    } else {
      parsons = melody[n][0] - melody[n-1][0];
    }*/
    /*console.log(parsons);*/
    
    span.innerHTML = parsons;
    document.getElementById(targetID).appendChild(span);
  }
};

function evaluateMotus(){
  /* get Harmony
 * dur2beats
 * MeiLib.dotsMult
 * sumUpUntil
 */
};

// determines whether the cantus praefactus is below of above the counterpoint
// to do so cpf notes above and below are being counted
// if numbers are identical returns 'equilibrium'
// else returns 'above' if more notes are above and resp. 'below' if more notes are below
checkCpfPos = function(cpf,cp){
   
   var cpf_pos = new String();
   var cpf_above = new Array();
   var cpf_below = new Array();
   
   // push notes to respective array in dependency of their individual position
   for(var i = 0; i < cpf.length; i++){
      if (cpf[i][1] > cp[i][1]){
        cpf_above.push(i);
    } else if (cpf[i][1] < cp[i][1]){
        cpf_below.push(i);
    } else if (cpf[i][0] > cp[i][0]){
        cpf_above.push(i)
    } else if (cpf[i][0] < cp[i][0]){
        cpf_below.push(i)
    }
   };
   
   // evaluate array lengths to determine estimated position of cantus praefactus
   if(cpf_above.length > cpf_below.length){
      cpf_pos = 'above';
    } else if (cpf_above.length < cpf_below.length){
      cpf_pos = 'below';
    } else if (cpf_above.length == cpf_below.length){
      cpf_pos = 'equilibrium';
   }
   
   //log numbers and arrays for debugging purposes
   console.log('above: ' + cpf_above.length);
   console.log(cpf_above);
   console.log('below: ' + cpf_below.length);
   console.log(cpf_below);
   
   //log result
   console.log('cpf_pos: '+ cpf_pos);
   
   //return estimated position of counterpoint
   return cpf_pos;
};

/*FuxGAP.rules.motus.rectus = function(Ncpf,Ncp){
  
};*/

/*
 * einerley zeitmaß --> evaluate species
 * halbkurze note
 * zwei stimmen
 * schlechter gesang
 * nur consonanzen
 * Anfang perfekt
 * GEN: cf oben => erste note cp muss identisch sein
 * 
 * widrige oder seitn öfters fehlt man nicht so leicht
 * behutsam bei gerader bewegung
 * 
 * mehr unvollkommene als vollkommene
 * Ende perfekt
 * cf unten => paenultima g6
 * cf oben => paenultima k3
 * 
 * Bsp 1
 * 
 * Bsp 2 (cf oben)
 * 
 * 
 * HAR: gerade bewegung verboten weil zwei Quinten fogeln
 * 
 *
 * Bsp 3
 * 
 * weitere übung in natürlichen Leitern
 * 
 * MEL/GEN: Sprung Tritonus verboten bzw Tritonus in Cp verboten
 *  
 * Bsp 4
 * 
 * Bsp 5
 * (Stimmkreuzung gut)
 * 
 * Bsp 6
 * 
 * MEL: Sprung g6 verboten
 * 
 * Ottava Battuta verboten (decime -> in gegenbewegung)
 * stellt benutzung frey, wenn aber untere stimme stufenweise nach oben und oben springt dann auf gar keinen Fall
 * 
 * von einklang zu andere konsonanz sprung verboten, außer der schlechte gesang gibt dies vor
 * 
 * Einklang verboten, außer am Anfang und am Ende
 * 
 * mi gerne hinauf fa gerne hinunter (angleichung des kreuzes an die k3 der paenultima)
 */
 
FuxGAP_species_first = function(cpf, cp){
   
  // determine position of cantus preafactus in respect to counterpoint
  var cpf_pos = checkCpfPos(cpf,cp);
 
  //for testing assign manually
  /*cpf_pos = 'above';
  console.log('manual override cpf_pos: ' + cpf_pos);*/
   
  //log cpf_pos
  console.log('cpf_pos: '+ cpf_pos);
   
  //determine first interval
  var int_first = getInterval(cpf[0], cp[0]);
   
  console.log(int_first);
   
  //check rules with respect to counterpoint/cantus prafactus positions
  switch(cpf_pos){
   
    //if cpf above then first note has to be identical resp P8 (or P1?)
    //TODO P1
	  case 'above':
	    console.log('species first: ' + 'cpf: ' + cpf_pos);
	    
	     var allowedValues = new Array();
	   
	    for(i=0;i<cons_perf.length;i++){
	      if(cons_perf[i][1] != 'P5'){
	        allowedValues.push(cons_perf[i][1]);
	      }
	    }
	   
	    if($.inArray(int_first, allowedValues) !== -1){
	      console.log('first interval: correct');
	    }else{
	      console.log('species1_error: first interval: incorrect');           
	    }
	    break;
	   
	  //if cpf below then first interval has to be perfect consonance
	  case 'below':
	   
	    var allowedValues = new Array();
	   
	    for(i=0;i<cons_perf.length;i++){
	      allowedValues.push(cons_perf[i][1]);
	    }
	   
	    var int_first = getInterval(cpf[0], cp[0]);
	    var int_pos = $.inArray(int_first,allowedValues)
	   
	    console.log('species first: ' + 'cpf_pos case: ' + cpf_pos);
	    console.log('species fist: interval first: ' + getInterval(cpf[0], cp[0]));
	   
	    console.log('index of int ' + int_pos);
	   
	    if ($.inArray(int_first, allowedValues) !== -1){
	      console.log('species first: interval first: correct');
	    } else {
	        console.log('species1_error: first interval: incorrect');
	    }
	   
	   break;
   }
   
  //check for consonances
  
    
};