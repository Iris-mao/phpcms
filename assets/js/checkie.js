// IE浏览器要求下载firefox
(function () {
	var ie = {};
	if (navigator.userAgent.indexOf('MSIE') > 0) {
		ie.isIE = true;
		var _version = navigator.userAgent.match(/MSIE (\w)\.0/);
		ie.version = parseInt(_version[1]);
	} else {
		ie.isIE = false;
	}
	if (ie.isIE && _version[1] <= 8) {
		window.location.href = '../../../../../assets/updatebrowser.html';
	}
})();