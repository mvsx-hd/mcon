"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-[url('/Medcon2.png')] bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center py-16 px-6">
      <section className="bg-white/80 shadow-lg rounded-2xl max-w-4xl w-full p-10">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-6">
          About MedCon 💊
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 text-lg text-center mb-10 leading-relaxed">
          <strong>MedCon</strong> is a digital platform created to help users make better health decisions. 
          Instead of searching for medicines, our focus is on educating and guiding users providing 
          the right advice on when to take medicines, how to manage common illnesses, and how to live healthier lives.  
        </p>

        {/* Image or illustration */}
        <div className="flex justify-center mb-10">
          <Image
            src="/bg.jpg"
            alt="Health advice illustration"
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>

        {/* Mission Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is simple to make trusted health information accessible to everyone. 
            Whether you’re managing a fever, headache, or taking prescribed drugs, MedCon helps 
            you understand what to do and when to do it, safely and responsibly.
          </p>
        </section>

        {/* Community Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Community Driven</h2>
          <p className="text-gray-700 leading-relaxed">
            MedCon isn’t just about advice it’s about community. Users can share their own experiences, 
            remedies, and insights through the <Link href="/share-advice" className="text-blue-500 underline">Share Advice</Link> page. 
            Together, we build a resource that supports everyone’s wellness journey.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <Link
            href="/share-advice"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Share Your Health Tip
          </Link>
        </div>
      </section>

      {/* Footer section */}
      <footer className="mt-10 text-gray-600 text-sm text-center">
        © {new Date().getFullYear()} MedCon — Promoting health through shared knowledge.
      </footer>
    </main>
  );
};

export default AboutUs;