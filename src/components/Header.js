import React from 'react'

function Header() {
    return (
        <section className="header w-full h-full grid grid-cols-two max-w-4xl">
            <div className="header-title flex flex-col justify-center items-start gap-2">
                <h1 className="title text-white font-bold">Social Media Dashboard</h1>
                <h5 className="subtitle text-mediumBlue text-xs font-semibold">Total Followers: 23,004</h5>
            </div>
            <div className="header-button justify-self-auto flex justify-center items-center gap-4">
                <h5 className="button-title text-mediumBlue text-xs font-semibold">Darl Mode</h5>
                <input type="checkbox" id="switch" class="checkbox" /> 
            </div>
        </section>    
    )
}

export default Header
