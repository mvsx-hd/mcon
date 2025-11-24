"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { db } from "@/config/firebaseconfig";
import { addDoc, collection,} from "firebase/firestore";

const ShareAdviceClient = ({ session }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    category: Yup.string().required("Please select a category"),
    advice: Yup.string()
      .min(20, "Advice should be at least 20 characters")
      .required("Advice is required"),
  });

  return (
    <main className="min-h-screen bg-[url('/meds.png')] bg-cover bg-no-repeat bg-center flex items-center justify-center px-6 py-12">
      <section className="bg-black/30 rounded-lg shadow-lg max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold text-green-500 mb-6 text-center">
          🩺 Share Your Health Advice
        </h1>
        <p className="text-white font-light mb-6 text-center">
          Help others by sharing your health knowledge and experience.
        </p>

        <Formik
          initialValues={{
            title: "",
            category: "",
            advice: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              setLoading(true);

              const postObject = {
                author: session.user.name,
                email: session.user.email,
                img: session.user.image,
                title: values.title,
                category: values.category,
                advice: values.advice,
                timestamp: new Date().toLocaleDateString(),
                ...values
              };

              const docRef = await addDoc(
                collection(db, "suggestions"),
                postObject
              );

              console.log("Document written with ID: ", docRef.id);

              setSubmitted(true);
              resetForm();

              setTimeout(() => setSubmitted(false), 4000);
            } catch (error) {
              console.error("Error submitting advice:", error);
              alert("Something went wrong. Try again.");
            } finally {
              setLoading(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-5">
              {/* Title */}
              <div>
                <label className="block mb-2 text-white font-light">
                  Title
                </label>
                <Field
                  type="text"
                  name="title"
                  placeholder="e.g., Best time to take malaria drugs"
                  className="w-full border border-gray-300 p-3 rounded-md outline-none text-white font-semibold"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block mb-2 text-white font-light">
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  className="w-full border border-gray-300 p-3 rounded-md outline-none text-white font-semibold bg-gray-400/50"
                >
                  <option value="">Select a category</option>
                  <option value="Fever">Fever</option>
                  <option value="Headache">Headache</option>
                  <option value="Cold">Cold</option>
                  <option value="Malaria">Malaria</option>
                  <option value="Pain Relief">Pain Relief</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Advice */}
              <div>
                <label className="block mb-2 text-gray-700 text-white font-light">
                  Your Advice
                </label>
                <Field
                  as="textarea"
                  name="advice"
                  rows="5"
                  placeholder="Share your tip or experience here..."
                  className="w-full border border-gray-300 p-3 rounded-md outline-none resize-none text-white font-semibold"
                />
                <ErrorMessage
                  name="advice"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || loading}
                className="w-full bg-green-600 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
              >
                {loading ? "Submitting..." : "Submit Advice"}
              </button>
            </Form>
          )}
        </Formik>

        {submitted && (
          <div className="mt-6 bg-green-100 text-green-700 text-center py-3 rounded-md">
            Thank you! Your advice has been submitted successfully.
          </div>
        )}
      </section>
    </main>
  );
};

export default ShareAdviceClient;