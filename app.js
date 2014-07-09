var prompt = require('sync-prompt').prompt;
var date = prompt('What is your first name (mm/dd/yyyy)? ');
console.log(date);
date = new Date(date);
console.log('day =', date.getDate());
console.log('month =', date.getMonth());
console.log('year =',date.getFullYear());
var today = new Date();
var month =parseInt(date.getMonth())+1; 
var day =parseInt(date.getDate()); 
console.log(month)
//Age in years.
AgeSec = today.getTime()-date.getTime();
AgeYears = AgeSec/31536000000;
console.log('Your Age in Years Is',AgeYears.toFixed(1));



//Astrological Sign
if (month === 1 && day <= 20){
  console.log('Your sign is Capricorn!');
}else if (month ===12 && day>21){
  console.log('Your sign is Capricorn');

}else if (month ===1 && day>20){
  console.log('Your sign is Aquarius');
}else if (month ===2 && day<19){
  console.log('Your sign is Aquarius');

}else if (month ===2 && day>20){
  console.log('Your sign is Pisces');
}else if (month ===3 && day<20){
  console.log('Your sign is Pisces');

}else if (month ===3 && day>21){
  console.log('Your sign is Aries');
}else if (month ===4 && day<20){
  console.log('Your sign is Aries');

}else if (month ===4 && day>20){
  console.log('Your sign is Taurus');
}else if (month ===5 && day<21){
  console.log('Your sign is Taurus');

}else if (month ===5 && day>21){
  console.log('Your sign is Gemini');
}else if (month ===6 && day>22){
  console.log('Your sign is Gemini');

}else if (month ===6 && day>22){
  console.log('Your sign is Cancer');
}else if (month ===7 && day>23){
  console.log('Your sign is Cancer');

}else if (month ===7 && day>22){
  console.log('Your sign is Leo');
}else if (month ===8 && day<23){
  console.log('Your sign is Leo');

}else if (month ===8 && day>=23){
  console.log('Your sign is Virgo');
}else if (month ===9 && day<=23){
  console.log('Your sign is Virgo');

}else if (month ===9 && day>24){
  console.log('Your sign is Libra');
}else if (month ===10 && day<=23){
  console.log('Your sign is Libra');

}else if (month ===10 && day>=24){
  console.log('Your sign is Scorpio');
}else if (month ===11 && day<=22){
  console.log('Your sign is Scorpio');

}else if (month ===11 && day>=21){
  console.log('Your sign is Sagittarius');
}else if (month ===12 && day>=21){
  console.log('Your sign is Sagittarius');
  }else {
  console.log('Your input was not valid, try restarting the program.');
}

