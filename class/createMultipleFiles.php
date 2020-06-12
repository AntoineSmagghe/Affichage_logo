<?php

mkdir("emailings");

include "links.php";

foreach ($links as $link) {
    ob_start();
    include "index.php";
    $content = ob_get_clean();

    mkdir("emailings/" . $link["filename"]);
    mkdir("emailings/" . $link["filename"] . "/img");
    copy("img/Logo_VIVHealthTech_White.png", "emailings/" . $link["filename"] . "/img/Logo_VIVHealthTech_White.png");
    copy("img/Footer_Logos.png", "emailings/" . $link["filename"] . "/img/Footer_Logos.png");
    copy($link["header_image"], "emailings/" . $link["filename"] . "/" . $link["header_image"]);
    file_put_contents("emailings/" . $link['filename'] . "/Emailing_07_" . $link["filename"] . ".html", $content);
}

echo "Job is done!";
