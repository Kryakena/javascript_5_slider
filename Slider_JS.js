var list = document.getElementsByTagName('li');

var width = 1280; //ширина изображения
var count = 1; //изначально будет видна только 1 картинка

var carousel = document.getElementById('carousel');
var list = carousel.guerySelector('ul');
//т.к. мы знаем, что у нас 1 ul список в HTML
var listElements = carousel.querySelectorAll('li');
//т.к. мы знаем, что у нас несколько изображений в списке (li)

var position = 0;