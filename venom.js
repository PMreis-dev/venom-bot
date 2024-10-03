const venom = require('venom-bot');

venom
	.create(
		'session',
		(base64Qrimg, asciiQR, attempts) => {},
		(statusSession, session) => {},
		{ useChrome: false, browserArgs: ['--no-sandbox'] }
	)
	.then((client) => start(client));

function start(client) {
	client.onMessage((message) => {
		console.log(message);
	});
}
