console.log("hello from script")

if (window.parent) {
    debugger;
	if (/thirdparty=yes/.test(document.cookie)) {
		window.parent.postMessage('MM:3PCsupported', '*');
	} else {
        var myCustomData = { foo: 'bar' }
        var event1 = new CustomEvent('myEvent', { detail: myCustomData })
        window.parent.document.dispatchEvent(event1)
		window.parent.postMessage('MM:3PCunsupported', '*');
        
	}
	document.cookie = 'thirdparty=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
 }