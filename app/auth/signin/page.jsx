import Image from "next/image";
import { auth, signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  // If user already logged in → redirect server-side
  if (session?.user) {
    redirect("/share-advice");
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-gray-350">
      <div className="max-w-md mx-auto w-full">
        <div className="flex justify-center mb-6">
          <Image src="/logo.jpg" alt="MedCon Logo" width={160} height={100} />
        </div>

        <h1 className="text-3xl font-bold text-center text-green-700 mb-2">
          Welcome
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign up as a Medical Professional to{" "}
          <span className="font-semibold">MedCon</span>
        </p>

        <div className="flex flex-col gap-5">
          {/* Google */}
          <form
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/share-advice" });
            }}
          >
            <button className="border border-gray-200 flex items-center justify-center gap-2 px-2 py-3 rounded-full w-full">
              <FcGoogle className="text-xl" />
              <p className="text-gray-700">Continue with Google</p>
            </button>
          </form>

          {/* GitHub */}
          {/* <form
            action={async () => {
              "use server";
              await signIn("github", { redirectTo: "/share-advice" });
            }}
          >
            <button className="border border-gray-200 flex items-center justify-center gap-2 px-2 py-3 rounded-full w-full">
              <FaGithub className="text-xl" />
              <p className="text-gray-700">Continue with GitHub</p>
            </button>
          </form> */}

          {/* Twitter */}
          {/* <form
            action={async () => {
              "use server";
              await signIn("twitter", { redirectTo: "/share-advice" });
            }}
          >
            <button className="border border-gray-200 flex items-center justify-center gap-2 px-2 py-3 rounded-full w-full">
              <FaXTwitter className="text-xl" />
              <p className="text-gray-700">Continue with Twitter</p>
            </button>
          </form> */}
        </div>

        <p className="text-xs text-gray-700 text-center mt-4">
          By signing in, you agree to our{" "}
          <span className="underline">Terms of Use</span> and{" "}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
