import React, { Fragment } from 'react'
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
    return (
        <Fragment>
            <div className='w-full h-full overflow-hidden bg-[#070920] relative'>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default DefaultLayout
