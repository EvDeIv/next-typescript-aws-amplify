import { FC } from "react";

import { default as NextHead } from "next/head";

interface IHead {
	title?: string;
	description?: string;
	keywords?: string;
}

export const Head: FC<IHead> = ({
	title = "Pet Industry site",
	description = "Description about Pet Industry site",
	keywords = "auto, details, engines, engine, auto part",
}) => {
	return (
		<NextHead>
			<meta content="width=375,initial-scale=1" name="viewport" />
			<meta content={description} name="description" />
			<meta name="keywords" content={keywords} />
			<link href="https://fonts.googleapis.com" rel="preconnect" />
			<link
				crossOrigin={"anonymous"}
				href="https://fonts.gstatic.com"
				rel="preconnect"
			/>
			<title>{title}</title>
		</NextHead>
	);
};
