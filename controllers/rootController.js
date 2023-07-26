exports.getServer = (req, res) =>
	res
		.status(200)
		.send(
			"<h1>Hey Namaskaram🙏!</h1><h2>Server is ready to work. Let's roll!</h2>"
		);
