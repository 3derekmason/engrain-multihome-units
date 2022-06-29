<?php
  header(API_Key: '7d64ca3869544c469c3e7a586921ba37');
  $api_endpoint = 'https://api.sightmap.com/v1/assets/1273/multifamily/units';

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

  $units = getUnits($api_endpoint);
  if ($units !== false) {
    print $units->family->units;
  }
?>