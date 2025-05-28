export default {
	async fetch(request): Promise<Response> {
		const html = `<!DOCTYPE html>
		<body>
		  <h1>Este sitio web se encuentra en construcción.</h1>
		  <p>Pronto sabrás sobre nosotros.</p>
		</body>`;

		return new Response(html, {
			headers: {
				"content-type": "text/html;charset=UTF-8",
			},
		});
	},
} satisfies ExportedHandler;
