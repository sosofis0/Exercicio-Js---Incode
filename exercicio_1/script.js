const value = document.getElementById('value');
const plus = document.getElementById('plus');

const updateValue = ()=>{
    value.innerHTML = count
}

let count = 0;
let intervalId = 0;
plus.addEventListener('mousedown',()=>{
    intervalId = setInterval(()=>{
      count += 1;
      updateValue(); 
    },100);
    plus.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});

plus.addEventListener('mouseleave', () => {
    clearInterval(intervalId);
});
});