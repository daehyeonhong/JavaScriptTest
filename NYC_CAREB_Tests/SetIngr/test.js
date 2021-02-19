'use strict';
const target1 = document.querySelector('#typeTarget1');
const target2 = document.querySelector('#typeTarget2');
const result1 = document.querySelector('#typeResult1');
const result2 = document.querySelector('#typeResult2');
const orgin = document.querySelectorAll('input[name="origin"]');
const foreign = document.querySelector('#foreign');
const domestic = document.querySelector('#domestic');
const foreignCountry = document.querySelector('#foreignCountry');

function checkOrigin(event) {
  /* console.log(event.target.value); */
  console.log(this.id);
  console.log(this.value);
}

orgin.forEach((input) => {
  input.addEventListener('change', checkOrigin);
});

function changeResult(length, result) {
  if (result === undefined || length === undefined) {
    result1.innerHTML = 0;
    result2.innerHTML = 0;
  } else {
    result.innerHTML = length;
  }
}

function handleType(target, result, event) {
  target.addEventListener('change', () => {
    const text = target.value;
    console.log(text);
    const string = text.split('');
    let length = 0;
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (escape(char).length > 4) {
        length += 2;
      } else {
        length++;
      }
    }
    if (length > 20) {
      alert(`글자 수를 확인하세요 현재 글자 크기 ${length}`);
    }
    changeResult(length, result);
  });
}

function init() {
  changeResult();
  handleType(target1, result1);
  handleType(target2, result2);
}

init();