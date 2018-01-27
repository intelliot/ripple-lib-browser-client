const RippleAPI = require('ripple-lib').RippleAPI;

let api = new RippleAPI({
  server: 'wss://s1.ripple.com:443'
});

api.connect().then(() => {
  api.getServerInfo().then(info => {
  	document.body.innerHTML = JSON.stringify(info);
  	api.disconnect();
  });
});
