import {
	type DocumentProps,
	Head,
	Html,
	Main,
	NextScript,
} from "next/document";

export default function Document(props: DocumentProps) {
	return (
		<Html lang="ja">
			<Head>
				<title>MH Gallery</title>
				<meta name="description" content="MH Gallery" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
					integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
					crossOrigin="anonymous"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
