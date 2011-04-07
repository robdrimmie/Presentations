<?php
header('Content-type: application/json');

$base = 'http://api.yellowapi.com/';
$base .= $_REQUEST['endpoint'] . '/?1=1';

unset( $_REQUEST['endpoint'] );

foreach( $_REQUEST as $key=>$value ) {
  $base .= "&{$key}={$value}";
}

$handle = fopen($base, "r");

if ($handle) {
    while (!feof($handle)) {
        $buffer = fgets($handle, 4096);
        echo $buffer;
    }
    fclose($handle);
}
