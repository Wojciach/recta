<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Accept, Origin, Authorization');
header('Content-Type: application/json');

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

echo json_encode($allImages);
