console.log("hello from script");

function lsTest(value) {
  try {
    localStorage.setItem("sample", value);
    return true;
  } catch (e) {
    return false;
  }
}

if (!lsTest("test")) {
  console.log("Please verify cookie settings");
}
