// set date
let count = new Date("June 7, 2024 00:00:00").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = count - now;

        document.getElementById('days').innerHTML = '0';
        document.getElementById('hours').innerHTML = '0';
        document.getElementById('minutes').innerHTML = '0';
        document.getElementById('seconds').innerHTML = '0';

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

}, 500);
// input checker
let Name = document.getElementById('name');
let num = document.getElementById('num');
let email = document.getElementById('mail');
let btn = document.getElementById('checkBtn');
let message=document.getElementById('message');

btn.addEventListener('click', function() {
    if (Name.value === '' && num.value === '' && email.value === '' && message.value==='') {
        alert("Inputs required");
        Name.classList.add('redInput');
        num.classList.add('redInput');
        email.classList.add('redInput');
        message.classList.add('redInput');    
    }
});
