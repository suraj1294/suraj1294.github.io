console.log("hello from script");

if (typeof window === "undefined") {
  console.log("Please verify cookie settings");
} else {
  localStorage.setItem("some1", "test1");
}
