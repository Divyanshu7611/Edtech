import React from 'react'
  

function Stepper({step}) {
  const steps = [
    {
      id:1,
      title:'Course Information',
    },
    {
      id:2,
      title:'Course Builder',
    },
    {
      id:3,
      title:'Publish',
    }

  ]
  return (
    <div className='flex items-center justify-between w-xl'>
        {
          steps.map((steps,index)=>(
            <div className='flex items-center justify-between' key={steps.id}>
              <div className='flex'>
                <div className='flex flex-col items-start justify-start gap-1'>
                  <div className='flex justify-center items-center'>
          
                <span className={`rounded-full p-1 w-8 h-8 flex justify-center items-center border ${step === steps.id ?"border-[#FFD60A] text-[#FFD60A] bg-[#251400]" : "border-[#2C333F] text-[#2C333F] bg-[#161D29]"}`}>
                        {steps.id}
                </span>
                {
                  steps.id < 3 ? (<div className={`border-2 border-dashed w-36 h-0 border-spacing-3 ${step > steps.id ? "border-[#FFD60A]" : "border-[#424854]"}`}></div>) : null
                }
                {/* <div className='border-2 border-dashed w-36 h-0 border-white border-spacing-3'></div> */}

                  </div>
                <span className={`text-xs ${step === steps.id ? "text-[#F1F2FF]" : "text-[#585D69]"}`}>{steps.title}</span>

                </div>
               

              </div>



            </div>
          ))
        }
    </div>
  )
}

export default Stepper