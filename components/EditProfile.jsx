"use client"
import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '@/config/firebaseconfig';

const EditProfile = ({ name, uid }) => {
    const [username, setUsername] = useState(name)

    const handleUpdate = async (id) => {
        try {
            const docRef = doc(db, "users", id)
            await updateDoc(docRef, username)
        } catch (error) {
            console.error("An error occurred while updatin your document", error)
            alert("Oops, An error occurred. Please try again later")
        }
    }
    return (
        <main>
            <form action="" className='space-y-5 gap-3'>
                <input
                    type="text"
                    placeholder='Edit your username...'
                    className='w-fit border border-gray-200 p-2 rounded-md outline-none'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <button
                    onClick={() => handleUpdate(uid)}
                    className='bg-green-900 text-white text-xl rounded-md w-15 py-2 hover:bg-green-950 transition-all duration-200 outline-none'>Edit
                </button>
            </form>
        </main>
    )
}

export default EditProfile
