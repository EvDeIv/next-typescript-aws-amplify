import { FC, ReactNode, useEffect } from "react";
import { useAuthUserContext } from "@src/contexts/authContext";
import { useRouter } from "next/router";
import { routers } from "@src/config/routers";

export enum EPermission {
	"is_login" = "is_login",
	"is_not_login" = "is_not_login",
}

interface IAuthPermissionProps {
	children: ReactNode;
}

export const AuthPermission: FC<IAuthPermissionProps> = ({
	children,
}): JSX.Element => {
	const router = useRouter();

	const { user } = useAuthUserContext();

	useEffect(() => {
		if (!user) router.replace(routers.login());
	}, [user]);

	if (!user) return <></>;

	return <>{children}</>;
};
