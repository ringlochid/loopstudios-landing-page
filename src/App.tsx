import './index.css'

function App() {

  return (
    <>
      <div className="w-full bg-colors-white">
        {/* ===== HERO SECTION ===== */}
        <header className="px-6 lg:px-20 py-10 w-full h-162.5 relative flex flex-col justify-center items-center">
          <picture className="absolute inset-0 w-full h-full">
            <source media="(min-width: 768px)" srcSet="/images/desktop/image-hero.jpg" />
            <img className="w-full h-full object-cover" src="/images/mobile/image-hero.jpg" alt="" />
          </picture>
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="w-full lg:max-w-[69.375rem] lg:mx-auto px-6 relative flex flex-col justify-between items-start flex-1">
            <nav aria-label="Primary" className="self-stretch inline-flex justify-between items-center">
              <a href="/" aria-label="Loopstudios home"><img src="/images/logo.svg" alt="Loopstudios" /></a>
              {/* Mobile hamburger */}
              <button type="button" aria-label="Open menu" className="lg:hidden cursor-pointer bg-transparent border-none p-0">
                <img src="/images/icon-hamburger.svg" alt="" className="w-6 h-4" />
              </button>
              {/* Desktop nav links */}
              <div className="hidden lg:flex items-center gap-8">
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">About</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Careers</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Events</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Products</a>
                <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Support</a>
              </div>
            </nav>
            <div className="self-stretch lg:self-auto outline-2 -outline-offset-2 outline-colors-white p-6 lg:max-w-[40.625rem]">
              <h1 className="text-colors-white text-[2.5rem] lg:text-7xl font-light font-josefin uppercase leading-11 lg:leading-18">Immersive experiences that deliver</h1>
            </div>
            <div />
          </div>
        </header>

        <main>
        {/* ===== INTERACTIVE VR SECTION ===== */}
        <section aria-labelledby="vr-heading" className="w-full px-6 lg:px-20 py-24 flex flex-col items-center">
          <div className="w-full lg:max-w-[69.375rem] lg:mx-auto flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-0 lg:relative">
            <div className="w-full lg:w-[55%] relative bg-colors-blue-50">
              <picture>
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-interactive.jpg" />
                <img className="w-full object-cover" src="/images/mobile/image-interactive.jpg" alt="Interactive VR" />
              </picture>
            </div>
            <div className="w-full lg:w-[50%] lg:absolute lg:right-0 lg:bottom-0 lg:bg-colors-white lg:pt-24 lg:pl-24 flex flex-col justify-start items-center lg:items-start gap-4">
              <h2 id="vr-heading" className="self-stretch text-center lg:text-left text-colors-black text-[2rem] lg:text-5xl font-light font-josefin uppercase leading-8 lg:leading-12">The leader in interactive VR</h2>
              <p className="self-stretch opacity-50 text-center lg:text-left text-colors-black text-[0.9375rem] font-normal font-alata leading-6.5">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
          </div>
        </section>

        {/* ===== OUR CREATIONS SECTION ===== */}
        <section aria-labelledby="creations-heading" className="w-full px-6 lg:px-20 pb-24 flex flex-col items-center gap-6 lg:gap-16">
          <div className="w-full lg:max-w-[69.375rem] lg:mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h2 id="creations-heading" className="self-stretch text-center lg:text-left text-colors-black text-[2rem] lg:text-5xl font-light font-josefin uppercase leading-8 lg:leading-12">OUR CREATIONS</h2>
            {/* Desktop SEE ALL button */}
            <button className="hidden lg:inline-flex w-40 h-10 outline outline-offset-[-0.50px] outline-colors-black justify-center items-center cursor-pointer bg-transparent hover:bg-colors-black hover:text-colors-white transition-colors">
              <span className="text-sm font-normal font-alata tracking-widest">SEE ALL</span>
            </button>
          </div>
          <div className="w-full lg:max-w-[69.375rem] lg:mx-auto flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-7">

            {/* Deep Earth */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-deep-earth.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-deep-earth.jpg" alt="Deep Earth" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70  transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">DEEP<br/>EARTH</h3>
            </div>

            {/* Night Arcade */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-night-arcade.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-night-arcade.jpg" alt="Night Arcade" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">NIGHT<br/>ARCADE</h3>
            </div>

            {/* Soccer Team VR */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-soccer-team.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-soccer-team.jpg" alt="Soccer Team VR" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">SOCCER<br/>TEAM VR</h3>
            </div>

            {/* The Grid */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-grid.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-grid.jpg" alt="The Grid" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">THE<br/>GRID</h3>
            </div>

            {/* From Up Above VR */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-from-above.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-from-above.jpg" alt="From Up Above VR" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">FROM UP<br/>ABOVE VR</h3>
            </div>

            {/* Pocket Borealis */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-pocket-borealis.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-pocket-borealis.jpg" alt="Pocket Borealis" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">POCKET<br/>BOREALIS</h3>
            </div>

            {/* The Curiosity */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-curiosity.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-curiosity.jpg" alt="The Curiosity" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">THE<br/>CURIOSITY</h3>
            </div>

            {/* Make It Fisheye */}
            <div className="self-stretch h-30 md:h-50 lg:h-[28.75rem] relative overflow-hidden group cursor-pointer">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/images/desktop/image-fisheye.jpg" />
                <img className="w-full h-full object-cover" src="/images/mobile/image-fisheye.jpg" alt="Make It Fisheye" />
              </picture>
              <div className="absolute inset-0 bg-linear-to-r lg:bg-linear-to-t from-black/60 to-black/0 group-hover:from-white/70 group-hover:to-white/70 transition-all" />
              <h3 className="absolute bottom-5 left-5 text-colors-white text-2xl font-light font-josefin uppercase leading-6 group-hover:text-colors-black transition-colors">MAKE IT<br/>FISHEYE</h3>
            </div>

          </div>
          {/* Mobile SEE ALL button */}
          <button className="lg:hidden mt-2 w-40 h-10 outline outline-offset-[-0.50px] outline-colors-black inline-flex justify-center items-center cursor-pointer bg-transparent hover:bg-colors-black text-colors-black hover:text-colors-white transition-colors">
            <span className="text-sm font-normal font-alata tracking-widest">SEE ALL</span>
          </button>
        </section>
        </main>

        {/* ===== FOOTER ===== */}
        <footer className="w-full bg-colors-black py-14 flex flex-col items-center">
          <div className="w-full lg:max-w-[69.375rem] lg:mx-auto px-6 lg:px-20 flex flex-col md:grid md:grid-cols-2 items-center md:items-stretch gap-8 md:gap-6">
            {/* Row 1 left: Logo */}
            <a href="/" aria-label="Loopstudios home" className="md:justify-self-start">
              <img src="/images/logo.svg" alt="Loopstudios" />
            </a>
            {/* Row 1 right: Social icons */}
            <div className="flex justify-center md:justify-end items-center gap-4 order-3 md:order-0">
              <a href="#"><img src="/images/icon-facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#"><img src="/images/icon-twitter.svg" alt="Twitter" className="w-6 h-5" /></a>
              <a href="#"><img src="/images/icon-pinterest.svg" alt="Pinterest" className="w-6 h-6" /></a>
              <a href="#"><img src="/images/icon-instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
            </div>
            {/* Row 2 left: Nav links */}
            <nav aria-label="Footer" className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 order-2 md:order-0">
              <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">About</a>
              <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Careers</a>
              <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Events</a>
              <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Products</a>
              <a href="#" className="text-colors-white text-base font-normal font-alata leading-6 hover:underline underline-offset-8">Support</a>
            </nav>
            {/* Row 2 right: Copyright */}
            <p className="opacity-50 text-colors-white text-base font-normal font-alata leading-6 text-center md:text-right md:self-end order-4 md:order-0">© 2021 Loopstudios. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
