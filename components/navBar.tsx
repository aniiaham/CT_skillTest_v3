const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-30 border-b border-slate-400 backdrop-filter backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl text-gray-900 font-semibold">Logo</span>
          <div className="flex space-x-4 text-gray-900">
            <a href="#history">01. HISTORY</a>
            <a href="#team">02. TEAM</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
