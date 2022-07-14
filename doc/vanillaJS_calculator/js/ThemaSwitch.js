
let theme = 3;
let cssVariant = "";

function ThemeSwitch(){
    switch(theme) {
        case 1:
            cssVariant = './ThemaColorRoot01.js';
            theme = 2;
            //moveSwitch(24);                     // switch position --> center -- [ 0  1  0 ]
            break;
        case 2:
            cssVariant = './ThemaColorRoot01.js';
            theme = 3;
            //moveSwitch(44);                     // switch position --> end    -- [ 0  0  1 ]
            break;
        case 3:
            cssVariant = './ThemaColorRoot01.js';
            theme = 1;
            //moveSwitch(4);                      // switch position --> start  -- [ 1  0  0 ]
            break;
    }
    let link = document.createElement('link');
        link.href = cssVariant;
        link.rel = 'stylesheet';
        link.type = 'text/css';
    document.body.appendChild(link);
}
