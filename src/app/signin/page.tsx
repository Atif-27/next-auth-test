"use client";

import { signIn } from "next-auth/react";

export default function page() {
  return (
    <div>
      <button
        className="bg-red-200 p-2"
        onClick={async () => {
          const res = await signIn("google");
          console.log(res);
        }}
      >
        Sign In With Google
      </button>
      <button
        onClick={async () => {
          const res = await signIn("github");
          console.log(res);
        }}
        className=" bg-gray-700 text-white"
      >
        Sign In With Github
      </button>
      <button
        className=" bg-white p-4 "
        onClick={async () => {
          const res = await signIn("credentials", {
            username: "Atif",
            password: "asas",
            redirect: false,
          });
          console.log(res);
        }}
      >
        Sign in with cred
      </button>
    </div>
  );
}
