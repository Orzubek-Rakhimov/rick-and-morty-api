import React from 'react'
import './_max-width-wrapper.scss'
const MaxWIdthWrapper = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default MaxWIdthWrapper