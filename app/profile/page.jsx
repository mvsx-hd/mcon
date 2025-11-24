import { auth } from '@/auth'
import EditProfile from '@/components/EditProfile'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async () => {
  const session = await auth()

  if (!session) {
    redirect("auth/signin")
  }

  const username = session.user.name
  const userId = session.user.id

  return (
    <main className='min-h-screen bg-[url("/bg.jpg")] bg-cover bg-no-repeat bg-center flex items-center justify-center px-6 py-12'>
      <section className="max-w-4xl w-full flex flex-col items-center bg-gray-200/40 shadow-lg rounded-lg p-10 space-y-2">
        <h1 className='text-3xl font-bold text-green-700 mb-4 text-center'>Profile Overview</h1>

        <img
          src={session.user.image}
          alt={session.user.name.slice(0, 2).toUpperCase()}
          className='w-15 h-15 rounded-full'
        />

        <h1 className='text-4xl font-thin italic'>{session.user.name}</h1>
        <h2 className='text-xl font-light italic'>{session.user.email}</h2>

        <EditProfile name={username} uid={userId} />

        {/* <form
          className='w-full mx-auto flex'
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button type='submit' className='bg-red-600 text-white px-20 py-2 rounded-md text-xl hover:bg-red-700 transition-all duration-200'>
            Log Out
          </button>
        </form> */}
      </section>
    </main>
  )
}

export default page
