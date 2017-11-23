
let d = new Date();

const colVal = 6;
const rowVal = 7;
const app = document.getElementById('app');

let currMonth = d.getMonth();
let currYear = d.getYear();
let currDate = d.getDate();

let monthRun = 0;
let cD = new Date();





function createGeneral(){
  const calHeader = document.createElement('div');
  calHeader.id = "calHead";
  app.appendChild(calHeader);
  const monthDis = document.createElement('h2');
  monthDis.id = 'monthDisp';
  calHeader.appendChild(monthDis);
  const monthMinus = document.createElement('button');
  monthMinus.id = 'monthLess';
  monthMinus.innerHTML = '&#8592';
  monthMinus.addEventListener('click', function(){console.log('test')});
  calHeader.appendChild(monthMinus);
  const monthPlus = document.createElement('button');
  monthPlus.id = 'monthMore';
  monthPlus.innerHTML = '&#8594'
  monthPlus.addEventListener('click', function(){console.log('test')})
  calHeader.appendChild(monthPlus)
}

function getMonth(mon, year){

  if(mon == 0){monthDisp.innerHTML = 'January';}
  else if(mon == 1){monthDisp.innerHTML = 'February';}
  else if(mon == 2){monthDisp.innerHTML = 'March';}
  else if(mon == 3){monthDisp.innerHTML = 'April';}
  else if(mon == 4){monthDisp.innerHTML = 'May';}
  else if(mon == 5){monthDisp.innerHTML = 'June';}
  else if(mon == 6){monthDisp.innerHTML = 'July';}
  else if(mon == 7){monthDisp.innerHTML = 'August';}
  else if(mon == 8){monthDisp.innerHTML = 'September';}
  else if(mon == 9){monthDisp.innerHTML = 'October';}
  else if(mon == 10){monthDisp.innerHTML = 'November';}
  else if(mon == 11){monthDisp.innerHTML = 'December';}
  monthDisp.innerHTML += ' ' + (year + 1900);
  }


function assigners(){
  const calHead = document.getElementById('calHead');
  const monthDisp = document.getElementById('monthDisp');
}

(function init(){
  createGeneral();
  assigners();
  getMonth(d.getMonth(), d.getYear());
})()
