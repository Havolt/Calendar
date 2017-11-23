
let d = new Date();


const monthListArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayListArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
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
    changeDate(currYear, currMonth)
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
    changeDate(currYear, currMonth)
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
    dayLisName.innerHTML = dayListArr[i];

    dayLis.appendChild(dayLisName);
  }

  const dateLis = document.createElement('div');
  dateLis.id = "dateList";
  app.appendChild(dateLis);
  for(var i = 0; i < colVal; i++){
    for(var j = 0; j < rowVal; j++){
      const dateLisTile = document.createElement('div');
      dateLisTile.id = i+ ''+ j;
      dateLisTile.classList = 'tile';
      dateLis.appendChild(dateLisTile);
    }
  }
}

function changeMonth(mon, year){

  monthDisp.innerHTML = monthListArr[mon];
  monthDisp.innerHTML += ' ' + (year + 1900);
}

function changeDate(year, month){
  cD.setFullYear(year + 1900, month, 1);
  let dateCheck = 2;
  const startPos = cD.getDay();

  console.log(startPos + ' startPos')

  while(cD.getMonth() == month && dateCheck < 32){
    dateCheck++;
    cD.setDate(dateCheck);
  }
  dateCheck--;

  for(var i = 0; i < dateCheck; i++){

  }

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
