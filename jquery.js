'use strict';
const target1 = document.querySelector('#typeTarget1');
const target2 = document.querySelector('#typeTarget2');
const count1 = document.querySelector('#countTarget1');
const count2 = document.querySelector('#countTarget2');
const result1 = document.querySelector('#typeResult1');
const result2 = document.querySelector('#typeResult2');
const foreign = document.querySelector('#foreign');
const domestic = document.querySelector('#domestic');

function checkOrigin(event) {
	const target = this.value;
	if (target === '국내산') {
		$('#foreignCountry').value = '';
	}
	$('#foreignCountry').toggleAttribute('disabled');
	console.log(target)
}

function handleOrigin() {
	$('input[name="origin"]').forEach((input) => {
		input.addEventListener('change', checkOrigin);
	});
}

function changeResult(length, count, result) {
	if (result === undefined || length === undefined) {
		count1.value = 0;
		count2.value = 0;
		result1.innerHTML = 0;
		result2.innerHTML = 0;
	} else {
		count.value = length;
		result.innerHTML = length;
	}
}

function handleType(target, count, result, event) {
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
		changeResult(length, count, result);
	});
}

/* 
function init() {
	handleOrigin();
	changeResult();
	handleType(target1, count1, result1);
	handleType(target2, count2, result2);
}

init();
 */
$('ducoument').ready(() => {
	handleOrigin();
});