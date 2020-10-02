<?php
              
if(isset($_POST['textdata']))
{
$data=$_POST['textdata'];

$fp = fopen('text.txt', 'a');
fwrite($fp, $data);
fclose($fp);
}
?>