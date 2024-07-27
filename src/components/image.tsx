import { type FC, useState } from "react";
import { Carousel, Image, Stack } from "react-bootstrap";

export const ImageSlider: FC<{
	images: {
		src: string;
		alt?: string;
	}[];
}> = ({ images }) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	return (
		<Stack
			style={{
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Carousel
				activeIndex={index}
				onSelect={handleSelect}
				fade
				style={{
					maxWidth: 400,
				}}
			>
				{images.map((image) => (
					<Carousel.Item>
						<Image fluid key={image.src} src={image.src} alt={image.alt} />
					</Carousel.Item>
				))}
			</Carousel>
		</Stack>
	);
};
