import { cookies } from "next/headers";

export async function LoggedIn() {
  const getCookie = cookies().get("Authorization");

  let isLoggedIn: boolean;

  if (getCookie) {
    const isValid: string = getCookie.value.split(" ")[1];

    isLoggedIn = isValid ? true : false;
  } else {
    isLoggedIn = false;
  }

  return isLoggedIn
}