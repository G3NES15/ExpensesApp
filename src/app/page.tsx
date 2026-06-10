"use client";

import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { AccountMenuButton } from "@/components/account-menu-button";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-[#4169E1] px-6">
      <div className="absolute right-6 top-6">
        <Show when="signed-in">
          <AccountMenuButton />
        </Show>
      </div>
      <div className="mb-12 rounded-2xl border border-[#4169E1]/30 bg-black/50 px-14 py-10 shadow-[0_0_60px_rgba(65,105,225,0.15)] backdrop-blur-sm">
        <h1 className="text-center text-5xl font-semibold tracking-wide text-white sm:text-6xl">
          Welcome
        </h1>
      </div>

      <Show when="signed-out">
        <div className="flex gap-4">
          <SignInButton>
            <button className="cursor-pointer rounded-lg border border-[#4169E1] bg-transparent px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4169E1]/20">
              Log in
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="cursor-pointer rounded-lg bg-[#4169E1] px-8 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3558c9]">
              Sign up
            </button>
          </SignUpButton>
        </div>
      </Show>
    </main>
  );
}
