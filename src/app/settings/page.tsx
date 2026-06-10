import { AccountMenuButton } from "@/components/account-menu-button";

export default function SettingsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-black via-zinc-950 to-[#4169E1] px-6 py-12">
      <div className="absolute right-6 top-6">
        <AccountMenuButton />
      </div>

      <div className="mx-auto max-w-lg pt-16">
        <div className="rounded-2xl border border-[#4169E1]/30 bg-black/50 p-10 shadow-[0_0_60px_rgba(65,105,225,0.15)] backdrop-blur-sm">
          <h1 className="text-3xl font-semibold text-white">Settings</h1>
          <p className="mt-4 text-zinc-400">
            Account and app preferences will live here soon.
          </p>
        </div>
      </div>
    </main>
  );
}
