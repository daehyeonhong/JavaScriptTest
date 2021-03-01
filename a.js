'use strict';

$.changeResult = (targetLength, result) => {
	result.html(targetLength);
}

$.countingText = (targetValue) => {
	let length = 0;
	for (let i = 0; i < targetValue.length; i++) {
		if (escape(targetValue.charAt(i)).length == 6) {
			length++;
		}
		length++;
	}
	return length;
}

$.handleType = (target, result) => {
	target.on('keyup', () => {
		const length = $.countingText(target.val());
		$.changeResult(length, result);
	});
}

$.checkOrigin = () => {
	if ($("input[name=origin]:checked").val() == '국내산') {
		$("#foreignCountry").attr("disabled", true);
		$('#foreignCountry').val('');
	} else {
		$("#foreignCountry").attr("disabled", false);
	}
}

$.handleOrigin = () => {
	$('input[name=origin]').click(() => {
		$.checkOrigin();
	});
}

$('ducoument').ready(() => {
	$.handleOrigin($());
	$.handleType($('#ingrNm'), $('#ingrNmLength'));
	$.handleType($('#ingrEtc'), $('#ingrEtcLength'));
});