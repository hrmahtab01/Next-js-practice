import React from 'react'
import { redirect } from 'next/navigation'

const page = () => {
    let data =false

    if (!data) {
        redirect("/")
    }
  return (
    <div>
      <h1>this is about page</h1>
    </div>
  )
}

export default page
