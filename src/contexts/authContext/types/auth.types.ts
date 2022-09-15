import { CognitoUser } from "@aws-amplify/auth";

export interface IAuthUser extends CognitoUser {
  username?: string;
  attributes?: { email?: string };
}

export type TAuthUserState = IAuthUser | undefined;

export interface IAuthUserContext {
  user: TAuthUserState;
  remove: () => void;
  //eslint-disable-next-line
  save: (user: IAuthUser) => void;
}
