import Link from "next/link";
import { FaArrowRight, FaUserPlus } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { TbMedicineSyrup } from "react-icons/tb";
import { GiThreeLeaves } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main className="flex flex-col bg-gray-50 min-h-dvh bg-[url('/med.jpg')] bg-no-repeat bg-center bg-cover">
        <section className="flex-1 flex flex-col bg-black/70  items-center justify-center text-center px-4">
          <div className="space-y-5">
            <p className="text-green-400 font-thin uppercase text-6xl">
              Medcon </p>
            <p className="text-white font-semibold text-xl">
              Get and Share Reliable Health Advice
            </p>
          </div>
          <p className="text-white italic text-xl mb-8 max-w-lg">
            A community where we help each other stay healthy. Learn when to take medicines, explore practical home remedies, and read helpful insights shared by real users and medical professionals.
          </p>
          <div className="flex space-y-4 items-center justify center">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="space-x-10">
                <button className="flex items-center justify-center gap-2 w-full bg-green-500/40 text-white px-6 py-3 rounded-lg">
                  <Link href={"/auth/signin"}>
                    <p className="text-3xl font-semibold">Get started</p>
                  </Link>
                  <FaArrowRight />
                </button>
              </div>
              <div className="space-x-10">
                <button className="flex items-center justify-center gap-2 w-full bg-green-200/10 text-white px-6 py-3 rounded-lg">
                  <Link href={"/health-tips"}>
                    <p className="text-3xl font-semibold">Get Tips</p>
                  </Link>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* FEATURES SECTION */}
      <section id="features" className="bg-green-500/60 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white shadow p-6 rounded-md">
            <TbMedicineSyrup className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Common Illnesses</h3>
            <p>Malaria, Cold, Headache.</p>
          </div>

          <div className="bg-white shadow p-6 rounded-md">
            <GiThreeLeaves className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Local Remedies</h3>
            <p>Neem tea, Ginger Water</p>
          </div>

          <div className="bg-white shadow p-6 rounded-md">
            <MdVerified className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Verified Health Tips</h3>
            <p>by trusted users.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 md:px-20 text-center bg-gray-400/50">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <FaUserPlus className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Create an Account</h3>
            <p>Sign up quickly with Google or email to get started.</p>
          </div>
          <div>
            <AiOutlinePlusCircle className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Add Your Medicines</h3>
            <p>Enter your prescriptions or symptoms to receive advice.</p>
          </div>
          {/* <div>
            <FaBell className="text-purple-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl mb-2">Get Reminders</h3>
            <p>Receive smart notifications for your medication schedule.</p>
          </div> */}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-green-700 text-white text-center py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Millions in Africa struggle with missed doses and unsafe self-medication.
          MedCon helps you manage your health with ease and reliable guidance.
        </p>
        <div className="space-x-4">
          <Link
            href="/auth/signin"
            className="bg-white text-green-700 px-6 py-3 rounded-md hover:bg-gray-100 transition"
          >
            Sign Up Now
          </Link>
          {/* <Link
            href="/auth/signin"
            className="border border-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
          >
            Continue with Google
          </Link> */}
        </div>
      </section>
    </>
  );
}