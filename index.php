<style>
#logos{
    display: flex;
    flex-wrap: wrap;
    width: 1055px;
    margin: auto;
    justify-content: space-around;
}

.logo_container{
}

.logo{
    width: 228px;
    max-height: 110px;
    object-fit: scale-down;
    padding: 15px;  
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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php echo "<pre>LISTE DES LOGOS : " . print_r(array_filter($output), true) . "</pre>"; ?>

    <section id="logos">
        <?php for ($i = 0; $i < (count($output) - 1); $i++){ ?>
        <!--div class="logo_container"-->
            <img src="<?= $output[$i] ?>" class="logo">
        <!--/div-->
        <?php } ?>
    </section>
    <script>
        var elements = document.querySelectorAll(".logo_container");
        
        for (let i = 0; i < elements.length; i++){
            //create box in bottom-left
            var resizer = document.createElement('div');
            resizer.class = "resizerElt";
            resizer.style.width = '10px';
            resizer.style.height = '10px';
            resizer.style.background = 'red';
            resizer.style.position = 'absolute';
            resizer.style.right = 0;
            resizer.style.bottom = 0;
            resizer.style.cursor = 'se-resize';
            //Append Child to Element
            elements[i].appendChild(resizer);
            //box function onmousemove
            resizer.addEventListener('mousedown', initResize, false);

            //Window funtion mousemove & mouseup
            function initResize(e) {
                window.addEventListener('mousemove', Resize, false);
                window.addEventListener('mouseup', stopResize, false);
            }

            //resize the element
            function Resize(e) {
                elements[i].style.width = (e.clientX - elements[i].offsetLeft) + 'px';
                elements[i].style.height = (e.clientY - elements[i].offsetTop) + 'px';
            }
            
            //on mouseup remove windows functions mousemove & mouseup
            function stopResize(e) {
                window.removeEventListener('mousemove', Resize, false);
                window.removeEventListener('mouseup', stopResize, false);
            }
        }
    </script>
</body>
</html>



