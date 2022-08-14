import React from "react";
import {BsCheck} from 'react-icons/bs'
import cn from 'classnames'


const Check = ({isCompleted}) => {
    return (
        <div className={cn('border-2 rounded-lg border-green-500 w-5 h-5 mr-5 flex items-center justify-center', {
            'bg-green-500' : isCompleted,
        })}>
            {
                isCompleted &&
                <BsCheck size={24} className='text-gray-900' />
            }
        </div>
    )
}

export default Check