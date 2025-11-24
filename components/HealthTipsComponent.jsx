"use client";
import React, { useEffect, useState } from "react";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { FaRegTrashAlt } from "react-icons/fa";
import { db } from "@/config/firebaseconfig";
import { auth } from "@/auth";

const HealthTips = ({ session }) => {

    const [tips, setTips] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const fetchTips = async () => {
        try {
            const q = []
            const querySnapshot = await getDocs(collection(db, "suggestions"));
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                let errorFix = {
                    id: doc.id,
                    ...doc.data()
                }
                console.log(errorFix);
                q.push(errorFix)
                // console.log(q);

            });
            setTips(q);
            // console.log(q);

        } catch (error) {
            console.error("Error fetching tips:", error);
            alert("An error occurred. Try again")
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { fetchTips() }, [])


    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "suggestions", id))
        } catch (error) {
            console.error("An error occurred while deleting document:", error)
            alert("An error occurred. Try again later")
        }
    }

    return (
        <main className="min-h-dvh bg-green-700/80 px-6 py-12">
            <section className=" mx-auto bg-gray-200 shadow-lg rounded-lg p-10">
                <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">
                    Welcome to the Health Tips Hub
                </h1>
                <p className="text-gray-600 font-light text-center italic mb-10">
                    Read helpful advice shared by medical professionals.
                </p>

                {
                    loading ? (
                        <p className="text-center text-gray-600">Loading tips...</p>
                    ) : tips.length === 0 ? (
                        <p className="text-center text-gray-500">No tips available yet.</p>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-6">
                            {tips.map((tip, i) => (
                                <div
                                    key={i}
                                    className="p-6 border rounded-lg bg-blue-50 shadow-sm hover:shadow-md transition relative group"
                                >
                                    <div className="flex items-center gap-3 mb-2 justify-between">
                                        {tip.img && (
                                            <img
                                                src={tip.img}
                                                alt="user"
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                        )}
                                        <h2 className="font-semibold text-green-800">{tip.title}</h2>
                                    </div>

                                    <p className="text-sm text-gray-500 mb-2">{tip.category}</p>

                                    <p className="text-gray-700 mb-4">{tip.advice}</p>

                                    <div
                                        className="flex items-center justify-between"
                                    >
                                        <p className="text-xs font-light text-gray-500">
                                            Shared by: <span className="font-semibold">{tip.author}</span>
                                        </p>
                                        <p className="text-xs font-light text-gray-500">
                                            Posted on <span className="font-semibold">{tip.timestamp}</span>
                                        </p>
                                    {
                                        session?.user?.email == tip.email &&
                                        <button onClick={() => handleDelete(tips.id)} className='absolute bottom-3 right-5 font-thin text-sm opacity-0 group-hover:opacity-100 transition-all duration-200'>
                                            <FaRegTrashAlt />
                                        </button>
                                    }
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </section>
        </main>
    );
};

export default HealthTips;