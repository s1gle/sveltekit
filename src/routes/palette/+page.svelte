<!-- src/routes/+page.svelte -->
<script>
    const colorNames = [
      'DarkRed', 'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed',
      'PaleVioletRed', 'Coral', 'Tomato', 'OrangeRed', 'DarkOrange', 'Orange',
      'Gold', 'Yellow', 'LightYellow', 'LemonChiffon', 'LightGoldenrodYellow',
      'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Khaki', 'DarkKhaki',
      'Lavender', 'Thistle', 'Plum', 'Violet', 'Orchid', 'Fuchsia', 'Magenta',
      'MediumOrchid', 'MediumPurple', 'RebeccaPurple', 'BlueViolet', 'DarkViolet',
      'DarkOrchid', 'DarkMagenta', 'Purple', 'Indigo', 'SlateBlue', 'DarkSlateBlue',
      'MediumSlateBlue', 'GreenYellow', 'Chartreuse', 'LawnGreen', 'Lime', 'LimeGreen',
      'PaleGreen', 'LightGreen', 'MediumSpringGreen', 'SpringGreen', 'MediumSeaGreen',
      'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'YellowGreen', 'OliveDrab',
      'Olive', 'DarkOliveGreen', 'MediumAquamarine', 'DarkSeaGreen', 'LightSeaGreen',
      'DarkCyan', 'Teal', 'Aqua', 'Cyan', 'LightCyan', 'PaleTurquoise', 'Aquamarine',
      'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'CadetBlue', 'SteelBlue',
      'LightSteelBlue', 'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
      'DeepSkyBlue', 'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'Blue', 'MediumBlue',
      'DarkBlue', 'Navy', 'MidnightBlue', 'Cornsilk', 'BlanchedAlmond', 'Bisque',
      'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan', 'RosyBrown', 'SandyBrown', 'Goldenrod',
      'DarkGoldenrod', 'Peru', 'Chocolate', 'SaddleBrown', 'Sienna', 'Brown', 'Maroon',
      'White', 'Snow', 'HoneyDew', 'MintCream', 'Azure', 'AliceBlue', 'GhostWhite',
      'WhiteSmoke', 'SeaShell', 'Beige', 'OldLace', 'FloralWhite', 'Ivory',
      'AntiqueWhite', 'Linen', 'LavenderBlush', 'MistyRose', 'Gainsboro', 'LightGray',
      'Silver', 'DarkGray', 'Gray', 'DimGray', 'LightSlateGray', 'SlateGray',
      'DarkSlateGray', 'Black'
    ];
  
    // Функция для случайного выбора цвета
    const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * colorNames.length);
      return colorNames[randomIndex];
    };
  
    // Переменная для хранения текущего цвета
    let randomColor = getRandomColor();
  
    // Функция для обновления цвета каждые 7 секунд
    setInterval(() => {
      randomColor = getRandomColor();
    }, 7000); // 7 секунд
  </script>
  
  <div class="container">
    <span 
      class="color-text"
      style="color: {randomColor}"
    >
      {randomColor}
    </span>
  </div>
  
  <style>
    .container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; /* Занимает всю высоту экрана */
      background-color: inherit; /* Фон страницы */
    }
  
    .color-text {
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
      transition: color 2.5s ease; /* Плавное изменение цвета */
    }
  </style>