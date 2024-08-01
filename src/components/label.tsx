import type { FC, ReactNode } from "react";

export const SectionTitle: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<h3
			style={{
				maxWidth: "480px",
				fontFamily: "monospace",
				fontWeight: 700,
				letterSpacing: ".3rem",
				paddingBottom: "6px",
				borderBottom: "2px solid #000",
			}}
		>
			{children}
		</h3>
	);
};
