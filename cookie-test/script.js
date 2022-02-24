console.log("hello from script");

if (
  typeof window === "undefined" ||
  typeof window.localStorage === "undefined"
) {
  console.log("Please verify cookie settings");
} else {
  localStorage.setItem("some1", "test1");
}

function createTable(rows, cols) {
  var j = 1;
  var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
  for (i = 1; i <= rows; i++) {
    output = output + "<tr>";
    while (j <= cols) {
      output = output + "<td>" + i * j + "</td>";
      j = j + 1;
    }
    output = output + "</tr>";
    j = 1;
  }
}
