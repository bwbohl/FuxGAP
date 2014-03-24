//TODO: arrays to JSON?

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

var noteVal = new Array (['c',1],['cis',2],['des',2],['d',3],['dis',4],['es',4],['e',5],['f',6],['fis',7],['ges',7],['g',8],['gis',9],['as',9],['a',10],['ais',11],['bb',11],['b',12]);
// melody arrays [pitch,octave,duration]
var cpf1 = new Array ([3,4,2],[6,4,2],[5,4,2],[3,4,2],[8,4,2],[6,4,2],[10,4,2],[8,4,2],[6,4,2],[5,4,2],[3,4,1]);
var cp11 = new Array ([10,4,2],[10,4,2],[8,4,2],[10,4,2],[12,4,2],[1,5,2],[1,5,2],[12,4,2],[3,5,2],[2,5,2],[3,5,1]);

function eval(cpf,cp){
  spellMelody(cpf, 'cpf');
  spellMelody(cp, 'cp');
  spellIntervals(cpf, cp);
  melodyToParsonsCode(cpf, 'cpf_parsons');
  melodyToParsonsCode(cp, 'cp_parsons')
};

function getInterval (Ncpf, Ncf) {
// TODO: vektor(above, below),
// TODO: translate intervals
  val = Ncpf[0]-Ncf[0];
  console.log(val);
  if(val < 0 ){ //TODO better with while?
    var newVal = Math.abs(val);
    console.log(newVal);
    return intervals[newVal][1] + '/' + val;
  }else if (val == 0){
    switch(Ncpf[1]-Ncf[1]){
      case -1:
        return intervals[12][1] + '/' + val;
      case -2:
        return intervals[12][1] + '+' + intervals[12][1] + '/' + val;
      //TODO other cases? e.g. cp lower than cpf?
    }
  }else if(val > 0 && (Ncpf[1]-Ncf[1]) < 0){
    return intervals[12-val][1] + '/' + val;
  }

};

function translatePvalToString(val){
// TODO: enharmonics
  for (var x = 0; x < noteVal.length; x++){
    var entry = noteVal[x];
    console.log(entry);
    if(entry[1] == val){
      return entry[0];
    }
  }
};

function spellMelody(melody, targetID) {
 //TODO: spell melodic intervals
  for (var n = 0; n < melody.length; n++){
   span = document.createElement('span');
   note = melody[n];
   pval = note[0];
   
   pname = translatePvalToString(pval);
   
   span.innerHTML = pname + '<br/>' + note;
   document.getElementById(targetID).appendChild(span); 
   
   console.log(n + ' is ' + melody[n]);
   console.log(span);
  }
  return console.log('error with melody '+n);
};

function spellIntervals(cpf, cf){
 console.log('spellIntervals');
  for (x=0;x<cpf.length;x++){
    var i = getInterval(cpf[x],cf[x]);
    console.log(cpf[x]);
    span = document.createElement('span');
    
    span.innerHTML = getInterval(cpf[x], cf[x]);
    document.getElementById('intervals').appendChild(span); 

  }
};

function melodyToParsonsCode (melody, targetID){
  for (var n = 0; n < melody.length; n++){
    var span = document.createElement('span');
    var parsons;
    if (n == 0){
      parsons = '-';
    } else if (melody[n][1] > melody[n-1][1]){
      parsons = melody[n][0] - melody[n-1][0] +12;
    } else if (melody[n][1] < melody[n-1][1]){
      parsons = melody[n][0] - melody[n-1][0] -12;
    } else {
      parsons = melody[n][0] - melody[n-1][0];
    }
    console.log(parsons);
    
    span.innerHTML = parsons;
    document.getElementById(targetID).appendChild(span);
  }
};

function evaluateMotus(){};