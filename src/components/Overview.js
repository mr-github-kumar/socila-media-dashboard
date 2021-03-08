import React from 'react'

function Overview() {
    return (
        <section className="overview w-full h-full max-w-4xl flex flex-col gap-4">
            <h1 className="overview-title text-white font-bold text-left">Overview - Today</h1>
            <div className="overview-main w-full h-full flex gap-6">
                {/* Facebook */}
                <div className="overview-facebook w-48 flex flex-col gap-4 items-between">
                    <div className="facebook-view w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Page Views</span>
                            <i class="fab fa-facebook-square text-facebook"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">87</span>
                            <span className="text-limeGreen flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-up"/>
                                <h6>3%</h6>
                            </span>                            
                        </div>
                    </div>
                    <div className="facebook-like w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Likes</span>
                            <i class="fab fa-facebook-square text-facebook"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">52</span>
                            <span className="text-brightRed flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-down"/>
                                <h6>2%</h6>
                            </span>                            
                        </div>
                    </div>                    
                </div>
                
                {/* Twitter */}
                <div className="overview-twitter w-48 flex flex-col gap-4 items-between">
                    <div className="twitter-view w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Retweets</span>
                            <i class="fab fa-twitter-square text-twitter"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">117</span>
                            <span className="text-limeGreen flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-up"/>
                                <h6>303</h6>
                            </span>                            
                        </div>
                    </div>
                    <div className="twitter-like w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Likes</span>
                            <i class="fab fa-twitter-square text-twitter"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">507</span>
                            <span className="text-limeGreen flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-up"/>
                                <h6>553</h6>
                            </span>                            
                        </div>
                    </div>                    
                </div>
            
                {/* Instagram */}
                <div className="overview-instagram w-48 flex flex-col gap-4 items-between">
                    <div className="instagram-view w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Profile Views</span>
                            <i class="fab fa-instagram-square text-instagram"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">52k</span>
                            <span className="text-limeGreen flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-up"/>
                                <h6>1375</h6>
                            </span>                            
                        </div>
                    </div>
                    <div className="instagram-like w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Likes</span>
                            <i class="fab fa-instagram-square text-instagram"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">5462</span>
                            <span className="text-limeGreen flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-up"/>
                                <h6>2257</h6>
                            </span>                            
                        </div>
                    </div>                    
                </div>
                
                {/* Youtube */}
                <div className="overview-youtube w-48 flex flex-col gap-4 items-between">
                    <div className="youtube-view w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Total Views</span>
                            <i class="fab fa-youtube-square text-youtube"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">1407</span>
                            <span className="text-brightRed flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-down"/>
                                <h6>12%</h6>
                            </span>                            
                        </div>
                    </div>
                    <div className="youtube-like w-full h-28 bg-darkBlue flex flex-col p-4 rounded-lg justify-center gap-6 shadow-lg">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-mediumBlue">Likes</span>
                            <i class="fab fa-youtube-square text-youtube"/>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-white">107</span>
                            <span className="text-brightRed flex items-center justify-center gap-1 text-xs font-bold"> 
                                <i class="fas fa-sort-down"/>
                                <h6>19%</h6>
                            </span>                            
                        </div>
                    </div>                    
                </div>
            </div>
        </section>
    )
}

export default Overview;
