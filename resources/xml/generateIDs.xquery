xquery version "1.0";

declare namespace mei = "http://www.music-encoding.org/ns/mei";

declare function local:caculateID($element){
string-join(
  for $anOrS in $element/ancestor-or-self::*
  let $localName := local-name($anOrS),
      $idNum := count($anOrS/preceding-sibling::*[local-name()=$localName])+1
  where not($localName = ('body','music','mei'))
  return
    concat(substring($localName,1,1), $idNum),
    
    '_'
)
};


for $item at $i in doc('cpf1.xml')//mei:section//*
let $id := attribute xml:id {local:caculateID($item)}
where (:$i <= 2 and:) not(exists($item/@xml:id))
return 
    insert node $id as first into $item