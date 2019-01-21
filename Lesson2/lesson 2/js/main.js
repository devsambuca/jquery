/* Взаимодействия с элементами */

$('h2, p') // Первый, второй, третий и т.д.
$('h2 span') // outer и inner 
$('.container > span').css('font-size', '27px'); // parent > child 
$('h2 + p') // prev + next 
$('h2 ~ p').css('border', '2px solid #000'); // prev ~ next 	