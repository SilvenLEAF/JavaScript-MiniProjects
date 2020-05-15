const timerText = document.querySelector('.timer-text');



const dayDivisor = 1000*60*60*24;
const hrsDivisor = 1000*60*60;
const minsDivisor = 1000*60;

setInterval(()=>{

     let today = new Date();
     let dateVar = today.getDate();
     let monthVar = today.getMonth();
     let month = '';

     switch (monthVar) {
          case 0:
          month = 'January';
               break;

          case 1:
          month = 'February';
               break;

          case 2:
          month = 'March';
               break;

          case 3:
          month = 'April';
               break;

          case 4:
          month = 'May';
               break;

          case 5:
          month = 'June';
               break;

          case 6:
          month = 'July';
               break;

          case 7:
          month = 'August';
               break;

          case 8:
          month = 'September';
               break;

          case 9:
          month = 'November';
               break;

          case 10:
          month = 'November';
               break;

          case 11:
          month = 'December';
               break;

          case 5:
          month = 'June';
               break;

     }


     let targetDate= new Date(`${month} ${dateVar}, 2020 23:59:59`)

     let diff = targetDate.getTime() - today.getTime();


     let daysRem = diff%dayDivisor;
     let hrsRem = daysRem% hrsDivisor;
     let minsRem = hrsRem%minsDivisor;


     let days = Math.floor(diff/dayDivisor);
     let hrs = Math.floor(daysRem/hrsDivisor);
     let mins = Math.floor((hrsRem%hrsDivisor)/minsDivisor);
     let secs = Math.floor((minsRem%hrsDivisor)/1000);

     days = (days<10) ? `0${days}` : days;
     hrs = (hrs<10) ? `0${hrs}` : hrs;
     secs = (secs<10) ? `0${secs}` : secs;

     timerText.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;

}, 1000);
