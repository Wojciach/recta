<?php
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

if ($lang === 'pl') {
    header('Location: https://pl.recta.website/');
} elseif ($lang === 'en') {
    header('Location: https://en.recta.website/');
} else {
    // Default redirect if the user's language is neither Polish nor English
    header('Location: https://pl.recta.website/');
}
exit;
