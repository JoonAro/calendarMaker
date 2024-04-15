import React from 'react'


const userData = () => {
  return (
   <>
      <strong className='font-medium text-gray-700'>Customers</strong>
            <div className=" border-gray-200 rounded-sm mt-3">
<table className='w-full text-gray-700 border-separate border-spacing-5 border border-slate-400'>
    <thead className=' border border-slate-300 text-transform: uppercase bg-accentColor'>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Email address</th>
            <th>Date of registration</th> 
        </tr>
    </thead>
    <tbody >
    <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
        <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
        <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
        <tr className=' border border-slate-300'>
            <td className='border border-slate-300'>1</td>
            <td className='border border-slate-300'>Name</td>
            <td className='border border-slate-300'>Status</td>
            <td className='border border-slate-300'>Email address</td>
            <td className='border border-slate-300'>Date of registration</td>
        </tr>
    </tbody>
</table>
           </div>

           </>
  )
}

export default userData
