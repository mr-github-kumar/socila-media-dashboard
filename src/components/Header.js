import React from 'react';

function Header({action}) {
    return (
        <section className="header w-full h-full flex flex-col sm:flex-row gap-4 sm:justify-between sm:w-full">
            <div className="header-title w-full flex flex-col sm:justify-center items-start gap-1 border-0 border-b border-grayishBlueText pb-4">
                <h1 className="title text-darkestBlue dark:text-white font-bold">Social Media Dashboard</h1>
                <h5 className="subtitle text-mediumBlue text-xs font-semibold">Total Followers: 23,004</h5>
            </div>
            <div className="header-button flex justify-between sm:justify-center items-center gap-2">
                <span className="button-title text-mediumBlue text-xs font-semibold">Dark Mode</span>
                <input type="checkbox" name="" id="toggle" class="hidden" /> 
                <label for="toggle">
                    <div className="toggle-button w-10 h-5 flex items-center dark:bg-lightToggle rounded-full p-1 bg-gradient-to-r from-primary to-secondary" onClick={action}>
                        <div className="toggle-dot w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"></div>
                    </div>
                </label>
            </div>
        </section>    
    )
}

export default Header
