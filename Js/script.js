// let minus    = document.querySelector('.minus')
// let num      = document.querySelector('.num')
// let Plus     = document.querySelector('.Plus')
// let i        = 0
// 
// 
// Plus.addEventListener( 'click' , ()=>{
    // i++
    // num.innerHTML = i
// })
// 
// minus.addEventListener('click' , ()=>{
    // i--
    // num.innerHTML = i
// })
// 
// 
// minus.addEventListener('click' , ()=>{
    // if( i === 0){ alert('Are you stupid or something ?');
// 
    // } else {
    // i-- ;
    // num.innerHTML = i ;}
// })
// 
// 

// 




// code from chatGPT































let minus = document.querySelector('.minus');
let num = document.querySelector('.num');
let Plus = document.querySelector('.Plus');
let i = 1;

Plus.addEventListener('click', () => {
    i++;
    num.innerHTML = i;
});

minus.addEventListener('click', () => {
    if (i === 1) {
        alert('Are you stupid or something?');
    } else {
        i--;
        num.innerHTML = i;
    }
});










































































