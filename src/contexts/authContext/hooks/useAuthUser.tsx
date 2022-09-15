import { useState } from "react";

import { storageService } from "@src/services";

import { TAuthUserState } from "../types";
import { IAuthUser } from "../types/auth.types";

export const AUTH_USER = "auth_user";

export const useAuthUser = (initialUser: TAuthUserState) => {
	const [user, setUser] = useState<TAuthUserState>(initialUser);

	const save = (authUser: IAuthUser) => {
		storageService.set(AUTH_USER, authUser);

		setUser(authUser);
	};

	const remove = () => {
		storageService.remove(AUTH_USER);

		setUser(undefined);
	};

	return { save, user, remove };
};
