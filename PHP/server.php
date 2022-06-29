<?php

function getUnits($url){
  $unitsJson = file_get_contents($url);
  if ($unitsJson === false) {
     return false;
  }

  $unitsObj = json_decode($unitsJson);
  if ($unitsObj !== null) {
     return false;
  }

  return $unitsObj;
}

$units = getUnits();
if ($units !== false) {
  print $units->family->units;
}

?>