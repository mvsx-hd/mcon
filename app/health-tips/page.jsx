import HealthTips from '@/components/HealthTipsComponent'
import { redirect } from 'next/navigation'
import React from 'react'
import { auth } from '@/auth'

const page = async () => {
  const session = await auth()
  if (!session) {
    redirect('auth/signin')
  }
  return (
    <main>
      <HealthTips/>
    </main>
  )
}

export default page
