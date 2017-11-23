
let d = new Date();


const monthListArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const colVal = 6;
const rowVal = 7;
const app = document.getElementById('app');
let calHead;
let monthDisp;
let monthMore;
let monthLess;
let dateList;




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
  monthMinus.addEventListener('click', function(){
    if(currMonth == 0){
      currMonth = 11;
      currYear--;
    }
    else{currMonth--;}
    changeMonth(currMonth, currYear);
  });
  calHeader.appendChild(monthMinus);
  const monthPlus = document.createElement('button');
  monthPlus.id = 'monthMore';
  monthPlus.innerHTML = '&#8594'
  monthPlus.addEventListener('click', function(){
    if(currMonth == 11){
      currMonth = 0;
      currYear++;
    }
    else{currMonth++;}
    changeMonth(currMonth, currYear);
  })
  calHeader.appendChild(monthPlus);
  createGrid();
}

function createGrid(){
  const dayLis = document.createElement('div');
  dayLis.id = "dayList";
  app.appendChild(dayLis);
  for(var i = 0; i < 7; i++){
    const dayLisName = document.createElement('div');
    dayLisName.classList = 'nameTile tile';
    if(i == 0){dayLisName.innerHTML = 'Mo'}
    else if(i == 1){dayLisName.innerHTML = 'Tu'}
    else if(i == 2){dayLisName.innerHTML = 'We'}
    else if(i == 3){dayLisName.innerHTML = 'Th'}
    else if(i == 4){dayLisName.innerHTML = 'Fr'}
    else if(i == 5){dayLisName.innerHTML = 'Sa'}
    else if(i == 6){dayLisName.innerHTML = 'Su'}
    dayLis.appendChild(dayLisName);
  }

  const dateLis = document.createElement('div');
  dateLis.id = "dateList";
  app.appendChild(dateLis);
  for(var i = 0; i < rowVal; i++){
    for(var j = 0; j < colVal; j++){
      const dateLisTile = document.createElement('div');
      dateLisTile.id = i+j;
      dateLisTile.classList = 'tile';
      dateLis.appendChild(dateLisTile);
    }
  }
}

function changeMonth(mon, year){

  monthDisp.innerHTML = monthListArr[mon];
  monthDisp.innerHTML += ' ' + (year + 1900);
  }




function assigners(){
  calHead = document.getElementById('calHead');
  monthDisp = document.getElementById('monthDisp');
  monthMore = document.getElementById('monthMore');
  monthLess = document.getElementById('monthLess');
  dateList = document.getElementById('dateList');
}



(function init(){
  createGeneral();
  assigners();
  changeMonth(d.getMonth(), d.getYear());
})()
