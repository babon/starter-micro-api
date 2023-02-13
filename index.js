var http = require('http');

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
};

http.createServer(function (req, res) 
{
    console.log("yo");
    //let r = await fetchJSON("https://api.ipify.org?format=json");
    console.log("yoo");
    //console.log(r);
    
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
