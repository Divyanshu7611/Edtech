import React from 'react'

function ProfileForm() {
  return (
    <div className='w-full flex-col flex gap-4 bg-[#161D29] rounded-lg p-5 lg:w-[85%] mx-auto mt-5'>
         <h1 className='text-[#F1F2FF] text-lg font-semibold'>Personal Information</h1>
        {/* name section */}
        <div className='flex w-full justify-between items-baseline gap-5 lg:flex-row flex-col'>
            <label className='flex flex-col text-[#F1F2FF] text-sm w-full'>
                Display Name
                <input type='text' className='rounded-lg shadow text-[#999DAA] shadow-[#bcb9b971] bg-[#2C333F] p-3 mt-1'/>
                <p className='mt-1 text-xs text-[#585D69]'>Name entered above will be used for all issued certifies.</p>
            </label>
            <label className='flex flex-col text-[#F1F2FF] text-sm w-full'>
                Profession 
                {/* <input type='text' className='rounded-lg shadow shadow-[#bcb9b971] bg-[#2C333F] p-3 mt-1'/> */}
                <select className='rounded-lg shadow shadow-[#bcb9b971] bg-[#2C333F] p-3 pr-6 text-[#999DAA] mt-1'>
                    <option value='student'>Student</option>
                    <option value='instructor'>Instructor</option>  
                    <option value='engineer'>Engineer</option>
                    <option value='developer' defaultChecked>Developer</option>
                </select>
            </label>
        </div>
        {/* DOb and gender section */}
        <div className='flex w-full justify-between items-baseline gap-5 lg:flex-row flex-col'>
            <label className='flex flex-col text-[#F1F2FF] text-sm w-full'>
                Display Name
                <input type='text' className='rounded-lg shadow text-[#999DAA] shadow-[#bcb9b971] bg-[#2C333F] p-3 mt-1'/>
                <p className='mt-1 text-xs text-[#585D69]'>Name entered above will be used for all issued certifies.</p>
            </label>
            <label className='flex flex-col text-[#F1F2FF] text-sm w-full'>
                Profession 
                {/* <input type='text' className='rounded-lg shadow shadow-[#bcb9b971] bg-[#2C333F] p-3 mt-1'/> */}
                <select className='rounded-lg shadow shadow-[#bcb9b971] bg-[#2C333F] p-3 pr-6 text-[#999DAA] mt-1'>
                    <option value='student'>Student</option>
                    <option value='instructor'>Instructor</option>  
                    <option value='engineer'>Engineer</option>
                    <option value='developer' defaultChecked>Developer</option>
                </select>
            </label>
        </div>

        {/* phone section */}
        <div className='flex w-full justify-between items-baseline gap-5 lg:flex-row flex-col'>
            <label className='flex flex-col text-[#F1F2FF] text-sm w-full'>
                Display Name
                <input type='text' className='rounded-lg shadow text-[#999DAA] shadow-[#bcb9b971] bg-[#2C333F] p-3 mt-1'/>
                <p className='mt-1 text-xs text-[#585D69]'>Name entered above will be used for all issued certifies.</p>
            </label>
            <label className='flex flex-col text-[#F1F2FF] text-sm w-full'>
                Profession 
                {/* <input type='text' className='rounded-lg shadow shadow-[#bcb9b971] bg-[#2C333F] p-3 mt-1'/> */}
                <select className='rounded-lg shadow shadow-[#bcb9b971] bg-[#2C333F] p-3 pr-6 text-[#999DAA] mt-1'>
                    <option value='student'>Student</option>
                    <option value='instructor'>Instructor</option>  
                    <option value='engineer'>Engineer</option>
                    <option value='developer' defaultChecked>Developer</option>
                </select>
            </label>
        </div>

    </div>
  )
}

export default ProfileForm