let warning_btn = document.querySelector('.warning');
	close_btn = document.querySelector('.warning-item-close-btn')

warning_btn.onclick = function () {
	document.querySelector('.warning-item').style.display = 'block';
}

close_btn.onclick = function () {
	document.querySelector('.warning-item').style.display = 'none';
}