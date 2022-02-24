console.log("hello from script");

window.localStorage.setItem("some", "test");

localStorage.setItem("some1", "test1");

if (window.parent) {
  debugger;
  if (/thirdparty=yes/.test(document.cookie)) {
    window.parent.postMessage("MM:3PCsupported", "*");
    document.getElementById("result").innerHTML = "supported";
  } else {
    window.parent.postMessage("MM:3PCunsupported", "*");
    document.getElementById("result").innerHTML = "not supported";
  }
}
