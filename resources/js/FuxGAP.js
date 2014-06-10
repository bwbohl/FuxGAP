// FuxGAP counterpoint rules
// Copyright Benjamin W. Bohl 2014.
// Implements Fux species, first.
// http://www.github.com/bwbohl/FuxGAP
// 
// ## Description
// 
// This file implements Fux's first species
// 
// reference to testfile

function FuxGAP() {};

// Default log function sends all arguments to console.
FuxGAP.prototype.L = function(block, args) {
  if (!args) return;
  var line =  Array.prototype.slice.call(args).join(" ");//[].slice.call(arguments);
  window.console.log(block + ": " + line);
};


/*
 * Evaluates the species of the supplied counterpoint composition
 * 
 * @param: cpf the given Cantus Praefactus melody
 * @param: cp the corresponding Counterpoint melody
 */
FuxGAP.prototype.evaluateSpecies = function(cpf, cp){
  
  // log that function has been called
  console.log('evaluateSpecies called');
  
  // species will hold the result of the evalulation
  var species = new String();
  
  // durs_cpf is an array that will hold all the duration values of the Cantus Praefactus
  var durs_cpf = new Array();
  
  // durs_cp is an array that will hold all the duration values of the Counterpoint
  var durs_cp = new Array();
  
  // assign default value to var species
  species = 'undetermined';

  // push cpf durations to durs_cpf
  for(var i = 0; i < cpf.length; i++){
    /*console.log('pos: ' + i);
    console.log('value: ' + cp[i][2]);*/
    durs_cpf.push(cpf[i][2]);
  }
  
  // push cp durations to durs_cpf
  for(var i = 0; i < cp.length; i++){
    /*console.log('pos: ' + i);
    console.log('value: ' + cp[i][2]);*/
    durs_cp.push(cp[i][2]);
  }
  
  // check for first species
  for (var i = 0; i < durs_cp.length; i++){
    if (durs_cp[i] == durs_cpf[i]){
      species = 'first';
    }
  }
  
  // log var species
  console.log('species: '+ species);
  
  /*console.log('durs_cp: ');
  console.log(durs_cp);*/
  
  //return species;
  
    if (species == 'first') {
    FuxGAP_species_first(Species1_ex1.cpf, Species1_ex1.cp);
  }
  
};

FuxGAP1 = new FuxGAP();
