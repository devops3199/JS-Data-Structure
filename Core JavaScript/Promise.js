async function init() {
  console.log("1");
  new Promise((resolve) => {
    console.log("constructor");
  });
  console.log("2");
}

init();

// Output
// 1
// constructor
// 2
