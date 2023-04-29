import React from 'react'
import { AdminLayout } from '../../components/layout/AdminLayout'
import { UserProfile } from '../../components/profile/UserProfile'

export const Profile = () => {
  return (
    <AdminLayout>
        <UserProfile/>
    </AdminLayout>
  )
}
