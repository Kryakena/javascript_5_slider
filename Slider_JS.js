var list = document.getElementsByTagName('li');
for (var i = 0; i < list.length; i++) {
    //list.length - длина списка.
    //i++ - когда цикл мы прошли, дается команда пройти его ещё раз, если список не закончился
    lis[i].style.position = 'relative';
    //lis[i] - элемент списка
    //relative - расположение нашего элемента относительно исходного изначального места
    var span = document.createElement('span');
    //span - промежуток
    span.style.cssText = 'position:absolute; left:0; top:0';
    //делаем промежуток в виде текста, чтобы его потом незаметно спрятать и чтобы картинки не уехали в сторону
    span.innerHTML = 1;
    //промежуток между картинками делаем как 1 строчку
    lis[i].appendChild(span);
    //куда вставлять данный элемент
}


var width = 1280; //ширина изображения
var count = 1; //изначально будет видна только 1 картинка

var carousel = document.getElementById('carousel');
var list = carousel.guerySelector('ul');
//т.к. мы знаем, что у нас 1 ul список в HTML
var listElements = carousel.querySelectorAll('li');
//т.к. мы знаем, что у нас несколько изображений в списке (li)

var position = 0;

carousel.querySelector('.prev').onclick = function() {
    //смещаем картинки влево с помощью математики
    position = Math.min(position + width * count, 0);
    list.style.marginLeft = position + 'px';
}

carousel.querySelector('.next').onclick = function() {
    position = Math.max(position - width * count, -width * (listElements.length - count));
    list.style.marginLeft = position + 'px';
}