<?php
// $filename: 文件名
// $start: 从倒数第几行开始
// $lines: 读取几行
function read_backward_line($filename, $start, $lines){
    $lines++;
    $offset = -1;
    $c = '';
    $read = '';
    $i = 0;
    $fp = @fopen($filename, "r");

    $tmpStart = 0;
    while( $lines && fseek($fp, $offset, SEEK_END) >= 0 ) {
        
        $c = fgetc($fp);
        if($c == "\n" || $c == "\r"){
            if(++$tmpStart >= $start)
                $lines--;
        }
	        if($tmpStart >= $start)
	            $read .= $c;
	        $offset--;
	}
	
	$read = trim($read);

    $read = array_reverse(explode("\n",strrev($read)));
	foreach($read as $key => $value) {
    	if (empty($value)) {
    	    unset($read[$key]);
    	}
	}
	return $read;
}

$value = read_backward_line("./data.txt", 1, 100);

foreach($value as $v){ 
    echo $v.'<br />';
}
?>