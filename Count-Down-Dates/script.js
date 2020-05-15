const timerText = document.querySelector('.timer-text');


dateVar = 15;



const dayDivisor = 1000*60*60*24;
const hrsDivisor = 1000*60*60;
const minsDivisor = 1000*60;


setInterval(()=>{

     let targetDate= new Date(`May ${dateVar}, 2020 14:48:00`)
     let today = new Date();

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
     console.log(mins)

     if(secs <= 0){
          dateVar ++;
     }
}, 1000);
