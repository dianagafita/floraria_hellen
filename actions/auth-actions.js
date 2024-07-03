"use server";

import { createAuthSession, destroySession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUser, getUserByEmail } from "@/lib/user";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  const firstName = formData.get("firstName");
  const secondName = formData.get("secondName");
  const phoneNumber = formData.get("phone");

  let errors = {};
  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }
  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 chars ";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const hashedPassword = hashUserPassword(password);
  try {
    const userId = await createUser(
      email,
      hashedPassword,
      firstName,
      secondName,
      phoneNumber
    );
    console.log("BBBBBBBBBBBBBBBBBBBBB", userId);
    await createAuthSession(userId);
    redirect("/");
  } catch (error) {
    if (error.code === "P2002") {
      return {
        errors: { email: "The email is not correct" },
      };
    }
    throw error;
  }
}

export async function login(prevState, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const existingUser = await getUserByEmail(email);
  if (!existingUser) {
    return {
      errors: {
        email: "could not authentificate user",
      },
    };
  }
  const isValidPassword = verifyPassword(existingUser.password, password);
  if (!isValidPassword) {
    return {
      errors: {
        password: "could not authentificate user",
      },
    };
  }
  await createAuthSession(existingUser.id);
  redirect("/");
}

export async function auth(mode, prevState, formData) {
  if (mode === "login") {
    return login(prevState, formData);
  }
  return signup(prevState, formData);
}

export async function logout() {
  await destroySession();
  redirect("/");
}
