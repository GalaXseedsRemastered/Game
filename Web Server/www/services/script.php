<?php
switch($_GET["Service"])
{
	case 'ParseDataBinding':
		$result = '1~2~3~1~2~3~1~2~3~1~2~3~1~2~3~4~1~2';
	break;
	default:
		$result = '1~2~3~4~5~6~7~8~3~11~12~13~14~15~16~17~18~19~20~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1~1';
	break;
}
?>
Success=true&Service=<?php echo $_GET["Service"] ?>&Result=<?php echo $result ?>&