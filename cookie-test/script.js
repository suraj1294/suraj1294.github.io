console.log("hello from script");

if (typeof window.localStorage === "undefined") {
  console.log("Please verify cookie settings");
} else {
  localStorage.setItem("some1", "test1");
}
