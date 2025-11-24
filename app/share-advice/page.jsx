"use server";
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import React from 'react'
import ShareAdviceClient from '@/components/ShareAdviceClient';

const page = async () => {
  const session = await auth();
  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <div className='mb-5'>
      <ShareAdviceClient session={session}/>
    </div>
  )
}

export default page
