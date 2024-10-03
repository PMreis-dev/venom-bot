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
		if (message.body === 'Hi' && message.isGroupMsg === false) {
			client
				.sendText(message.from, 'Welcome Venom 🕷')
				.then((result) => {
					console.log('Result: ', result); //return object success
				})
				.catch((erro) => {
					console.error('Error when sending: ', erro); //return object error
				});
		}
	});
}
