import React from "react";

const Layout = ({children}) => {
    return (
        <div className="bg-black h-screen py-10 flex">
            {children}
        </div>
    )
}

export default Layout