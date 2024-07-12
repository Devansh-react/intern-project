import React from 'react'


function Profilepage({ params }: any) {
    return (
        <div className='w-full h-screen jflex  flex-col justify-center item-center aling-center text-center'>
            <h1 className='text-3xl font-bold text-center'>Profilepage
                <span className='text-4xl font-bold text-center  text-yellow-500'> {params.id}</span>
            </h1>
        </div>
    )
}

export default Profilepage