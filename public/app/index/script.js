// script.js
const testBtn = document.getElementById('testBtn');
const testInput = document.getElementById('test');

const test = () => {
  let testVal = testInput.value;
  console.log(`testVal: ${testVal}`);
};

testBtn.addEventListener('click',test);
