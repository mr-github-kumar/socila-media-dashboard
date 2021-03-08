import React from 'react'

function Main() {
    return (
       <section className="main w-full h-auto max-w-4xl flex gap-6">
           <div className="main-facebook w-48 h-48 bg-darkBlue rounded-lg border-t-4 border-facebook flex flex-col items-center justify-evenly shadow-lg">
               <div className="fb-user flex  items-center gap-2">
                    <i class="fab fa-facebook-square text-facebook"></i>
                   <span className="user text-mediumBlue text-xs font-semibold">@nathanf</span>
               </div>
               <div className="facebook-followers flex flex-col gap-1 items-center">
                   <span className="number text-white text-5xl font-bold">1987</span>
                   <span className="subtitle uppercase tracking-widest text-mediumBlue font-semibold text-xs">followers</span>
               </div>
               <div className="fb-daily flex gap-1 text-xs font-bold text-limeGreen items-center">
                   <i class="fas fa-sort-up self-end"></i>
                   <h6>12</h6>
                   <span className="days">Today</span>
               </div>
           </div>
           <div className="main-twitter w-48 h-48 bg-darkBlue rounded-lg border-t-4 border-twitter flex flex-col items-center justify-evenly shadow-lg">
               <div className="twitter-user flex  items-center gap-2">
                    <i class="fab fa-twitter-square text-twitter"></i>
                   <span className="user text-mediumBlue text-xs font-semibold">@nathanf</span>
               </div>
               <div className="twitter-followers flex flex-col gap-1 items-center">
                   <span className="number text-white text-5xl font-bold">1044</span>
                   <span className="subtitle uppercase tracking-widest text-mediumBlue font-semibold text-xs">followers</span>
               </div>
               <div className="twitter-daily flex gap-1 text-xs font-bold text-limeGreen items-center">
                   <i class="fas fa-sort-up self-end"></i>
                   <h6>99</h6>
                   <span className="days">Today</span>
               </div>
           </div>
           <div className="main-instagram w-48 h-48 bg-darkBlue rounded-lg border-t-4 border-instagram flex flex-col items-center justify-evenly shadow-lg">
               <div className="insta-user flex  items-center gap-2">
                    <i class="fab fa-instagram-square text-instagram"></i>
                   <span className="user text-mediumBlue text-xs font-semibold">@realnathanf</span>
               </div>
               <div className="insta-followers flex flex-col gap-1 items-center">
                   <span className="number text-white text-5xl font-bold">11k</span>
                   <span className="subtitle uppercase tracking-widest text-mediumBlue font-semibold text-xs">followers</span>
               </div>
               <div className="insta-daily flex gap-1 text-xs font-bold text-limeGreen items-center">
                   <i class="fas fa-sort-up self-end"></i>
                   <h6>1044</h6>
                   <span className="days">Today</span>
               </div>
           </div>
           <div className="main-youtube w-48 h-48 bg-darkBlue rounded-lg border-t-4 border-youtube flex flex-col items-center justify-evenly shadow-lg">
               <div className="youtube-user flex  items-center gap-2">
                    <i class="fab fa-youtube-square text-youtube"></i>
                   <span className="user text-mediumBlue text-xs font-semibold">@nathanf</span>
               </div>
               <div className="youtube-followers flex flex-col gap-1 items-center">
                   <span className="number text-white text-5xl font-bold">8239</span>
                   <span className="subtitle uppercase tracking-widest text-mediumBlue font-semibold text-xs">followers</span>
               </div>
               <div className="youtube-daily flex gap-1 text-xs font-bold text-brightRed items-center">
                   <i class="fas fa-sort-down self-end"></i>
                   <h6>144</h6>
                   <span className="days">Today</span>
               </div>
           </div>
        </section>
    )
}

export default Main
