FuxGAP
======

Prototype webapplication for proofing and generating counterpoint against Fux's Gradus Ad Parnassum.

Version 0.1
-----------

* provides Fux's first example counterpoint from Liber 2, Exercitii I, Lectio I.
** as javascript array, each note as array of three values, being [pitchclass, octave, duration]
** corresponding javascript variable are cpf1 and cp11
* renders melody pitches as letters and provides [pitchclass, octave, duration] in second line
* calculates semitone steps of melodic intervals
* calculates intervals between cp and cpf