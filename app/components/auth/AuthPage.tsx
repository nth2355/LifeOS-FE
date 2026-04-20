"use client"
import Image from "next/image"
import { LoginForm } from "./LoginForm"
import { SignupForm } from "./SignupForm"

export default function AuthPage({
  mode,
  onSwitch,
}: {
  mode: "login" | "signup"
  onSwitch: () => void
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-slate-50 border rounded-2xl shadow-sm">
      
      <Image
        src="/images/knowlix_full_logo.png"
        width={500}
        height={500}
        alt="logo"
        className="object-contain"
      />

      <div className="w-full max-w-md">
        {mode === "login" ? (
          <LoginForm onSwitch={onSwitch} />
        ) : (
          <SignupForm onSwitch={onSwitch} />
        )}
      </div>
    </div>
  )
}
