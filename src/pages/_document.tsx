import { DocumentHeadTags, type DocumentHeadTagsProps } from '@mui/material-nextjs/v13-pagesRouter';
import {  type DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default function Document(props:DocumentProps & DocumentHeadTagsProps) {
	return (
		<Html lang="ja">
			<Head>
				<title>MH Gallery</title>
				<meta name="description" content="MH Gallery" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<DocumentHeadTags {...props}/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
