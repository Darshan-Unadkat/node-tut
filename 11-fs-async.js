const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", (err, res2) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res2;
    writeFile(
      "./content/result-a.txt",
      `Here's the result: ${first}, ${second}`,
      (err, res3) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(res3);
      }
    );
  });
});
