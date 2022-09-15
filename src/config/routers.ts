interface IRouterQuery {
  email?: string;
}

export const routers = {
  home: () => {
    return "/";
  },
  login: () => {
    return "/login";
  },
  signup: () => {
    return `/signup`;
  },
  signUpComplete: (params: Required<Pick<IRouterQuery, "email">>) => {
    return `/signup-complete?email=${params?.email}`;
  },
  forgotPassword: () => {
    return `/forgot-password`;
  },
  myPage: () => {
    return `/mypage`;
  },
  favorites: () => {
    return `/favorites`;
  },
  myCart: () => {
    return `/mycart`;
  },
  default: () => {
    return `/default`;
  },
};
