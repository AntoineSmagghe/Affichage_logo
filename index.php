<style>
#logos{
    display: flex;
    flex-wrap: wrap;
    width: 1113px;
    margin: auto;
    justify-content: center;
}

.logo{
    width: 228px;
    object-fit: scale-down;
    max-height: 110px;
    padding: 15px;
    display: flex;
    margin: auto 0;
}
</style>

<?php
try{
    $directory = shell_exec('dir /b');
    $filepath = explode("\n", $directory);
    
    if (($key = array_search("index.php", $filepath)) !== false){
        unset($filepath[$key]);
    };
    
    $output = array_values($filepath);
}catch(Exception $e){
    echo $e;
}
?>

<?php echo "<pre>LISTE DES LOGOS : " . print_r(array_filter($output), true) . "</pre>"; ?>

<section id="logos">
    <?php for ($i = 0; $i < (count($output) - 1); $i++){ ?>
        <img src="<?= $output[$i] ?>" class="logo">
    <?php } ?>
</section>