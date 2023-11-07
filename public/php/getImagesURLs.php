<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
header('Content-Type: application/json');

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$directoryName = filter_var($data['directory'], FILTER_SANITIZE_STRING);;



$filePaths = 
[
    "moniuszki" => "../photos/MassGalleries/Moniuszki/",
    "moniuszki40" => "../photos/MassGalleries/Moniuszki40/",
    "taczow" => "../photos/MassGalleries/Taczow/",
    "taczow40" => "../photos/MassGalleries/Taczow40/",
    "fundamenty" => "../photos/MassGalleries/Fundamenty/",
    "fundamenty40" => "../photos/MassGalleries/Fundamenty40/"
];


//if (!array_key_exists($directoryName, $filePaths)) exit();


    $directory = $filePaths[$directoryName];

    // Define the pattern to look for image files
    $pattern = $directory . '/*.{jpg,jpeg,png,gif}';

    // Use glob to get all image files
   
    $images = glob($pattern, GLOB_BRACE);
    //$fileNames = array_map('basename', $images);

    $baseUrl = 'https://recta.website/photos/MassGalleries/';
    $testUrl = 'http://localhost/recta2/recta2/public/';

    $imageUrls = array_map(function ($fileName) use ($testUrl) {
        $withDots = $testUrl . $fileName;
        $properUrl = str_replace('../', '', $withDots);
        return $properUrl;
    }, $images);

   // echo $imageUrls;
   echo json_encode($imageUrls, JSON_UNESCAPED_SLASHES);

   // $fileNames = array_map('basename', $images);






