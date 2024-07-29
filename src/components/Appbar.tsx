"use client";

import { useSession, signIn, signOut } from "next-auth/react";

const Appbar = () => {
  const session = useSession();
  return (
    <div className="space-x-9">
      <button className="p-2 bg-green-400" onClick={() => signIn()}>
        Sign In
      </button>
      <button className="p-2 bg-red-400" onClick={() => signOut()}>
        Sign Out
      </button>
      {JSON.stringify(session)}
    </div>
  );
};

export default Appbar;
