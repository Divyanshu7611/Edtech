import React from 'react'
import ProfileForm from './ProfileForm'
import ProfilePassword from './ProfilePassword'
import DeleteProfile from './DeleterProfile'

function ProfileDetails() {
  return (
    <div className=''>
            
             <ProfileForm/>
             <ProfilePassword/>
             <DeleteProfile/>


    </div>
  )
}

export default ProfileDetails