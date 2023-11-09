<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
header('Content-Type: application/json');



/*
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

*/

$filePaths = [
    "gal_1" => "../photos/MassGalleries/small/Taczow/",
    "gal_2" => "../photos/MassGalleries/small/Fundamenty/",
    "gal_3" => "../photos/MassGalleries/small/Moniuszki/",
];

$allImages = [];

foreach ($filePaths as $key => $directory) {
    // Define the pattern to look for image files
    $pattern = $directory . '*.{jpg,jpeg,png,gif}';

    // Use glob to get all image files
    $images = glob($pattern, GLOB_BRACE);

    // Use array_map and basename to get the file names
    $fileNames = array_map('basename', $images);

    // Add the images to the allImages array, grouped by directory
    $allImages[$key] = $fileNames;
}

// Now $allImages is an associative array where each key is a directory name
// and each value is an array of image paths in that directory

echo json_encode($allImages);
