import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
	return (
		<Container fixed>
			<Stack marginY={3}>
				<Typography
					variant="h4"
					textAlign="center"
					sx={{
						fontFamily: "monospace",
						fontWeight: 700,
						letterSpacing: ".3rem",
					}}
				>
					HM Gallery
				</Typography>
			</Stack>
			<Stack>jpge</Stack>
		</Container>
	);
}
