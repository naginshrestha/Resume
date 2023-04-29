import React from 'react'
import { Header } from './Header'

export const AdminLayout = ({children}) => {
  return (
    <div className='layout'>
         <Header/>

         <div className='Mainbody'>
            {children}
        </div>

        <div className='Footer-button'>
        <footer className="mt-5 bg-dark text-light p-4 text-center">
        &copy; Copy right all reserver 2023
      </footer>
      </div>

    </div>
  )
}
