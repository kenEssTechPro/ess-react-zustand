import Cookies from "js-cookie";
import { HttpResponse, http } from "msw";

import { env } from "@/config/env";

import { db, persistDb } from "../db";
import {
  authenticate,
  hash,
  requireAuth,
  AUTH_COOKIE,
  networkDelay,
} from "../utils";

type RegisterBody = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type LoginBody = {
  email: string;
  password: string;
};

export const authHandlers = [
  http.post(`${env.API_URL}/auth/register`, async ({ request }) => {
    await networkDelay();
    try {
      const userObject = (await request.json()) as RegisterBody;

      const existingUser = db.user.findFirst({
        where: {
          email: {
            equals: userObject.email,
          },
        },
      });

      if (existingUser) {
        return HttpResponse.json(
          { message: "The user already exists" },
          { status: 400 }
        );
      }

      db.user.create({
        ...userObject,
        role: "ADMIN",
        password: hash(userObject.password),
      });

      await persistDb("user");

      const result = authenticate({
        email: userObject.email,
        password: userObject.password,
      });

      // todo: remove once tests in Github Actions are fixed
      Cookies.set(AUTH_COOKIE, result.jwt, { path: "/" });

      return HttpResponse.json(result, {
        headers: {
          // with a real API servier, the token cookie should also be Secure and HttpOnly
          "Set-Cookie": `${AUTH_COOKIE}=${result.jwt}; Path=/;`,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || "Server Error" },
        { status: 500 }
      );
    }
  }),

  http.post(`${env.API_URL}/auth/login`, async ({ request }) => {
    await networkDelay();

    try {
      const credentials = (await request.json()) as LoginBody;
      const result = authenticate(credentials);

      // todo: remove once tests in Github Actions are fixed
      Cookies.set(AUTH_COOKIE, result.jwt, { path: "/" });

      return HttpResponse.json(result, {
        headers: {
          // with a real API servier, the token cookie should also be Secure and HttpOnly
          "Set-Cookie": `${AUTH_COOKIE}=${result.jwt}; Path=/;`,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || "Server Error" },
        { status: 500 }
      );
    }
  }),

  http.post(`${env.API_URL}/auth/logout`, async () => {
    await networkDelay();

    // todo: remove once tests in Github Actions are fixed
    Cookies.remove(AUTH_COOKIE);

    return HttpResponse.json(
      { message: "Logged out" },
      {
        headers: {
          "Set-Cookie": `${AUTH_COOKIE}=; Path=/;`,
        },
      }
    );
  }),

  http.get(`${env.API_URL}/auth/me`, async ({ cookies }) => {
    await networkDelay();

    try {
      const { user } = requireAuth(cookies);
      return HttpResponse.json({ data: user });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || "Server Error" },
        { status: 500 }
      );
    }
  }),
];
