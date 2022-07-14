
// Default onload

var theme = 3;
var cssVariant = "";

function ThemeSwitch(){
  switch(theme) {
    case 1:   
      cssVariant = './css/theme02.css';
      theme = 2;
      moveSwitch(24);                     // switch position --> center -- [ 0  1  0 ]
      break;
    case 2:
      cssVariant = './css/theme03.css';
      theme = 3;
      moveSwitch(44);                     // switch position --> end    -- [ 0  0  1 ]
      break;
    case 3:
      cssVariant = './css/theme01.css';
      theme = 1;
      moveSwitch(4);                      // switch position --> start  -- [ 1  0  0 ]
      break;
  }
    var link = document.createElement('link');
      link.href = cssVariant;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      document.body.appendChild(link);
}

function moveSwitch(x){
  document.documentElement.style.setProperty('--sliderPosition', x + 'px');
}