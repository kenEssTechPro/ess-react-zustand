export const paths = {
  home: {
    path: "/",
    getHref: () => "/",
  },

  auth: {
    register: {
      path: "/auth/register",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
    login: {
      path: "/auth/login",
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ""}`,
    },
  },
  users: {
    path: "users",
    getHref: () => "/users",
  },
  app: {
    root: {
      path: "/app",
      getHref: () => "/app",
    },
    users: {
      path: "users",
      getHref: () => "/app/users",
    },
  },
} as const;
