<?php
$text = $_GET["text"];
$file = "./data.txt";//聊天文件
$content = $text."\r\n";
if(!$fp = fopen($file,'a'))
{
    exit;
}
if((fwrite($fp,$content)) === FALSE)
{
    exit;
}
echo "success";
fclose($fp);
?>