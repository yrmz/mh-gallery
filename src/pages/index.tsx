import { SectionTitle } from "@/components/label";
import {
	Col,
	Container,
	Image,
	Nav,
	NavLink,
	Navbar,
	Row,
	Stack,
} from "react-bootstrap";

export default function Home() {
	return (
		<Container>
			<Stack style={{ alignItems: "center" }}>
				<header>
					<div style={{ maxWidth: 200 }}>
						<Image fluid src="./logo/logo_rectangle.jpg" alt="HM Gallery" />
					</div>
				</header>
				<Navbar expand="lg">
					<Nav className="me-auto" style={{ fontSize: "1.3rem" }}>
						<NavLink href="#home">Home</NavLink>
						<NavLink href="#about">About</NavLink>
						<NavLink href="#works">Art Works</NavLink>
						<NavLink href="#contact">Contact</NavLink>
					</Nav>
				</Navbar>
			</Stack>
			<Stack gap={5}>
				<section id="home">
					<SectionTitle>Welcome to HM Gallery</SectionTitle>
					<p>
						MH Galleryのキュレーションによるアート作品をご覧ください。
						<br />
						MHギャラリーのコレクションは、あなたをインスパイアし、
						<br />
						魅了する素晴らしい作品ばかりです。
						<br />
					</p>
				</section>
				<section id="about">
					<SectionTitle>About Us</SectionTitle>
					<p>
						MH Galleryは、優れたアートの普及と販売に専念しています。
						<br />
						私たちは、アートが空間を変え、人生を豊かにする力を信じています。
					</p>
				</section>
				<section id="works">
					<SectionTitle>Ours ArtWorks</SectionTitle>
					<Row sm={3}>
						{Array.from({ length: 6 }).map((_, index) => (
							<Col key={`artwork${index + 1}`}>
								<Image
									fluid
									src={`./artworks/artwork${index + 1}.jpg`}
									alt={`Art Work ${index + 1}`}
								/>
							</Col>
						))}
					</Row>
				</section>
				<section id="contact">
					<SectionTitle>Contact Us</SectionTitle>
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
				</section>
			</Stack>
			<footer
				style={{
					textAlign: "center",
					marginTop: "20px",
					padding: "20px",
				}}
			>
				© 2024 MH Gallery. All rights reserved.
			</footer>
		</Container>
	);
}
