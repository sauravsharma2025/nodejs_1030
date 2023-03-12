(async function AbortFetchRequest() {
  try {
    const responses = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
      signal: AbortSignal.timeout(3000),
    });
    const json = await responses.json();
    console.log("SK@", json);
  } catch (err) {
    console.log("SK@", err);
  }
})();
