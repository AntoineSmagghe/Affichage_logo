<?php

include "links.php";

for ($i = 0; $i < count($link); $i++){
    
    ob_start();
    include "index.php";
    $content = ob_get_clean();

    mkdir("emailings/" . $link[$i]["name"]);
    mkdir("emailings/" . $link[$i]["name"] . "/img");
    file_put_contents("emailings/" . $link[$i]['name'] . "/Emailing_01_" . $link[$i]["name"] . ".html", $content);

}

echo "Job is done!";


/*
class CreateMultipleFiles
{
    private $data;
    private $templatePath;
    
    private function __construct($data, $templatePath){
        $this->data = $data;
        $this->templatePath = $templatePath;
    }

    public function builder(){
        ob_start();
        include $this->templatePath;
        $conent = ob_get_clean();


    }
}
*/