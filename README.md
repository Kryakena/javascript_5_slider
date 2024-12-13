# 🖼 Слайдер 🖼

Источник:
видео от "Уроки по JavaScript. Делаем слайдер изображений на Джаваскрипт" https://vkvideo.ru/video-101965347_456257147?sel=19460369

## Алгоритм работы:

1. Создать нужные файлы

- создаем HTML (index.html), CSS (Slider_CSS.css), JS (Slider_JS.js) документ в программе "WebStorm" для работы с JavaScript (скачать бесплатную версию [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/));
- добавляем 4 фото с размерами 1280*720px;
- в файле index.html:

  - меняем название в строке title в разделе head - Слайдер
    
    ```html
    <title>Слайдер</title>
    ```
      
  - подцепляем стиль из CSS файла в разделе head
  
    ```html
    <link rel="stylesheet" href="Slider_CSS.css">
    ```
  
  - подцепляем скрипт из JS файла в разделе body
    ```html
    <script src="Slider_JS.js"></script>
    ```

2. Создать контейнер со списком изображений

- создаем контейнер в файле index.html в разделе body:

```html
<div id="carousel" class="carousel"></div>
```

- внутри данного контейнера в файле index.html в разделе body создаем 2 кнопки "вперед" и "назад"

```html
<button class="arrow prev"> < </button>
<button class="arrow next"> > </button>
```

- чтобы вид стрелок был симпатичный, берем с сайта с символами юникод (пример: https://symbl.cc/ru) символы стрелок и вставляем в кнопки в файле index.html в разделе body
  ![2024-12-13_16-11-08](https://github.com/user-attachments/assets/46bd3288-8091-4da4-9570-93322677b3f4)

```html
<button class="arrow prev">⯇</button>
<button class="arrow next">⯈</button>
```

- внутри контейнера с кнопками в файле index.html в разделе body создаем еще 1 контейнер со списком изображений. Изображения для удобства помещаем в папку "images"

```html
<div class="gallery">
  <ul class="images">
    <li><img src="images/1.jpg"></li>
    <li><img src="images/2.jpg"></li>
    <li><img src="images/3.jpg"></li>
    <li><img src="images/4.jpg"></li>
  </ul>
</div>
```

- в файле Slider_JS.js задаем нужную ширину и количество (счётчик) изображений, которые будут изначально выводится в нашей галерее

```JS
var width = 1280; //ширина изображения
var count = 1; //изначально будет видна только 1 картинка
```

- сослаться на всю нашу карусель в файле Slider_JS.js

```JS
var carousel = document.getElementById('carousel');
```

- создать список изображений в файле Slider_JS.js, чтобы использовать в JS как 1 переменную.
  Выбираем для этого переменную guerySelector, т.к. он возвращает соответствующий списку в HTML изображение.

```JS
var list = carousel.guerySelector('ul'); 
//т.к. мы знаем, что у нас 1 ul список в HTML
var listElements = carousel.querySelectorAll('li'); 
//т.к. мы знаем, что у нас несколько изображений в списке li
```

- определить изначальную позицию наших картинок. Изначально она нулевая.

```JS
var position = 0;
```

3. Сдвигаем список

- чтобы найти все элементы за тэгом внутри элемента, используют метод getElementsByTagName

```JS
var list = document.getElementsByTagName('li');
```
