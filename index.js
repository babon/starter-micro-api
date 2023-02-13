
async function fetchJSON (url, options) {
  let f = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });
  let t = await f.text();
  try {
    return JSON.parse(t);
  } catch (e) {
    throw new e.constructor(`${e.message} in ${url}\n\n"${t}"`);
  }
}

await fetchJSON("https://api.ipify.org?format=json");
console.log(r);
