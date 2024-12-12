export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col md:flex-row inter.className">
      {/* Left Column with Header and Centered Content */}
      <div className="flex-shrink-0 md:w-1/2 flex flex-col p-8 md:p-16 md:pt-8 bg-white">
        {/* Header */}
        <header className="w-full">
          <div className="flex justify-between items-center mb-8">
            <div className="text-xl font-bold brand-name">Vespi</div>
            <nav className="space-x-4 text-gray-600">
              <a href="#" className="hover:text-black">
                Womens
              </a>
              <a href="#" className="hover:text-black">
                Kids
              </a>
              <a href="#" className="hover:text-black">
                Journal
              </a>
              <a href="#" className="hover:text-black">
                About Us
              </a>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col justify-center flex-grow text-center">
          <h1 className="text-6xl font-bold leading-tight">NEW WOMENS RANGE</h1>
          <p className="mt-6 text-lg text-gray-600 text-balance">
            Our new range of overcoats made from 100% <em>cashmere</em>,
            ethically sourced, and without the price tag of old fashion houses.
          </p>
          <button className="mt-8 px-6 py-3 bg-black hover:bg-gray-800 text-white text-sm uppercase tracking-wide">
            Explore Now
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-shrink-0 md:w-1/2">
        <img
          src="/image.png"
          alt="Fashion Model"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
