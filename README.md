# Слайдер

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

- внутри данного контейнера в разделе body создаем 2 кнопки "вперед" и "назад"

```html
<button class="arrow prev"> < </button>
<button class="arrow next"> > </button>
```

- чтобы вид стрелок был симпатичный, берем с сайта с символами юникод (пример: https://symbl.cc/ru/unicode-table/#arrows) символы стрелок


3. Сдвигаем список