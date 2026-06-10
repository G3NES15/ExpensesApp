"use client";

import { useReverification, useUser } from "@clerk/nextjs";
import { useState } from "react";

const inputClassName =
  "w-full rounded-lg border border-[#4169E1]/30 bg-zinc-900 px-4 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#4169E1] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/30";

const buttonClassName =
  "rounded-lg bg-[#4169E1] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3558c9] disabled:cursor-not-allowed disabled:opacity-60";

export function PasswordSettingsForm() {
  const { isLoaded, isSignedIn, user } = useUser();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updatePassword = useReverification(
    (params: { currentPassword?: string; newPassword: string }) =>
      user!.updatePassword({
        currentPassword: params.currentPassword,
        newPassword: params.newPassword,
        signOutOfOtherSessions: true,
      }),
  );

  if (!isLoaded) {
    return <p className="text-zinc-400">Loading account security...</p>;
  }

  if (!isSignedIn || !user) {
    return null;
  }

  const hasPassword = user.passwordEnabled;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const newPassword = formData.get("newPassword") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const currentPassword = formData.get("currentPassword") as string;

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      setIsSubmitting(false);
      return;
    }

    if (hasPassword && !currentPassword) {
      setError("Enter your current password.");
      setIsSubmitting(false);
      return;
    }

    try {
      await updatePassword({
        currentPassword: hasPassword ? currentPassword : undefined,
        newPassword,
      });
      setSuccess(
        hasPassword
          ? "Password updated successfully."
          : "Password set successfully. You can now sign in with email and password.",
      );
      event.currentTarget.reset();
      await user?.reload();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mt-8 border-t border-[#4169E1]/20 pt-8">
      <h2 className="text-xl font-semibold text-white">
        {hasPassword ? "Change password" : "Set password"}
      </h2>
      <p className="mt-2 text-sm text-zinc-400">
        {hasPassword
          ? "Update your password to keep your account secure."
          : "Add a password so you can sign in without an email code each time."}
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {hasPassword && (
          <div>
            <label
              htmlFor="currentPassword"
              className="mb-2 block text-sm text-zinc-300"
            >
              Current password
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              className={inputClassName}
            />
          </div>
        )}

        <div>
          <label
            htmlFor="newPassword"
            className="mb-2 block text-sm text-zinc-300"
          >
            {hasPassword ? "New password" : "Password"}
          </label>
          <input
            id="newPassword"
            name="newPassword"
            type="password"
            autoComplete="new-password"
            className={inputClassName}
            required
            minLength={8}
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm text-zinc-300"
          >
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            className={inputClassName}
            required
            minLength={8}
          />
        </div>

        {error && (
          <p className="text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        {success && (
          <p className="text-sm text-emerald-400" role="status">
            {success}
          </p>
        )}

        <button
          type="submit"
          className={buttonClassName}
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Saving..."
            : hasPassword
              ? "Update password"
              : "Set password"}
        </button>
      </form>
    </section>
  );
}
