import fs from "fs";
(function lib() {
  const first = () => {
    setTimeout(() => {
      console.trace("SK@i am setTimeout");
    }, 10);
    process.nextTick(() => {
      console.trace("SK@Iam NextTick");
    });
    setImmediate(() => {
      console.trace("SK@Immediate");
    });

    console.log("SK@I am First");
    second();
  };
  const second = () => {
    console.log("SK@Second");
    Third();
  };
  const Third = () => {
    console.log("SK@Third");
    setTimeout(() => {
      console.log("SK@Timer2");
    }, 0);
  };

  first();
  //   fs.readFile("./random.txt", first);
})();
