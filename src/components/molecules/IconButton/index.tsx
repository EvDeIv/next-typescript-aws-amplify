import { FC } from "react";

import { IImageProps, Image } from "@src/components/atoms/Image";
import { Link, TLinkProps } from "@src/components/atoms/Link";

type TIconButton = TLinkProps & IImageProps;

export const IconButton: FC<TIconButton> = ({
	href,
	src,
	alt = "logo",
	height = "auto",
	width,
	...rest
}) => {
	return (
		<Link href={href}>
			<Image src={src} alt={alt} height={height} width={width} {...rest} />
		</Link>
	);
};
