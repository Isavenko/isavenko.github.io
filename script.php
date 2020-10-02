<?php
$fp = fopen('text.txt', 'a');
fwrite($fp, $_POST);
fclose($fp);
?>