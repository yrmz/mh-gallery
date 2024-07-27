import { Container, Image, Stack } from "react-bootstrap";

export default function Home() {
	return (
		<Container fluid>
			<Stack
				gap={2}
				style={{
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div style={{ marginTop: 20 }}>
					<Image fluid src="./logo/logo_rectangle.jpg" alt="HM Gallery" />
				</div>
				<div>
					<h2
						style={{
							textAlign: "center",
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							paddingBottom: "10px",
							borderBottom: "2px solid #000",
						}}
					>
						About Us
					</h2>
					<Stack style={{ marginTop: "10px" }}>
						<div>住所：東京都渋谷区恵比寿3-46-7-801</div>
						<div>設立：2024年7月2日</div>
						<div>
							<Stack direction="horizontal" style={{ alignItems: "start" }}>
								<div>事業内容：</div>
								<div
									style={{ display: "inline-block", whiteSpace: "pre-wrap" }}
								>
									デパート等の小売店への卸し・商品委託業務
									<br />
									美術品(絵画・彫刻)の販売 <br />
									美術品(版画作品)の制作委託業務
								</div>
							</Stack>
						</div>
						<div>代表者：代表取締役 鎗水萌</div>
						<div>Tel：03-6356-8811</div>
					</Stack>
				</div>
			</Stack>
		</Container>
	);
}
