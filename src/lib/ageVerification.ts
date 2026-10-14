import { createIsomorphicFn, createServerFn } from "@tanstack/react-start";
import {
  getCookie,
  getRequestProtocol,
  setCookie,
} from "@tanstack/react-start/server";

const COOKIE_NAME = "ageVerified";
const MAX_AGE = 60 * 60 * 24 * 365;

// Server: the request's Cookie header (SSR). Client: document.cookie
// (client-side navigations and router.invalidate()).
const readCookie = createIsomorphicFn()
  .server(() => getCookie(COOKIE_NAME))
  .client(() =>
    document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${COOKIE_NAME}=`))
      ?.slice(COOKIE_NAME.length + 1)
  );

export const isAgeVerified = () => readCookie() === "1";

// Set by the server rather than document.cookie, which Safari (ITP) caps at
// 7 days. Not HttpOnly: beforeLoad reads it on the client too.
export const verifyAge = createServerFn({ method: "POST" }).handler(() => {
  setCookie(COOKIE_NAME, "1", {
    path: "/",
    maxAge: MAX_AGE,
    sameSite: "lax",
    secure: getRequestProtocol() === "https",
  });
});

// Fallback when the server function request fails
export const verifyAgeOnClient = () => {
  document.cookie = `${COOKIE_NAME}=1; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax`;
};
