<?php
  header("Access-Control-Allow-Origin: *");
  $api_endpoint = 'https://api.sightmap.com/v1/assets/1273/multifamily/units/';
  $curl = curl_init($api_endpoint);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl, CURLOPT_HTTPHEADER, [
      'API-Key: 7d64ca3869544c469c3e7a586921ba37',
      'Content-type: application/json'
    ]);
  $response = curl_exec($curl);
  curl_close($curl);
  echo $response;
?>