# React calculator
calculator - react / redux / js  
colors - [www.frontendmentor.io](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29)


<img src="https://github.com/VoltG3/react_calculator/blob/master/doc/Screenshot00.png" alt="img">

> description description description  
description description description  
description description description  
description description description  
description description description


### EXSEMPEL - how to create/config React project
---

### Create empty app in linux terminall
```
$ yarn create react-app react-calculator
```
### IntelliJ IDEA - Run/Debug Configurations

- add new configuration
- npm
- allow paralell run
- command: start
- package manager: npm /usr/bin/npm

### Runs the app
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Dependencies
---
```
$ yarn add styled-components
$ yarn add react-use-global
$ yarn add react-redux
$ yarn add redux
$ yarn add redux-resource
```
### Tips
---
For a better overview of the changes in the commit's use:
```
$ gitk
```

#### Excluded inputs so far
```
-> 00
-> 01
-> 0..
-> +-
```

#### Calculators are not finished, the calculation logic can be viewed(terminall):
```
/vanillaJS_calcualtor/doc/calc_algebra.html 
/vanillaJS_calculator/doc/calc_brackets.html
```

#### Vanilla JavaScript color theme switch exempel:
```
/vanillaJS_calcualtor/doc/calc_theme_switch.html 
```

#### Algebra
```
first divide / multiple
second add / substract

find first counter and denominator & calc
before - [10, "+", 20, "*", 3, "-", 18, "/", 2, "+", 17, "*", 2]
next --- [20, "*", 3,]

before - [10, "+", 60, "-", 18, "/", 2, "+", 17, "*", 2]
next --- [18, "/", 2]

before - [10, "+", 60, "-", 9, "+", 17, "*", 2]
next --- [17, "*", 2]

before - [10, "+", 60, "-", 9, "+", 34]
next --- [10, "+", 60]

before - [70, "-", 9, "+", 34]
next --- [70, "-", 9]

before - [61, "+", 34]
next --- [95]
```

#### Brackets
```
brackets - ( # ( # ) # ( # ) # )
before --- [1, "(", 0.1, "(", 2,  3, ")", 40, 50, "(", 6, 7, ")", 0.5, ")", 1]
next ----- --------------|_____________| 

brackets - ( # ( # ) # )
before --- [1, "(", 0.1, #, 40, 50, "(", 6, 7, ")", 0.5, ")", 1]
next ----- -------------------------|____________|

brackets - ( # )
before --- [1, "(", 0.1, #, 40, 50, #, 0.5, ")", 1]
next ----- ----|______________________________|

finixh - [1, #, 1]
```
