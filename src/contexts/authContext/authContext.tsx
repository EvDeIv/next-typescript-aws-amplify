import { createContext, FC, ReactNode, useContext } from "react";

import { storageService } from "@src/services";

import { AUTH_USER, useAuthUser } from "./hooks/useAuthUser";
import { IAuthUser, TAuthUserState } from "./types";

interface IAuthContextProviderPrors {
	children: ReactNode;
}

export interface IAuthUserContext {
	user: TAuthUserState;
	remove: () => void;
	//eslint-disable-next-line
	save: (user: IAuthUser) => void;
}

const AuthContext = createContext<IAuthUserContext>({} as IAuthUserContext);

export function useAuthUserContext() {
	return useContext(AuthContext);
}

export const AuthContextProvider: FC<IAuthContextProviderPrors> = ({
	children,
}) => {
	const initialUserState = storageService.get(AUTH_USER) as IAuthUser;

	const valueAuthUser = useAuthUser(initialUserState);

	return (
		<AuthContext.Provider value={valueAuthUser}>
			{children}
		</AuthContext.Provider>
	);
};
