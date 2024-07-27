import { Layout } from "@/components/layout";
import { AppCacheProvider } from "@mui/material-nextjs/v13-pagesRouter";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AppCacheProvider {...pageProps}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AppCacheProvider>
	);
}
