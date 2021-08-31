console.log("hello from script")

if (window.parent) {
    debugger;
	if (/thirdparty=yes/.test(document.cookie)) {
		window.parent.postMessage('MM:3PCsupported', '*');
        window.parent.localStorage.setItem('MM:3PCsupported', "yes")
	} else {
		window.parent.postMessage('MM:3PCunsupported', '*');
	}
 }