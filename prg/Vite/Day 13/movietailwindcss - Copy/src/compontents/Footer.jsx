const Footer = () => {
  return (
    <>
      <div className="mt-12 text-center text-sm text-gray-500">
        <footer className="w-full bg-black text-white py-6 mt-5">
          <div className="max-w-5xl mx-auto text-center space-y-2">
            <h2 className="font-semibold text-lg">My Movie Page</h2>

            <div className="flex justify-center gap-4 text-sm text-gray-300">
              <a href="#" className="hover:text-white">
                Home
              </a>
              <a href="#" className="hover:text-white">
                Movies
              </a>
              <a href="#" className="hover:text-white">
                About
              </a>
            </div>

            <p className="text-xs text-gray-500">
              © 2026 My Movie Page. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
