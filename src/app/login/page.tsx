import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      <LoginLink className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Login
      </LoginLink>
      <p className="mt-4 text-center">
        Don&apos;t have an account? <br /> Please ask admin for an account.
      </p>
    </div>
  );
}
