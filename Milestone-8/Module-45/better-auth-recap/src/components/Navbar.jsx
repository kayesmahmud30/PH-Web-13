"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data, isPending } = useSession();
  if (isPending) {
    return <h2>Loading.....</h2>;
  }
  const userData = data?.user;

  return (
    <div className="flex justify-between">
      <h2>This is Nav Bar</h2>
      <div>
        {userData ? (
          <>
            <p>Welcome, {userData.name}</p>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/auth/signin">Sign In</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
