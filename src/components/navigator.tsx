import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Button,
	Container,
	Divider,
	Drawer,
	IconButton,
	Link,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import NextLink from "next/link";
import { type FC, useState } from "react";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
] as const satisfies {
	name: string;
	path: string;
}[];

export const Navigator: FC = () => {
	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "white", boxShadow: "none" }}
		>
			<Container maxWidth="xl">
				<Toolbar>
					{/* <SideBar /> */}
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "black",
							textDecoration: "none",
						}}
					>
						HM Gallery
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{navItems.map((page) => (
							<Link key={page.name} href={page.path} component={NextLink}>
								<Typography
									component="div"
									sx={{
										my: 2,
										color: "black",
										display: "block",
										textDecoration: "none",
									}}
								>
									{page.name}
								</Typography>
							</Link>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

const SideBar: FC = () => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	return (
		<>
			<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
				<nav>
					<Drawer
						anchor="right"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						sx={{
							"& .MuiDrawer-paper": { boxSizing: "border-box", minWidth: 200 },
						}}
					>
						<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
							<Typography variant="h6" sx={{ my: 2 }}>
								HM Gallery
							</Typography>
							<Divider />
							<List>
								{navItems.map((item) => (
									<ListItem key={item.name} disablePadding>
										<ListItemButton sx={{ textAlign: "center" }}>
											<ListItemText primary={item.name} />
										</ListItemButton>
									</ListItem>
								))}
							</List>
						</Box>
					</Drawer>
				</nav>

				{/* TODO: 右寄せにしたい */}
				<IconButton
					size="large"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleDrawerToggle}
					color="primary"
				>
					<MenuIcon />
				</IconButton>
			</Box>
			<Typography
				variant="h5"
				noWrap
				component="a"
				sx={{
					mr: 2,
					display: { xs: "flex", md: "none" },
					flexGrow: 1,
					fontFamily: "monospace",
					fontWeight: 700,
					letterSpacing: ".3rem",
					color: "black",
					textDecoration: "none",
				}}
			>
				HM Gallery
			</Typography>
		</>
	);
};
