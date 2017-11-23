
let d = new Date();

const colVal = 6;
const rowVal = 7;
const app = document.getElementById('app');




function createGeneral(){
  const calHeader = document.createElement('div');
  calHeader.id = "calHead";
  app.appendChild(calHeader);
  const monthDis = document.createElement('h2');
  monthDis.id = 'monthDisp';
  calHeader.appendChild(monthDis);
}

function getMonth(){

}


function assigners(){
  const calHead = document.getElementById('calHead');
  const monthDisp = document.getElementById('monthDisp');
}

(function init(){
  createGeneral();
  assigners();
  getMonth();
})()
