

import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
  return (
    <div>
        <div className='adminnav'>
    <div className="title">
        <h2>Home</h2>
    </div>
   
    <p>Welcome: Admin </p>
    <Link href="/api/auth/signout" className='link'>
    <div className="logout">
        Logout
    </div>
    </Link>
</div>
    </div>
  )
}

export default AdminNavbar