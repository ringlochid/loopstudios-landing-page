import './index.css'

function App() {

  return (
    <>
      <div className="w-full bg-colors-white">
        {/* ===== HERO SECTION ===== */}
        <header className="px-6 py-10 w-full h-162.5 relative flex flex-col justify-center items-center">
          <img className="absolute inset-0 w-full h-full object-cover" src="/images/mobile/image-hero.jpg" alt="Hero background" />
          <div className="px-6 relative flex flex-col justify-between items-start flex-1">
            <nav className="self-stretch inline-flex justify-between items-center">
              <img src="/images/logo.svg" alt="Loopstudios" />
              <img src="/images/icon-hamburger.svg" alt="Menu" className="w-6 h-4 cursor-pointer" />
            </nav>
            <div className="self-stretch outline-2 -outline-offset-2 outline-colors-white p-6">
              <h1 className="text-colors-white text-[2.5rem] font-light font-josefin uppercase leading-11">Immersive experiences that deliver</h1>
            </div>
            <div />
          </div>
        </header>

        {/* ===== INTERACTIVE VR SECTION ===== */}
        <section className="w-full px-6 py-24 flex flex-col items-center gap-12">
          <div className="w-full relative bg-colors-blue-50">
            <img className="w-full object-cover" src="/images/mobile/image-interactive.jpg" alt="Interactive VR" />
          </div>
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <h2 className="self-stretch text-center text-colors-black text-[2rem] font-light font-josefin uppercase leading-8">The leader in interactive VR</h2>
            <p className="self-stretch opacity-50 text-center text-colors-black text-[0.9375rem] font-normal font-alata leading-6.5">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
          </div>
        </section>

        {/* ===== OUR CREATIONS SECTION ===== */}
        <section className="w-full px-6 pb-24 flex flex-col items-center gap-6">
          <h2 className="self-stretch text-center text-colors-black text-[2rem] font-light font-josefin uppercase leading-8">OUR CREATIONS</h2>
          <div className="self-stretch flex flex-col justify-start items-start gap-6">

            {/* Deep Earth */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-deep-earth.jpg" alt="Deep Earth" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">DEEP<br/>EARTH</h3>
            </div>

            {/* Night Arcade */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-night-arcade.jpg" alt="Night Arcade" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">NIGHT<br/>ARCADE</h3>
            </div>

            {/* Soccer Team VR */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-soccer-team.jpg" alt="Soccer Team VR" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">SOCCER<br/>TEAM VR</h3>
            </div>

            {/* The Grid */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-grid.jpg" alt="The Grid" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">THE<br/>GRID</h3>
            </div>

            {/* From Up Above VR */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-from-above.jpg" alt="From Up Above VR" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">FROM UP<br/>ABOVE VR</h3>
            </div>

            {/* Pocket Borealis */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-pocket-borealis.jpg" alt="Pocket Borealis" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">POCKET<br/>BOREALIS</h3>
            </div>

            {/* The Curiosity */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-curiosity.jpg" alt="The Curiosity" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">THE<br/>CURIOSITY</h3>
            </div>

            {/* Make It Fisheye */}
            <div className="self-stretch h-30 relative">
              <img className="w-full h-full object-cover absolute inset-0" src="/images/mobile/image-fisheye.jpg" alt="Make It Fisheye" />
              <div className="absolute inset-0 bg-linear-to-r from-black/60 to-black/0" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6">MAKE IT<br/>FISHEYE</h3>
            </div>

          </div>
          <button className="mt-2 w-40 h-10 outline outline-offset-[-0.50px] outline-colors-black inline-flex justify-center items-center cursor-pointer bg-transparent">
            <span className="text-colors-black text-sm font-normal font-alata tracking-widest">SEE ALL</span>
          </button>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="w-full bg-colors-black py-14 flex flex-col items-center">
          <div className="w-full px-6 flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6">
              <img src="/images/logo.svg" alt="Loopstudios" />
              <nav className="flex flex-col items-center gap-4">
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6">About</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6">Careers</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6">Events</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6">Products</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6">Support</a>
              </nav>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center items-center gap-4">
                <a href="#"><img src="/images/icon-facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
                <a href="#"><img src="/images/icon-twitter.svg" alt="Twitter" className="w-6 h-5" /></a>
                <a href="#"><img src="/images/icon-pinterest.svg" alt="Pinterest" className="w-6 h-6" /></a>
                <a href="#"><img src="/images/icon-instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
              </div>
              <p className="opacity-50 text-colors-white text-base font-normal font-alata leading-6">© 2021 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
