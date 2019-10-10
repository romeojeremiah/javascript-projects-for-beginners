//Set date to countdown to:
let countDownFromDate = new Date('Feb 1, 2020 12:00:00').toDateString();
let countDownDate = new Date('Feb 1, 2020 12:00:00').getTime();
let x = setInterval(function(){
let now = new Date().getTime();
//get distance between current date to countdown date
let distance = countDownDate - now;
//get days, hours, minutes, and seconds
let days = Math.floor(distance / (1000 * 60 *60 * 24));
let hours = Math.floor((distance % (1000 * 60 *60*24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60))/ (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//output countdown from date
document.getElementById('countdown-from').innerHTML = `${countDownFromDate}`
//output timer to HTML
document.getElementById('root').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

//stop countdown timer when date is reached
if (distance < 0){
    clearInterval(x);
    document.getElementById('root').innerHTML = 'Timer Expired';
}

}, 1000);
