import React from 'react'
import Header from './header/Header'
import Footer from './footer/footer'
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
    <div className='app-layout'>
     <Header />
     <main>
        <Outlet />
     </main>
     <Footer />
    </div>
    </>
  )
}

export default Layout