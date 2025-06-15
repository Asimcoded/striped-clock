const fistHrsDigit = document.getElementById('fistHrsDigit');
const secondHrsDigit = document.getElementById('secondHrsDigit');
const fistMinDigit = document.getElementById('fistMinDigit');
const secondMinDigit = document.getElementById('secondMinDigit');
const fistSecDigit = document.getElementById('fistSecDigit');
const secondSecDigit = document.getElementById('secondSecDigit');
setInterval(() => {
    const time =  new Date();
    fistHrsDigit.style.transform = `translateY(${-70 * (Math.floor(time.getHours() / 10))}px)`
    secondHrsDigit.style.transform = `translateY(${-70 * (Math.floor(time.getHours() % 10))}px)`
    fistMinDigit.style.transform = `translateY(${-70 * (Math.floor(time.getMinutes() / 10))}px)`
    secondMinDigit.style.transform = `translateY(${-70 * (Math.floor(time.getMinutes() % 10))}px)`
    fistSecDigit.style.transform = `translateY(${-70 * (Math.floor(time.getSeconds() / 10))}px)`
    secondSecDigit.style.transform = `translateY(${-70 * (Math.floor(time.getSeconds() % 10))}px)`
}, 500);
