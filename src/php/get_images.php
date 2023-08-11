<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

$directory = __DIR__ . '/../photos/Taczow40';
$images = array();

if (is_dir($directory)) {
  if ($handle = opendir($directory)) {
    while (($file = readdir($handle)) !== false) {
      if (!in_array($file, array('.', '..')) && !is_dir($directory . '/' . $file)) {
        $extension = pathinfo($file, PATHINFO_EXTENSION);
        if (in_array($extension, array('jpg', 'jpeg', 'png'))) {
          $images[] = $file;
        }
      }
    }
    closedir($handle);
  }
}

echo json_encode($images);