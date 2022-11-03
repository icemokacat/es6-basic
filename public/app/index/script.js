// script.js
const testBtn = document.getElementById('testBtn');
const testInput = document.getElementById('test');

const test400Btn = document.getElementById('test400Btn');
const test400Input = document.getElementById('test400');

const testArea = document.getElementById('testArea');

const apiSever  = 'http://localhost:3000';
const apiPrefix = '/api';

const testLog = (msg) => {
  testArea.innerText = msg;
}

const httpRequest = async (method, url, data, callBack) => {

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method === 'POST') {
    options.body = JSON.stringify(data);
  }else{
    url += '?test='+data.test;
  }

  const response = await fetch(url, options);
  if(response.ok){
    const result = await response.json();
    callBack(result);
  }else{
    const result = await response.json();
    httpErrorHandling(result);
  }
};

const httpErrorHandling = (result) => {
  console.log(result)
  let str = JSON.stringify(result);
  testLog('실패');
  testLog(str);
};

const isNumberic = (str) => {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const testAPI = (testStatus) => {
  const url = apiSever + apiPrefix + '/test/'+testStatus;
  const data = {
    test: testInput.value,
  };
  if(isNumberic(testStatus)){
    httpRequest('GET', url, data, (result) => {
      let str = JSON.stringify(result);
      testLog('성공');
      testLog(str);
    });
  }else{
    alert('숫자를 입력하세요');
  }
}

const test = () => {
  let testVal = testInput.value;
  console.log(`testVal: ${testVal}`);
  testAPI(testVal);
};

const test400F = () => {
  let testVal = test400Input.value;
  console.log(`testVal: ${testVal}`);
  testAPI(testVal);
}

testBtn.addEventListener('click',test);
test400Btn.addEventListener('click',test400F);
