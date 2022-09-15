export interface IUserForgotPassword {
  email: string;
}

export interface IUserSignUp {
  email: string;
  password: string;
  country: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface ISearchInput {
  search: string;
}
